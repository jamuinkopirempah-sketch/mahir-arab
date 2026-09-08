export function speakArabic(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ar-SA";
  utter.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find((v) => v.lang.startsWith("ar"));
  if (arabicVoice) utter.voice = arabicVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

/** Membaca beberapa teks berurutan, menunggu tiap potongan selesai. */
export async function speakSequence(texts: string[], gapMs = 250) {
  for (const text of texts) {
    speakArabic(text);
    await new Promise<void>((resolve) => {
      const check = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          clearInterval(check);
          resolve();
        }
      }, 150);
    });
    await new Promise((r) => setTimeout(r, gapMs));
  }
}

export function stopSpeaking() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}
