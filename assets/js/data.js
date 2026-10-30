/**
 * Semua isi portofolio ada di file ini.
 * Untuk menambah/mengubah pengalaman, proyek, atau sertifikat, cukup edit data di bawah.
 */
window.PORTFOLIO = {
  roles: [
    'AI Engineer',
    'Peminat Machine Learning',
    'Peneliti NLP',
    'UI/UX Designer',
  ],

  stats: [
    { value: 3.56, decimals: 2, label: 'IPK · Cum Laude' },
    { value: 14, label: 'Sertifikasi' },
    { value: 8, label: 'Pengalaman Kerja & Studi' },
    { value: 10, prefix: 'Top ', label: 'Proyek AI & Cybersecurity' },
  ],

  skills: [
    {
      group: 'AI & Data',
      items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision / OCR', 'Signal Processing', 'Analisis Data', 'Python'],
    },
    {
      group: 'Tools & Platform',
      items: ['VS Code', 'Google Colab', 'Jupyter Notebook', 'JarvisLabs', 'GitHub', 'VMware', 'TeamViewer', 'Maltego'],
    },
    {
      group: 'Desain',
      items: ['Figma', 'Canva', 'Procreate', 'Usability Testing', 'Wireframing'],
    },
    {
      group: 'Dokumentasi',
      items: ['Microsoft Office', 'Google Docs', 'OneNote', 'Mendeley', 'Penulisan Ilmiah'],
    },
    {
      group: 'Bahasa',
      items: ['Bahasa Indonesia', 'Bahasa Inggris'],
    },
  ],

  /** category: professional | research | study | organization */
  experiences: [
    {
      category: 'professional',
      org: 'PT LAPI ITB',
      role: 'Programming',
      period: 'Agu 2026 – Sekarang',
      image: 'assets/img/lapi-itb.jpg',
      points: [
        'Berkontribusi dalam kegiatan pengembangan perangkat lunak melalui implementasi pemrograman, pengujian sistem, dan penyelesaian masalah teknis.',
        'Meningkatkan kemampuan pemrograman melalui pengalaman langsung dalam membangun dan memelihara solusi berbasis teknologi.',
        'Berkolaborasi dengan tim proyek dalam menganalisis kebutuhan dan mengimplementasikan solusi pemrograman yang efektif.',
      ],
    },
    {
      category: 'professional',
      org: 'NAKA',
      role: 'Content Planner',
      period: 'Jun 2025 – Feb 2026',
      points: [
        'Mengembangkan perencanaan konten dan kalender konten untuk platform media sosial yang selaras dengan strategi merek.',
        'Berkolaborasi dengan tim desain dalam merancang dan mengembangkan konten yang menarik.',
        'Memantau performa konten serta memberikan rekomendasi untuk meningkatkan strategi konten.',
      ],
    },
    {
      category: 'research',
      org: 'Universitas Jenderal Achmad Yani',
      role: 'Research Assistant',
      period: 'Apr 2025 – Nov 2025',
      points: [
        'Mendukung kegiatan penelitian melalui pengolahan dan analisis data.',
        'Mengembangkan serta mengimplementasikan algoritma untuk mendukung kebutuhan penelitian.',
        'Menyusun dokumentasi teknis, laporan penelitian, dan publikasi ilmiah.',
      ],
    },
    {
      category: 'professional',
      org: 'Universitas Jenderal Achmad Yani',
      role: 'Laboratory Assistant',
      period: 'Mar 2025 – Jul 2025',
      image: 'assets/img/lab-2.jpg',
      points: [
        'Membantu persiapan dan penyusunan kegiatan praktikum serta materi pembelajaran.',
        'Memberikan bimbingan teknis kepada mahasiswa selama praktikum, membantu pemahaman konsep pemrograman dan implementasi sistem.',
        'Berkolaborasi dengan dosen dalam menilai kompetensi mahasiswa melalui evaluasi praktik dan umpan balik yang terstruktur.',
      ],
    },
    {
      category: 'professional',
      org: 'Badan Penanggulangan Bencana Daerah Kota Cimahi (BPBD)',
      role: 'Web Development',
      period: 'Jul 2024 – Nov 2024',
      image: 'assets/img/bpbd.jpg',
      points: [
        'Mengembangkan dan mengoptimalkan portal informasi kebencanaan untuk meningkatkan akses masyarakat terhadap informasi darurat.',
        'Mendukung implementasi fitur chatbot untuk mempermudah penyampaian informasi dan layanan respons darurat.',
        'Berkontribusi dalam perancangan antarmuka serta peningkatan pengalaman pengguna (UX) pada website.',
      ],
    },
    {
      category: 'study',
      org: 'Skilvul × Kampus Merdeka',
      role: 'Studi Independen AI & Cybersecurity',
      period: 'Feb 2024 – Sep 2024',
      image: 'assets/img/top10-cert.jpg',
      points: [
        'Mengembangkan sistem deteksi penipuan kartu kredit berbasis Machine Learning.',
        'Membangun solusi ekstraksi tulisan tangan untuk digitalisasi dokumen.',
        'Menerapkan konsep AI, Cybersecurity, dan Analisis Data pada studi kasus berbasis industri — terpilih sebagai Top 10 project.',
      ],
    },
    {
      category: 'study',
      org: 'Hacktiv8 × Kampus Merdeka',
      role: 'Studi Independen UI/UX Design',
      period: 'Agu 2023 – Jan 2024',
      image: 'assets/img/figma-board.jpg',
      points: [
        'Merancang prototipe antarmuka pengguna menggunakan Figma berdasarkan kebutuhan pengguna.',
        'Melakukan usability testing untuk mengevaluasi efektivitas dan kemudahan penggunaan desain.',
        'Mengembangkan solusi desain berdasarkan hasil evaluasi dan masukan pengguna.',
      ],
    },
    {
      category: 'professional',
      org: 'Komisi Pemberantasan Korupsi Republik Indonesia (KPK)',
      role: 'Verifikator Administrasi',
      period: 'Nov 2023',
      points: [
        'Memverifikasi dokumen peserta seleksi CPNS sesuai dengan persyaratan administrasi yang berlaku.',
        'Memastikan keakuratan data dan kelengkapan dokumen selama proses verifikasi.',
        'Mengidentifikasi dan meminimalkan ketidaksesuaian data untuk mendukung kelancaran proses seleksi.',
      ],
    },
    {
      category: 'organization',
      org: 'Departemen Pengabdian Masyarakat · HM KM J IF',
      role: 'Kepala Departemen',
      period: 'Jan 2024 – Mar 2025',
      points: [
        'Memimpin perencanaan dan pelaksanaan program pengabdian masyarakat berbasis teknologi.',
        'Berkoordinasi dengan berbagai pihak untuk memastikan keberhasilan pelaksanaan program departemen.',
        'Mengelola dan mengarahkan anggota tim dalam menjalankan kegiatan departemen.',
      ],
    },
    {
      category: 'organization',
      org: 'Departemen Kajian Strategis dan Advokasi · HM KM J IF',
      role: 'Staff',
      period: 'Feb 2022 – Des 2023',
      points: [
        'Berpartisipasi dalam kajian dan analisis isu strategis terkait kemahasiswaan.',
        'Mendukung pelaksanaan program advokasi dan kegiatan organisasi.',
        'Berkontribusi dalam penyusunan rekomendasi serta program kerja departemen.',
      ],
    },
    {
      category: 'organization',
      org: 'Pengenalan Kehidupan Kampus Mahasiswa Baru Tingkat Universitas',
      role: 'Mentor (2022) · Komisi Disiplin (2023)',
      period: 'Sep 2022 & Sep 2023',
      image: 'assets/img/campus-2.jpg',
      points: [
        'Mendampingi mahasiswa baru selama orientasi dan membantu adaptasi terhadap kehidupan akademik maupun non-akademik.',
        'Menjadi penghubung antara peserta dan panitia penyelenggara.',
        'Mengawasi pelaksanaan kegiatan untuk memastikan peserta mematuhi peraturan dan tata tertib yang berlaku.',
      ],
    },
    {
      category: 'organization',
      org: 'Program Orientasi Mahasiswa Baru Jurusan Informatika',
      role: 'Sekretaris (2022) · Komisi Disiplin (2023)',
      period: 'Sep 2022 & Sep 2023',
      points: [
        'Mengelola administrasi acara, dokumentasi, dan pengarsipan untuk pelaporan dan evaluasi.',
        'Menyusun peraturan dan tata tertib sebagai pedoman pelaksanaan program.',
        'Berkolaborasi dengan panitia dalam menjaga kedisiplinan dan menyelesaikan masalah terkait peserta.',
      ],
    },
  ],

  /** tags dipakai untuk filter proyek */
  projects: [
    {
      title: 'Pengenalan Emosi Suara pada Percakapan Bahasa Indonesia (BiLSTM)',
      context: 'PKM-RE 2025 · Ketua Tim',
      tags: ['AI/ML', 'Research'],
      badge: 'Lolos seleksi tingkat universitas',
      image: 'assets/img/pkm-ser.jpg',
      summary: 'Model Deep Learning yang mengklasifikasikan kondisi emosi pada audio percakapan Bahasa Indonesia menggunakan Bidirectional LSTM.',
      points: [
        'Memimpin tim dalam pengembangan model Deep Learning untuk pengenalan emosi pada percakapan Bahasa Indonesia.',
        'Menangani persiapan dataset, ekstraksi fitur dari sinyal audio, pelatihan model, dan evaluasi performa.',
        'Melakukan eksperimen terstruktur untuk meningkatkan akurasi klasifikasi dan stabilitas model.',
        'Menyusun proposal penelitian, mengoordinasikan pelaksanaan, dan menyusun laporan perkembangan — kemudian dipublikasikan di JUTIF.',
      ],
      stack: ['Python', 'BiLSTM', 'Audio Processing', 'SMOTE'],
      links: [{ label: 'Baca publikasi', url: 'https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/5183' }],
    },
    {
      title: 'Brain-Computer Interface Menggunakan Wavelet Transform dan UNETR',
      context: 'PKM-RE 2024 · Ketua Tim',
      tags: ['AI/ML', 'Research'],
      badge: 'Lolos seleksi tingkat universitas',
      image: 'assets/img/pkm-bci.jpg',
      summary: 'Brain-Computer Interface berbasis sinyal EEG yang menggabungkan fitur Wavelet Transform dengan model U-Net Transformer (UNETR).',
      points: [
        'Memimpin pengembangan sistem BCI yang berfokus pada pengolahan sinyal dan segmentasi berbasis deep learning.',
        'Menerapkan Wavelet Transform untuk ekstraksi fitur dari data sinyal otak dan mengimplementasikan arsitektur UNETR.',
        'Mengelola alur kerja penelitian: praproses data, eksperimen model, evaluasi, dan dokumentasi teknis.',
      ],
      stack: ['Python', 'EEG', 'Wavelet Transform', 'UNETR'],
      links: [],
    },
    {
      title: 'Credit Flash — OCR & Prediksi Kelayakan Kredit untuk Perbankan',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      badge: 'Top 10 Project · Finance & Banking',
      image: 'assets/img/skilvul.jpg',
      gallery: ['assets/img/ocr-demo.jpg', 'assets/img/top10-cert.jpg'],
      summary: 'Fitur OCR dan model prediksi kelayakan kredit yang diintegrasikan ke website bank untuk mempercepat dan mengobjektifkan pengajuan kredit.',
      points: [
        'Bertanggung jawab pada komponen machine learning: model prediksi kelayakan kredit dan pipeline pemrosesan OCR.',
        'Merancang dan melatih model credit scoring — praproses data, pemilihan fitur, dan evaluasi dengan metrik yang sesuai.',
        'Merancang alur pemrosesan dokumen, mengoptimalkan akurasi ekstraksi teks, dan mengintegrasikan hasil OCR dengan sistem penilaian kredit.',
        'Dibangun bersama tim lintas kampus: Universitas Pancasila, Universitas Trisakti, Universitas Gadjah Mada, dan STT Terpadu Nurul Fikri.',
      ],
      stack: ['Python', 'Machine Learning', 'OCR', 'Image Processing'],
      links: [{ label: 'Lihat showcase', url: 'https://skilvul.com/showcases/clx5v9fhz0ss401mi96nlz4yw/' }],
    },
    {
      title: 'Sistem Deteksi Penipuan Kartu Kredit',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      summary: 'Model Machine Learning yang mendeteksi transaksi kartu kredit yang berpotensi mengalami penipuan.',
      points: [
        'Melakukan praproses data, exploratory data analysis, dan evaluasi performa model klasifikasi.',
        'Menerapkan Python dan teknik Convolutional Neural Network (CNN) untuk membangun solusi deteksi penipuan.',
      ],
      stack: ['Python', 'CNN', 'EDA', 'Classification'],
      links: [],
    },
    {
      title: 'Sistem Ekstraksi Tulisan Tangan',
      context: 'Skilvul × Kampus Merdeka · AI & Cybersecurity',
      tags: ['AI/ML'],
      image: 'assets/img/ocr-demo.jpg',
      summary: 'Sistem ekstraksi tulisan tangan yang mendukung digitalisasi dokumen dengan image processing dan OCR.',
      points: [
        'Menerapkan Image Processing dan Optical Character Recognition (OCR) untuk mengidentifikasi informasi pada dokumen tulisan tangan.',
        'Memproses dan mengekstraksi data secara otomatis untuk meningkatkan efisiensi pengelolaan dokumen.',
      ],
      stack: ['Python', 'OCR', 'Image Processing'],
      links: [],
    },
    {
      title: 'Portal Informasi Kebencanaan — BPBD Cimahi',
      context: 'Badan Penanggulangan Bencana Daerah Kota Cimahi',
      tags: ['Web'],
      image: 'assets/img/bpbd.jpg',
      summary: 'Portal informasi kebencanaan publik dengan fitur chatbot untuk penyampaian informasi darurat.',
      points: [
        'Mengembangkan dan mengoptimalkan portal untuk meningkatkan akses masyarakat terhadap informasi darurat.',
        'Mendukung implementasi chatbot untuk penyampaian informasi dan layanan respons darurat.',
        'Berkontribusi dalam perancangan antarmuka dan peningkatan UX.',
      ],
      stack: ['Web Development', 'Chatbot', 'UX'],
      links: [],
    },
    {
      title: 'Prototipe Aplikasi Berbasis Kebutuhan Pengguna',
      context: 'Hacktiv8 × Kampus Merdeka · UI/UX Design',
      tags: ['UI/UX'],
      image: 'assets/img/figma-board.jpg',
      summary: 'Riset pengguna, user flow, dan prototipe interaktif di Figma yang disempurnakan melalui usability testing.',
      points: [
        'Melakukan riset pengguna dan menerjemahkan kebutuhan pengguna menjadi wireframe serta prototipe interaktif.',
        'Menentukan alur pengguna, menyusun arsitektur informasi, dan menjaga konsistensi visual di setiap layar.',
        'Melakukan usability testing, menganalisis umpan balik, dan menyempurnakan desain secara iteratif untuk meningkatkan efisiensi penggunaan.',
      ],
      stack: ['Figma', 'User Research', 'Affinity Mapping', 'Usability Testing'],
      links: [],
    },
  ],

  achievements: [
    'Top 10 AI & Cybersecurity Project (Kategori Finance & Banking) — IBM SkillsBuild × Skilvul Demo Day 2024',
    'Ketua Tim PKM-RE 2024 — "Brain-Computer Interface Using Wavelet Transform and UNETR", lolos seleksi tingkat universitas',
    'Ketua Tim PKM-RE 2025 — "Speech Emotion Recognition in Indonesian Conversations Using BiLSTM", lolos seleksi tingkat universitas',
    'Lulus Cum Laude — IPK 3.56 / 4.00',
  ],

  certifications: [
    { name: 'Building AI Solutions Using Advanced Algorithms and Open Source Frameworks', issuer: 'IBM', url: 'https://www.credly.com/badges/8269173c-5184-4d67-b734-5d8f01758c66/public_url' },
    { name: 'Building Trustworthy AI Enterprise Solutions', issuer: 'IBM', url: 'https://www.credly.com/badges/053db13e-fd9d-4b6a-b723-4a8ede8c22a3/public_url' },
    { name: 'Enterprise Data Science in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/6db4bc20-759a-4215-926d-4845b9a77603/public_url' },
    { name: 'Enterprise Security in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/dde958aa-574f-4cbb-b978-641ab3564f28/public_url' },
    { name: 'Getting Started with Enterprise Data Science', issuer: 'IBM', url: 'https://www.credly.com/badges/d0097d93-e8d3-4c22-b32c-fcb0d211c603/public_url' },
    { name: 'Getting Started with Threat Intelligence and Hunting', issuer: 'IBM', url: 'https://www.credly.com/badges/4f6606f8-9494-426b-928d-b002b821af02/public_url' },
    { name: 'Machine Learning for Data Science Projects', issuer: 'IBM', url: 'https://www.credly.com/badges/c80295f8-638d-4c91-89d9-4b305133dcf0/public_url' },
    { name: 'Getting Started with Enterprise-grade AI', issuer: 'IBM', url: 'https://www.credly.com/badges/d082ea28-67b6-4754-8c90-81c7cc778c9a/public_url' },
    { name: 'Security Operations Center in Practice', issuer: 'IBM', url: 'https://www.credly.com/badges/8a15e967-6902-4fc2-8595-737c13196c02/public_url' },
    { name: 'AI Engineer For Milenial', issuer: 'Komdigi · Digital Talent Scholarship' },
    { name: 'Fundamental Cybersecurity', issuer: 'Komdigi · Digital Talent Scholarship · Google' },
    { name: 'Job Application Essentials', issuer: 'IBM', url: 'https://www.credly.com/badges/1e40e7ba-67c9-43e3-855c-772e3f7cd0e4/public_url' },
    { name: 'Working in a Digital World: Professional Skills', issuer: 'IBM', url: 'https://www.credly.com/badges/b8059b72-5547-4a15-933d-2f28fe4c1952/public_url' },
    { name: 'SKF100: Understanding the OWASP® Top 10 Security Threats', issuer: 'Linux Foundation', url: 'https://www.credly.com/badges/c6435fef-b6c2-4b9f-8176-e16aeafc7cf3/public_url' },
  ],
};
