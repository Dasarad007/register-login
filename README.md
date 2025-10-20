# 🧑‍💻 MERN Authentication System (Register / Login)

This project is a simple **Node.js + Express backend** for handling **user authentication** — including registration and login — using MongoDB as the database.

---

## 🚀 Features

- User Registration (Signup)
- User Login (JWT Authentication)
- Password Encryption (using bcrypt)
- MongoDB Database Connection
- Environment Variables using dotenv
- REST API built with Express
- CORS Enabled

---

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **MongoDB + Mongoose** - Database
- **dotenv** - Environment configuration
- **bcryptjs** - Password hashing
- **jsonwebtoken (JWT)** - Authentication tokens
- **cors** - Cross-Origin Resource Sharing

---

## 📁 Folder Structure

project-folder/
│
├── database/
│ └── db.js
│
├── routes/
│ ├── user-routes.js
│ ├── home-routes.js
│ └── admin-route.js
│
├── .env
├── package.json
├── server.js (or index.js)
└── README.md

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-auth.git
   cd mern-auth
Install dependencies

bash
Copy code
npm install
Create .env file in the root directory and add:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=2001
Run the server

bash
Copy code
npm start
or

bash
Copy code
node server.js
Server running message:

pgsql
Copy code
server is running
🔗 API Endpoints
🧍 User Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user

🏠 Home Routes
Method	Endpoint	Description
GET	/api/welcome	Welcome route message

👑 Admin Routes
Method	Endpoint	Description
GET	/api/welcome/admin	Admin protected route

🔒 Example JSON Requests
Register
json
Copy code
POST /api/auth/register
{
  "username": "dasarad",
  "email": "dasarad@example.com",
  "password": "mypassword"
}
Login
json
Copy code
POST /api/auth/login
{
  "email": "dasarad@example.com",
  "password": "mypassword"
}
🧠 Notes
CORS is enabled for frontend integration (e.g., React app).

JWT tokens are used to protect routes.

Make sure MongoDB is running locally or use a cloud service like MongoDB Atlas.

📸 Example Output
pgsql
Copy code
Connected to MongoDB
server is running
🧩 Future Improvements
Forgot Password functionality

User profile management

Role-based access (User/Admin)

Integration with React frontend

👨‍💻 Author
Dasarad
💼 MERN Stack Developer
📍 Rajahmundry, India
🌐 GitHub: https://github.com/Dasarad007