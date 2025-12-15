# Task Backend API (Node.js + Docker)

## 📌 Giới thiệu

Đây là một project backend **quản lý công việc (Task / Todo)** được xây dựng bằng **Node.js (Express)**, **MongoDB**, và được **Docker hoá** bằng **Docker Compose**.

Project này được thiết kế với mục tiêu:

* Học backend cơ bản
* Làm quen với Docker & Docker Compose
* Tạo nền tảng để học **DevOps (CI/CD, Deploy, Cloud)**

---

## 🛠️ Công nghệ sử dụng

* **Node.js** + **Express**: xây dựng REST API
* **MongoDB**: cơ sở dữ liệu NoSQL
* **Mongoose**: ODM cho MongoDB
* **Docker**: đóng gói ứng dụng
* **Docker Compose**: chạy multi-container

---

## 📂 Cấu trúc thư mục

```
task-backend/
│── src/
│   ├── config/        # Cấu hình database
│   ├── models/        # Schema MongoDB
│   ├── routes/        # Định nghĩa API routes
│   ├── controllers/  # Xử lý logic
│   └── server.js     # Entry point
│
│── .env               # Biến môi trường
│── docker-compose.yml
│── Dockerfile
│── package.json
│── README.md
```

---

## ⚙️ Cấu hình môi trường

### File `.env`

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/task_db
```

---

## ▶️ Cách chạy project (Docker – Khuyến nghị)

### 1️⃣ Yêu cầu

* Đã cài **Docker**
* Đã cài **Docker Compose**

### 2️⃣ Chạy project

```bash
docker compose up --build
```

### 3️⃣ Kiểm tra

* Backend:

```
http://localhost:5000
```

* API Tasks:

```
http://localhost:5000/tasks
```

---

## 🔗 API Endpoints

### 🔹 Lấy danh sách task

**GET** `/tasks`

Response:

```json
[]
```

---

### 🔹 Tạo task mới

**POST** `/tasks`

Body:

```json
{
  "title": "Hoc Docker Compose"
}
```

Response:

```json
{
  "_id": "...",
  "title": "Hoc Docker Compose",
  "status": "todo",
  "createdAt": "..."
}
```

---

## 🧪 Kiểm tra Database

* Mở **MongoDB Compass**
* Kết nối:

```
mongodb://localhost:27017
```

* Database: `task_db`
* Collection: `tasks`

---

## 🎯 Mục tiêu DevOps

Project này là nền tảng để tiếp tục:

* Thêm **CI/CD với GitHub Actions**
* Deploy lên **VPS / Cloud**
* Thêm **Nginx Reverse Proxy**

---

## 👨‍💻 Tác giả

* Project phục vụ học tập DevOps & Backend cơ bản

---

✅ **Status: Hoàn thành backend + Docker Compose**
