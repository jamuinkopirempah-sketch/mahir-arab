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
