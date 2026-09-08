"use client";

import { useRef, useState } from "react";
import { Dialogue } from "@/lib/types";
import { speakSequence, stopSpeaking } from "@/lib/speech";
import AudioButton from "./AudioButton";

function useRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [levels, setLevels] = useState<number[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const rafId = useRef<number | null>(null);

  async function start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);

      function tick() {
        analyser.getByteFrequencyData(data);
        setLevels(Array.from(data.slice(0, 16)));
        rafId.current = requestAnimationFrame(tick);
      }
      tick();

      const rec = new MediaRecorder(stream);
      chunks.current = [];
      rec.ondataavailable = (e) => chunks.current.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        audioCtx.close();
        if (rafId.current) cancelAnimationFrame(rafId.current);
        setLevels([]);
      };
      rec.start();
      mediaRecorder.current = rec;
      setRecording(true);
    } catch {
      alert("Tidak bisa mengakses mikrofon. Cek izin browser Anda.");
    }
  }

  function stop() {
    mediaRecorder.current?.stop();
    setRecording(false);
  }

  return { recording, audioUrl, levels, start, stop };
}

function RecordWidget({ label }: { label: string }) {
  const { recording, audioUrl, levels, start, stop } = useRecorder();

  return (
    <div className="mt-2 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
      <button
        onClick={recording ? stop : start}
        className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow transition active:scale-90 ${
          recording ? "bg-red-500 animate-pulse" : "bg-emerald-600 hover:bg-emerald-700"
        }`}
        aria-label={recording ? "Berhenti merekam" : "Rekam suara Anda"}
      >
        {recording ? "■" : "🎤"}
      </button>
      <div className="flex h-8 flex-1 items-end gap-0.5">
        {recording
          ? levels.map((l, i) => (
              <span
                key={i}
                className="w-1.5 rounded-t bg-emerald-500"
                style={{ height: `${Math.max(4, (l / 255) * 32)}px` }}
              />
            ))
          : audioUrl && <audio controls src={audioUrl} className="h-8 w-full" />}
      </div>
      <span className="shrink-0 text-xs text-slate-400">{label}</span>
    </div>
  );
}

function DialoguePanel({ dialogue }: { dialogue: Dialogue }) {
  const speakers = Array.from(new Set(dialogue.lines.map((d) => d.speaker)));
  const [myRole, setMyRole] = useState<string>(speakers[0]);
  const [showId, setShowId] = useState(true);
  const [playing, setPlaying] = useState(false);

  async function playAll() {
    setPlaying(true);
    await speakSequence(dialogue.lines.map((l) => l.ar));
    setPlaying(false);
  }

  function stop() {
    stopSpeaking();
    setPlaying(false);
  }

  return (
    <div>
      <p className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
        {dialogue.setting}
      </p>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-slate-600">Peranmu:</span>
        {speakers.map((s) => (
          <button
            key={s}
            onClick={() => setMyRole(s)}
            className={`rounded-full px-3 py-1 font-arabic text-sm transition ${
              myRole === s
                ? "bg-emerald-600 text-white"
                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            }`}
          >
            {s}
          </button>
        ))}
        <button
          onClick={() => setShowId((v) => !v)}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 transition hover:bg-slate-200"
        >
          {showId ? "Sembunyikan arti" : "Tampilkan arti"}
        </button>
        <button
          onClick={playing ? stop : playAll}
          className="ml-auto rounded-full bg-amber-500 px-4 py-1.5 text-sm font-medium text-white shadow transition hover:bg-amber-600"
        >
          {playing ? "■ Hentikan" : "▶ Putar dialog"}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {dialogue.lines.map((line, i) => {
          const isMine = line.speaker === myRole;
          return (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                isMine
                  ? "self-end bg-emerald-100"
                  : "self-start bg-white ring-1 ring-slate-100"
              }`}
            >
              <div className="mb-1 text-xs font-semibold text-slate-400">
                {line.speaker} {isMine && "(giliranmu 🎙️)"}
              </div>
              <div className="flex items-center gap-2">
                <AudioButton text={line.ar} className="h-7 w-7 shrink-0 text-sm" />
                <span dir="rtl" className="font-arabic text-xl">
                  {line.ar}
                </span>
              </div>
              {showId && <div className="mt-1 text-sm text-slate-500">{line.id}</div>}
              {isMine && <RecordWidget label="Rekam & bandingkan" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SpeakingTab({ dialogues }: { dialogues: Dialogue[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-4 grid gap-1 rounded-2xl bg-slate-100 p-1 sm:grid-cols-2">
        {dialogues.map((d, i) => (
          <button
            key={i}
            onClick={() => {
              stopSpeaking();
              setActive(i);
            }}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              active === i
                ? "bg-white text-emerald-700 shadow"
                : "text-slate-500 hover:text-emerald-600"
            }`}
          >
            <span className="block">Hiwar {i + 1} — {d.title}</span>
            <span dir="rtl" className="block font-arabic text-base">
              {d.titleAr}
            </span>
          </button>
        ))}
      </div>

      <DialoguePanel key={active} dialogue={dialogues[active]} />
    </div>
  );
}
