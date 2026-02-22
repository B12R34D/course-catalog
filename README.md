
markdown
# 📚 Course Catalog REST API

REST API sederhana untuk katalog kursus online sebagai bagian dari Test Kompetensi Backend.

## 📁 Struktur Proyek
.
├── backend/
│   ├── prisma/                 # Skema dan migrasi database Prisma
│   ├── src/
│   │   ├── config/             # Konfigurasi database & environment
│   │   │   ├── prisma.js
│   │   │   └── prismaClient.js
│   │   ├── controllers/        # Logika bisnis untuk setiap entitas
│   │   │   ├── auth.controller.js
│   │   │   ├── course.controller.js
│   │   │   ├── language.controller.js
│   │   │   ├── topic.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares/        # Fungsi filter/validasi (Auth & Admin)
│   │   │   ├── admin.middleware.js
│   │   │   └── auth.middleware.js
│   │   ├── routes/             # Definisi endpoint API
│   │   │   ├── auth.routes.js
│   │   │   ├── course.routes.js
│   │   │   ├── language.routes.js
│   │   │   ├── topic.routes.js
│   │   │   └── user.routes.js
│   │   ├── app.js              # Inisialisasi Express
│   │   └── server.js           # Entry point untuk menjalankan server
│   ├── .env                    # Variabel lingkungan (Rahasia)
│   ├── .env.example            # Contoh variabel lingkungan
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── seed.js                 # Script untuk data awal database
│
├── frontend/
│   ├── node_modules/
│   ├── public/                 # Aset publik (SVG, logo, dll)
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/             # Gambar/style yang diproses bundler
│   │   ├── App.css
│   │   ├── App.jsx             # Komponen utama React
│   │   ├── index.css
│   │   └── main.jsx            # Entry point React
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js      # Konfigurasi Tailwind CSS
│   └── vite.config.js          # Konfigurasi Vite
│
├── postman/                    # Koleksi API untuk pengujian
│   ├── Course-Catalog-Envi...
│   └── Course-Catalog.post...
└── README.md

## 🚀 Features

### 🔐 Authentication
- Register (USER)
- Login (USER & ADMIN)
- JWT Authentication
- Role-based Authorization

### 👤 Admin Only (Protected Routes)
CRUD untuk:
- Users
- Topics
- Languages
- Courses

### 🌐 Public Endpoints
- Get All Courses
- Get Course Detail

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MySQL / PostgreSQL
- JWT (Authentication)
- Bcrypt (Password Hashing)

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

bash
git clone https://github.com/B12R34D/course-catalog.git
cd course-catalog


### 2️⃣ Install Backend Dependencies

bash
cd backend
npm install


### 3️⃣ Setup Environment Variables

Buat file `.env` di folder backend:


PORT=3000
DATABASE_URL="your_database_url"
JWT_SECRET="your_secret_key"




### 4️⃣ Setup Database

bash
npx prisma migrate dev


Optional (create admin manually via Prisma Studio):

bash
npx prisma studio


Ubah role user menjadi:


ADMIN


### 5️⃣ Run Server
bash
npm run dev


Server berjalan di:


http://localhost:3000




## 📌 API Endpoints

### 🔐 Auth

| Method | Endpoint           | Access |
| ------ | ------------------ | ------ |
| POST   | /api/auth/register | Public |
| POST   | /api/auth/login    | Public |



### 👤 Users (Admin Only)

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/users     |
| GET    | /api/users/:id |
| PUT    | /api/users/:id |
| DELETE | /api/users/:id |



### 📂 Topics (Admin Only)

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /api/topics     |
| GET    | /api/topics     |
| GET    | /api/topics/:id |
| PUT    | /api/topics/:id |
| DELETE | /api/topics/:id |



### 🌎 Languages (Admin Only)

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/languages     |
| GET    | /api/languages     |
| GET    | /api/languages/:id |
| PUT    | /api/languages/:id |
| DELETE | /api/languages/:id |



### 🎓 Courses

#### ✅ Public

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /api/courses     |
| GET    | /api/courses/:id |

#### 🔐 Admin Only

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/courses     |
| PUT    | /api/courses/:id |
| DELETE | /api/courses/:id |



## 🔑 Role Enum

USER
ADMIN




## 🎯 Course Level Enum


ALL LEVEL
BEGINNER
INTERMEDIATE
ADVANCE




## 📮 Postman Collection

File Postman collection tersedia di repository:


course-catalog.postman_collection.json


Import ke Postman untuk testing API.



## 📌 Notes

* Password di-hash menggunakan bcrypt
* Authentication menggunakan JWT
* Middleware memastikan hanya ADMIN yang dapat mengakses CRUD
* Public endpoint tidak memerlukan token



## 👨‍💻 Author

ERIK MUHAMMAD AL-ZABAR
