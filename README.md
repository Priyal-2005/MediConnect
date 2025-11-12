FullStack Project Proposal
1. Project Title
MediConnect – Full Stack Doctor Appointment Booking System

2. Problem Statement
MediConnect is a full-stack doctor appointment booking system that allows patients, doctors, and admins to interact through a single platform. Patients can book appointments with doctors, doctors can manage their schedules, and admins can oversee the system.

3. System Architecture
Frontend (React.js) → Backend (Node.js + Express.js) → Database (MySQL)
Frontend: React.js with React Router for page navigation and Fetch API for backend communication


Backend: Node.js + Express.js


Database: MySQL (relational database)


Authentication: JWT-based login/signup system for Patients, Doctors, and Admins


Hosting:


Frontend → Vercel


Backend → Render


Database → MySQL Workbench/PlanetScale

4. User Roles
Patient
Register/Login to the system
View list of doctors by specialization
Book and cancel appointments
View upcoming & past appointments
Doctor
Login with doctor credentials
View patient bookings
Approve or reject appointments
Manage available time slots
Admin
Login as admin
Add or remove doctors
Manage all appointments and users

5. Key Features
Category
Features
Authentication & Authorization
User registration, login, logout; role-based access for Patient, Doctor, and Admin; JWT-based authentication
CRUD Operations
Create, read, update, delete users, doctors, and appointments
Frontend Routing
React Router pages: Home, Login, Register, Dashboard (role-based), Doctor Details, Appointments, Admin Panel
Patient Module
Browse doctors by specialization, view details, book/cancel appointments, view upcoming & past appointments
Doctor Module
View appointment requests, approve/reject bookings, manage availability schedule 
Admin Module
Approve/reject doctor accounts, manage users and appointments, view system statistics
Pagination
Paginate doctor lists and appointment logs for scalability
Filtering & Sorting
Filter doctors by specialization, sort by experience, fees, or ratings; search doctors by name
Hosting
Frontend deployed on Vercel, backend on Render, database on PlanetScale (MySQL)


6. Tech Stack
Layer
Technologies
Frontend
React.js, React Router, Fetch API, CSS
Backend
Node.js, Express.js
Database
MySQL
Authentication
JWT-based login/signup
Hosting
Vercel, Render, PlanetScale(MySQL)


7. API Overview
Endpoint
Method
Description
Access
/api/auth/register
POST
Register new user
Public
/api/auth/login
POST
Authenticate user
Public
/api/users/profile
GET
Fetch logged-in user’s data
Authenticated
/api/doctors
GET
List all approved doctors
Public
/api/doctors/:id
GET
Get doctor details
Public
/api/doctors
POST
Doctor applies for registration
Authenticated
/api/appointments
POST
Book an appointment
Patient
/api/appointments
GET
View user’s appointments
Authenticated
/api/admin/doctors
GET
Admin manages doctor accounts
Admin
/api/admin/appointments
GET
View all system appointments
Admin