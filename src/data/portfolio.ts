export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web App" | "Mobile / API" | "Tugas Akhir / Riset";
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  companyOrOrg: string;
  type: "Magang" | "Organisasi" | "Freelance" | "Proyek Kampus";
  period: string;
  location: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: "Dasar" | "Menengah" | "Mahir"; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Alex Pratama",
    headline: "Fresh Graduate Teknik Informatika | Junior Web Developer & Tech Enthusiast",
    shortBio: "Lulusan baru dengan ketertarikan tinggi pada pembuatan aplikasi web modern, performa tinggi, dan pengalaman pengguna yang intuitif. Memiliki pemahaman kuat tentang React, Next.js, TypeScript, dan arsitektur RESTful API.",
    location: "Jakarta, Indonesia",
    status: "Tersedia untuk Kerja Penuh Waktu / Magang",
    statusAvailable: true,
    email: "alex.pratama@example.com",
    phone: "+62 812-3456-7890",
    socialLinks: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      instagram: "https://instagram.com/username",
    },
    resumeUrl: "#", // User dapat menaruh link file PDF di folder public atau Google Drive
  },

  stats: [
    { label: "IPK / GPA", value: "3.85 / 4.00" },
    { label: "Proyek Selesai", value: "12+" },
    { label: "Sertifikasi", value: "5+" },
    { label: "Jam Koding", value: "800+" },
  ],

  about: {
    longBio: [
      "Halo! Saya Alex, lulusan baru jurusan Teknik Informatika yang gemar memecahkan masalah melalui kode dan teknologi. Selama masa studi, saya aktif mengembangkan berbagai proyek web, baik tugas kuliah, kompetisi hackathon, hingga proyek pesanan lepas (freelance).",
      "Saya memiliki etos kerja disiplin, rasa ingin tahu yang tinggi, dan kemampuan belajar hal baru dengan cepat. Saya selalu antusias untuk berkontribusi dalam tim engineering yang dinamis serta siap mengasah kemampuan teknis di industri teknologi.",
    ],
    strengths: [
      {
        title: "Cepat Beradaptasi",
        description: "Mampu mempelajari teknologi, framework, dan alur kerja baru dalam waktu singkat.",
      },
      {
        title: "Problem Solver",
        description: "Terbiasa mengurai masalah kompleks menjadi solusi kode yang terstruktur dan efisien.",
      },
      {
        title: "Kolaborasi Tim",
        description: "Pengalaman berorganisasi dan proyek tim melatih komunikasi yang jelas dan tanggap.",
      },
      {
        title: "Fokus pada Kualitas",
        description: "Menulis kode yang bersih (clean code), teruji, responsif, dan mudah dipelihara.",
      },
    ],
  },

  skills: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "Mahir" },
        { name: "Next.js", level: "Menengah" },
        { name: "TypeScript", level: "Menengah" },
        { name: "Tailwind CSS", level: "Mahir" },
        { name: "HTML5 & Modern CSS", level: "Mahir" },
        { name: "JavaScript (ES6+)", level: "Mahir" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js & Express", level: "Menengah" },
        { name: "RESTful APIs", level: "Mahir" },
        { name: "PostgreSQL", level: "Menengah" },
        { name: "MySQL", level: "Menengah" },
        { name: "Prisma ORM", level: "Menengah" },
        { name: "Supabase / Firebase", level: "Menengah" },
      ],
    },
    {
      category: "Tools & DevOps Dasar",
      skills: [
        { name: "Git & GitHub", level: "Mahir" },
        { name: "VS Code", level: "Mahir" },
        { name: "Postman", level: "Mahir" },
        { name: "Figma (UI Slice)", level: "Menengah" },
        { name: "Vercel / Netlify", level: "Mahir" },
        { name: "Docker (Dasar)", level: "Dasar" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      title: "Sistem Manajemen Inventaris & POS Kampus",
      description: "Aplikasi berbasis web untuk pencatatan stok barang, transaksi kasir instan, dan pelaporan keuangan bulanan dengan visualisasi grafik.",
      category: "Web App",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      demoUrl: "https://contoh-pos-app.vercel.app",
      githubUrl: "https://github.com/username/kampus-pos-system",
      highlights: [
        "Mendukung otentikasi multi-role (Admin dan Kasir)",
        "Fitur ekspor laporan transaksi harian ke PDF & Excel",
        "Dashboard analitik penjualan real-time dengan chart responsif",
      ],
    },
    {
      id: "project-2",
      title: "Platform Lowongan Magang Mahasiswa (InternHub)",
      description: "Platform portal informasi lowongan magang terkurasi untuk mahasiswa dengan filter lokasi, jurusan, dan fitur bookmark lowongan.",
      category: "Web App",
      tags: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
      demoUrl: "https://contoh-internhub.vercel.app",
      githubUrl: "https://github.com/username/internhub-portal",
      highlights: [
        "Pencarian cepat dengan filter multi-kategori",
        "Form lamaran instan yang terintegrasi pengiriman notifikasi email",
        "Desain mobile-first yang dioptimalkan untuk browsing via smartphone",
      ],
    },
    {
      id: "project-3",
      title: "RESTful API Layanan E-Commerce Microservice",
      description: "Backend API yang mengelola otentikasi JWT, keranjang belanja, checkout transaksi, dan webhook payment gateway simulasi.",
      category: "Mobile / API",
      tags: ["Node.js", "Express.js", "JWT", "PostgreSQL", "Postman Documentation"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
      demoUrl: "https://documenter.getpostman.com",
      githubUrl: "https://github.com/username/ecommerce-api-backend",
      highlights: [
        "Penerapan Rate Limiting dan sanitasi data untuk keamanan API",
        "Dokumentasi API lengkap dan siap uji coba di Postman",
        "Arsitektur MVC (Model-View-Controller) yang rapi dan modular",
      ],
    },
    {
      id: "project-4",
      title: "Analisis Sentimen Opini Publik Menggunakan NLP (Skripsi/TA)",
      description: "Penelitian skripsi untuk mengklasifikasikan sentimen ulasan publik terhadap kebijakan transportasi publik berbasis model Naive Bayes dan SVM.",
      category: "Tugas Akhir / Riset",
      tags: ["Python", "Flask", "Scikit-Learn", "NLTK", "Chart.js"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=900&auto=format&fit=crop",
      demoUrl: "https://contoh-nlp-sentimen.vercel.app",
      githubUrl: "https://github.com/username/skripsi-analisis-sentimen",
      highlights: [
        "Mencapai akurasi klasifikasi sebesar 91.4% dengan evaluasi Confusion Matrix",
        "Membangun dashboard visualisasi hasil scrapping dan preprocessing teks",
        "Dipublikasikan dalam prosiding seminar nasional kampus",
      ],
    },
  ] as Project[],

  education: [
    {
      institution: "Universitas Indonesia / Universitas Negeri",
      degree: "Sarjana Komputer (S.Kom)",
      major: "Teknik Informatika",
      period: "2020 - 2024",
      gpa: "3.85 / 4.00 (Cumlaude)",
      achievements: [
        "Penerima Beasiswa Prestasi Akademik",
        "Juara 2 Kompetisi Web Development Tingkat Universitas (2023)",
        "Koordinator Asisten Laboratorium Pemrograman Web (2022 - 2023)",
      ],
    },
    {
      institution: "SMA Negeri 1 / SMK Rekayasa Perangkat Lunak",
      degree: "Pendidikan Menengah Atas",
      major: "MIPA / RPL",
      period: "2017 - 2020",
      achievements: ["Juara Olimpiade Sains Komputer Tingkat Kota"],
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia (Kemenpora/Google Partner)",
      issueDate: "2024",
      credentialUrl: "https://www.dicoding.com/certificates",
      skills: ["Progressive Web Apps", "Web Performance Optimization", "Automated Testing"],
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera & Meta",
      issueDate: "2023",
      credentialUrl: "https://coursera.org",
      skills: ["React", "UI/UX", "JavaScript Advanced", "Version Control"],
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      issueDate: "2023",
      credentialUrl: "https://freecodecamp.org",
      skills: ["HTML5", "CSS3", "Flexbox & Grid", "Accessibility (a11y)"],
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      issueDate: "2022",
      credentialUrl: "https://www.dicoding.com",
      skills: ["OOP JavaScript", "Asynchronous Programming", "Node.js"],
    },
  ] as CertificationItem[],

  experience: [
    {
      role: "Junior Web Developer (Magang / Internship)",
      companyOrOrg: "PT Teknologi Inovasi Nusantara",
      type: "Magang",
      period: "Feb 2024 - Jun 2024",
      location: "Jakarta (Hybrid)",
      responsibilities: [
        "Mengembangkan dan memperbaiki komponen UI dashboard klien menggunakan React dan Tailwind CSS.",
        "Mengintegrasikan lebih dari 15 endpoint REST API ke interface web dengan handling state yang mulus.",
        "Meningkatkan skor performa Lighthouse halaman dari 68 menjadi 92 melalui optimasi gambar dan lazy loading.",
        "Berpartisipasi dalam daily standup meeting dan alur kerja Agile/Scrum.",
      ],
    },
    {
      role: "Ketua Divisi Media & Teknologi",
      companyOrOrg: "Himpunan Mahasiswa Informatika (HMIF)",
      type: "Organisasi",
      period: "Jan 2022 - Des 2022",
      location: "Kampus",
      responsibilities: [
        "Memimpin tim beranggotakan 8 orang untuk mengelola website organisasi dan publikasi digital.",
        "Menginisiasi pembuatan website pendaftaran seminar tahunan kampus yang berhasil melayani 1.200+ pendaftar.",
        "Mengadakan pelatihan workshop pengenalan Git & GitHub untuk mahasiswa baru.",
      ],
    },
    {
      role: "Asisten Praktikum Pemrograman Web",
      companyOrOrg: "Laboratorium Komputasi & Software",
      type: "Proyek Kampus",
      period: "Sep 2022 - Jan 2023",
      location: "Kampus",
      responsibilities: [
        "Membimbing lebih dari 70 mahasiswa dalam praktikum HTML, CSS, JavaScript, dan PHP/MySQL.",
        "Menilai tugas mingguan, proyek akhir mahasiswa, serta memberikan sesi konsultasi debugging kode.",
      ],
    },
  ] as ExperienceItem[],
};

