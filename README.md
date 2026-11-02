# 🚀 Web Portofolio Pribadi Modern & Responsif

Web portofolio pribadi modern yang dibangun menggunakan **Next.js 16**, **React 19**, **Tailwind CSS**, dan **Lucide Icons**. Dirancang khusus untuk **Fresh Graduate / Mahasiswa** maupun profesional tech agar tampil menonjol di mata recruiter dan klien.

---

## ✨ Fitur Utama

- **Header / Sticky Glassmorphism Navbar**: Dilengkapi indikator ketersediaan kerja *(Available for Work)* dan navigasi mulus (*smooth scrolling*).
- **Hero Section**: Headline profesional, statistik capaian (IPK, jumlah proyek, jam koding), CTA ganda (*Lihat Proyek* & *Unduh CV*), serta tautan media sosial.
- **Tentang Saya (About Me)**: Penjelasan bio, pilar kekuatan (*Fast Learner, Problem Solver, Team Player*), dan fokus minat karier.
- **Keahlian (Tech Stack & Skills)**: Dikelompokkan per kategori (*Frontend*, *Backend & Database*, *Tools & DevOps*) dengan badge tingkat kemahiran (*Mahir, Menengah, Dasar*).
- **Karya & Proyek (Showcase)**: Filter interaktif per kategori (*Web App*, *Mobile/API*, *Tugas Akhir/Riset*), thumbnail visual, highlight fitur kunci, serta tautan langsung ke Live Demo dan Source Code GitHub.
- **Riwayat Pendidikan & Sertifikasi**: Timeline formal dengan catatan capaian/beasiswa dan lisensi sertifikasi profesional (Dicoding, Coursera, freeCodeCamp, dll).
- **Pengalaman Kerja & Organisasi**: Riwayat magang, kepengurusan organisasi, dan kepanitiaan dengan uraian kontribusi nyata.
- **Kontak Interaktif**: Fitur salin email instan satu klik dan formulir kirim pesan otomatis terhubung ke email client.
- **Konfigurasi Terpusat**: Seluruh data (nama, bio, tautan, proyek, skill) tersimpan dalam satu file `src/data/portfolio.ts` sehingga sangat mudah disesuaikan tanpa perlu mengedit komponen satu per satu.

---

## 🛠️ Panduan Menjalankan di Lokal

### 1. Masuk ke direktori proyek
```bash
cd "C:\Users\HP OMEN\.gemini\antigravity\scratch\portfolio"
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka peramban Anda di [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya secara langsung.

### 3. Menguji build produksi
```bash
npm run build
```

---

## ✏️ Cara Mengubah Data Portofolio Anda

Seluruh teks, riwayat, dan tautan diatur secara rapi di file:
📁 **`src/data/portfolio.ts`**

Anda cukup membuka file tersebut dan mengganti:
1. **`personal`**: Nama Anda, headline pekerjaan yang diinginkan, bio singkat, alamat email, lokasi, dan tautan akun media sosial (GitHub, LinkedIn, dll).
2. **`stats`**: Nilai IPK, total proyek yang telah dibuat, sertifikasi yang dimiliki.
3. **`skills`**: Daftar bahasa pemrograman dan tools yang Anda kuasai.
4. **`projects`**: Judul proyek, deskripsi, teknologi yang dipakai, serta tautan demo dan repository.
5. **`education` & `certifications`**: Nama kampus, jurusan, tahun kelulusan, dan sertifikat yang Anda miliki.
6. **`experience`**: Pengalaman magang, organisasi kampus, atau asisten laboratorium.

### Menambahkan Berkas CV (PDF)
Simpan file CV Anda (misal `cv-alex.pdf`) di dalam folder:
📁 `public/cv.pdf`

Lalu di file `src/data/portfolio.ts`, ubah:
```ts
resumeUrl: "/cv.pdf",
```

---

## 🌐 Panduan Publish / Deploy ke Vercel (Gratis)

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [GitHub.com](https://github.com) dan buat repository baru (misal: `my-portfolio`).
2. Di terminal folder proyek ini, jalankan perintah berikut (ganti `<username>` dan `<repo-name>` sesuai akun GitHub Anda):
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

### Langkah 2: Deploy Otomatis di Vercel
1. Buka [Vercel.com](https://vercel.com) lalu masuk (*Sign In*) menggunakan akun **GitHub** Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `my-portfolio` yang baru saja Anda push, lalu klik **"Import"**.
4. Di bagian konfigurasi:
   - **Framework Preset**: Biarkan otomatis `Next.js`.
   - **Build Command**: `npm run build`
5. Klik **"Deploy"**.
6. Dalam waktu ~1 menit, website portofolio Anda sudah aktif di internet dan memiliki URL publik gratis (contoh: `https://my-portfolio-alex.vercel.app`).

Setiap kali Anda melakukan `git commit` dan `git push` ke GitHub, Vercel akan otomatis memperbarui website Anda secara instan!
