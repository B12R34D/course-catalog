    Course Catalog API & Frontend

Project ini adalah aplikasi Course Catalog sederhana yang dibuat sebagai technical test.
Terdiri dari backend REST API (Express + Prisma) dan frontend React (Vite + Tailwind).

Backend menyediakan authentication (JWT), role-based authorization (USER & ADMIN), serta CRUD untuk course.
Frontend menampilkan daftar course dan terhubung ke API menggunakan Axios.

Tech Stack
Backend

Node.js

Express 5

Prisma ORM

PostgreSQL

JWT (jsonwebtoken)

Bcrypt

CORS

Frontend

React 19

Vite

TailwindCSS

Axios

Cara Menjalankan Project
1. Clone Repository
git clone [https://github.com/username/course-catalog.git](https://github.com/B12R34D/course-catalog)
cd course-catalog
Backend Setup

Masuk ke folder backend:

cd backend

Install dependencies:

npm install
Setup Environment Variable

Buat file .env di dalam folder backend:

PORT=3000
DATABASE_URL="postgresql://postgres:password@localhost:5432/course_catalog"
JWT_SECRET=supersecretkey

Silakan sesuaikan DATABASE_URL dengan konfigurasi database lokal kamu.

Setup Database (Prisma)

Generate Prisma Client:

npx prisma generate

Jalankan migration:

npx prisma migrate dev --name init

Jika ada file seed.js, jalankan:

node seed.js
Menjalankan Backend

Development mode:

npm run dev

Backend akan berjalan di:

http://localhost:3000
Frontend Setup

Masuk ke folder frontend:

cd ../frontend

Install dependencies:

npm install

Jalankan development server:

npm run dev

Frontend akan berjalan di:

http://localhost:5173
Authentication Flow

Register user (role bisa USER atau ADMIN)

Login untuk mendapatkan JWT token

Gunakan token sebagai Bearer Token untuk endpoint yang membutuhkan authorization

Contoh header:

Authorization: Bearer <your_token>
API Endpoints
Auth

POST /api/auth/register
POST /api/auth/login

Courses

GET /api/courses
GET /api/courses/:id
POST /api/courses (Admin only)
PUT /api/courses/:id (Admin only)
DELETE /api/courses/:id (Admin only)

Postman

Di dalam folder postman/ tersedia:

Course-Catalog.postman_collection.json

Course-Catalog-Environment.postman_environment.json

Cara pakai:

Import collection dan environment ke Postman

Pilih environment "Course Catalog Local"

Jalankan request Login

Token akan otomatis tersimpan jika sudah menambahkan script pada tab Tests

Project Structure

course-catalog/
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── course.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── admin.middleware.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── course.routes.js
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
├── postman/
│   ├── Course-Catalog.postman_collection.json
│   └── Course-Catalog-Environment.postman_environment.json
│
└── README.md


Catatan

Field created_by_id pada course diambil dari user yang login (berdasarkan JWT).

Hanya user dengan role ADMIN yang dapat membuat, mengubah, dan menghapus course.

Price dan discount menggunakan tipe Decimal di Prisma untuk menjaga presisi.

Author

Dibuat sebagai bagian dari technical test submission.

