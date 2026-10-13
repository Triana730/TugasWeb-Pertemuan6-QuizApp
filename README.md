# 🧠 Interactive Quiz App

Aplikasi kuis interaktif berbasis web dengan pertanyaan pilihan ganda, skor otomatis, dan penyimpanan high score di LocalStorage. Dibuat sebagai **Tugas Rutin 6** mata kuliah Pemrograman Web.

## ✨ Fitur

- Minimal 5 pertanyaan pilihan ganda
- Soal dan pilihan jawaban dirender dinamis dengan `createElement` / `textContent`
- **Event delegation** untuk menangani klik pilihan jawaban
- Feedback visual: jawaban benar berwarna hijau, jawaban salah berwarna merah
- Skor dihitung otomatis dan ditampilkan di akhir kuis
- **High score** tersimpan di LocalStorage (tidak hilang saat halaman di-refresh)
- Navigasi antar soal tanpa reload halaman (SPA pattern)
- Tombol **Restart** untuk mengulang kuis

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript ES6+
- Web Storage API (LocalStorage)

## 📁 Struktur Project

```
TugasWeb-Pertemuan6-QuizApp/
├── index.html    # Struktur halaman
├── style.css     # Tampilan dan feedback visual
├── script.js     # Logika kuis, event delegation, LocalStorage
└── README.md
```

## 🚀 Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/Triana730/TugasWeb-Pertemuan6-QuizApp.git
   ```
2. Masuk ke folder project:
   ```bash
   cd TugasWeb-Pertemuan6-QuizApp
   ```
3. Buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code (klik kanan `index.html` lalu **Open with Live Server**).

Tidak perlu instalasi tambahan karena project ini tidak memakai library atau API key.

## 🎮 Cara Bermain

1. Baca pertanyaan yang tampil di layar
2. Klik salah satu pilihan jawaban
3. Lihat feedback: hijau berarti benar, merah berarti salah
4. Lanjut ke soal berikutnya sampai selesai
5. Lihat skor akhir dan high score, lalu klik **Restart** untuk main lagi

## 📸 Preview

_Tambahkan screenshot aplikasi di sini._

## 👤 Author

**Triana730**
GitHub: [@Triana730](https://github.com/Triana730)
