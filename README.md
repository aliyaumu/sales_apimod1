# Library Book Loans API

## Deskripsi Umum & Tujuan Proyek
Proyek ini adalah RESTful API sederhana yang dibangun menggunakan **Node.js, Express.js, dan Supabase** untuk sistem pencatatan peminjaman buku di perpustakaan. Tujuan proyek ini adalah memenuhi tugas Responsi dengan mengimplementasikan operasi CRUD (Create, Read, Update, Delete) pada entitas peminjaman buku (`loans`) oleh anggota perpustakaan, serta mendukung filter query seperti pencarian berdasarkan status peminjaman.

## Struktur Data / Schema (Supabase)

Tabel `loans`
- `id` : `uuid` (Primary Key, Default: `gen_random_uuid()`)
- `member_name` : `text` (Nama anggota peminjam)
- `book_title` : `text` (Judul buku yang dipinjam)
- `loan_date` : `date` (Tanggal peminjaman)
- `due_date` : `date` (Tenggat waktu pengembalian)
- `return_date` : `date` (Tanggal dikembalikan, bisa null/kosong)
- `status` : `text` (Status peminjaman, misal: 'Dipinjam', 'Dikembalikan', 'Terlambat')

*Skema SQL untuk membuat tabel di Supabase SQL Editor:*
```sql
create table loans (
  id uuid primary key default gen_random_uuid(),
  member_name text not null,
  book_title text not null,
  loan_date date not null,
  due_date date not null,
  return_date date,
  status text not null
);
```

## Panduan Instalasi & Cara Menjalankan Lokal

1. Clone repositori ini ke dalam direktori lokal.
2. Buka terminal di folder repositori dan jalankan perintah:
   ```bash
   npm install
   ```
3. Buat file `.env` pada root folder dan masukkan kredensial Supabase Anda:
   ```env
   SUPABASE_URL=https://ybdxeibypugxfnviaamz.supabase.co
   SUPABASE_KEY=sb_publishable_Ojw3qiopsSXfehVNUOEt1A_10n84OOZ
   PORT=3000
   ```
4. Jalankan server lokal:
   ```bash
   npm run dev
   ```
   Server akan berjalan di `http://localhost:3000`.

## Contoh Request dan Response

### 1. Tambah Data Peminjaman (POST `/api/loans`)
**Request Body (JSON):**
```json
{
  "member_name": "Aliya Umu Kholisoh",
  "book_title": "Belajar Express.js",
  "loan_date": "2026-10-10",
  "due_date": "2026-10-18",
  "status": "Dipinjam"
}
```
**Response (201 Created):**
```json
{
  "id": "e2a3b4c5-...",
  "member_name": "Aliya Umu Kholisoh",
  "book_title": "Belajar Express.js",
  "loan_date": "2026-10-10",
  "due_date": "2026-10-18",
  "return_date": null,
  "status": "Dipinjam"
}
```

### 2. Tampilkan Semua Peminjaman (GET `/api/loans`)
Mendukung Query Parameter untuk filter, contoh: `GET /api/loans?status=Terlambat`

**Response (200 OK):**
```json
[
  {
    "id": "e2a3b4c5-...",
    "member_name": "Aliya Umu Kholisoh",
    "book_title": "Belajar Express.js",
    "loan_date": "2026-10-10",
    "due_date": "2026-10-18",
    "return_date": null,
    "status": "Terlambat"
  }
]
```

### 3. Tampilkan Peminjaman Berdasarkan ID (GET `/api/loans/:id`)
**Response (200 OK):**
```json
{
  "id": "e2a3b4c5-...",
  "member_name": "Aliya Umu Kholisoh",
  "book_title": "Belajar Express.js",
  "loan_date": "2026-10-10",
  "due_date": "2026-10-18",
  "return_date": null,
  "status": "Dipinjam"
}
```

### 4. Update Data Peminjaman (PUT `/api/loans/:id`)
Berguna ketika anggota mengembalikan buku (Update `status` dan `return_date`).

**Request Body (JSON):**
```json
{
  "return_date": "2026-10-16",
  "status": "Dikembalikan"
}
```
**Response (200 OK):**
```json
{
  "id": "e2a3b4c5-...",
  "member_name": "Budi Santoso",
  "book_title": "Belajar Express.js",
  "loan_date": "2026-10-10",
  "due_date": "2026-10-18",
  "return_date": "2026-10-16",
  "status": "Dikembalikan"
}
```

### 5. Hapus Data Peminjaman (DELETE `/api/loans/:id`)
**Response (200 OK):**
```json
{
  "message": "Data peminjaman berhasil dihapus"
}
```

## Link Hasil Deployment Vercel
https://sales-apimod1-git-main-aliyaumus-projects.vercel.app/
https://sales-apimod1-git-main-aliyaumus-projects.vercel.app/api/loans

