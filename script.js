// List of Quran verses related to patience
const ayahs = [
  {
    arabic: "فَصَبْرٌ جَمِيلٌ",
    translation: "So patience is most fitting. (Surah Yusuf 12:18)"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient. (Surah Al-Baqarah 2:153)"
  },
  {
    arabic: "وَبَشِّرِ الصَّابِرِينَ",
    translation: "And give good tidings to the patient. (Surah Al-Baqarah 2:155)"
  },
  {
    arabic: "وَلَنَصْبِرَنَّ عَلَىٰ مَا آذَيْتُمُونَا",
    translation: "And we will surely be patient over whatever harm you cause us. (Surah Ibrahim 14:12)"
  },
  {
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
    translation: "Our Lord, pour upon us patience. (Surah Al-A'raf 7:126)"
  }
];

// Show random ayah on page load
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const ayahText = document.getElementById("ayah");
  const translationText = document.getElementById("translation");

  // Pick a random verse
  const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
  ayahText.textContent = randomAyah.arabic;
  translationText.textContent = randomAyah.translation;

  // Wait for 2.2 seconds then hide loader
  setTimeout(() => {
    loader.style.display = "none";
  }, 2200);
});
