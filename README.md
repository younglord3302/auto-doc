# AutoDoc - Autonomous Medical App

AutoDoc is a telemedicine platform inspired by Apollo 247, providing autonomous medical services including online consultations, appointment booking, medical records management, and more.

## Features

- **User Authentication**: Secure login and registration for patients and doctors
- **Doctor Directory**: Browse and find available doctors
- **Appointment Booking**: Schedule online or clinic appointments
- **Medical Records**: Store and manage patient medical history
- **Dashboard**: Personalized dashboard for users
- **Responsive Design**: Works on web browsers (optimized for mobile)

## Tech Stack

### Backend
- **Node.js** with Express framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing

### Frontend
- **React.js** for web interface
- **Axios** for API calls
- **React Router** for navigation

**Note:** Currently designed as a web app but features responsive design for mobile access.

## Project Structure

```
auto-doc/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Appointment.js
│   │   └── MedicalRecord.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── appointments.js
│   ├── node_modules/
│   ├── package.json
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── node_modules/
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or cloud database)
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/younglord3302/auto-doc.git
   cd auto-doc
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

### MongoDB Setup
- Ensure MongoDB is running on your system (default port 27017)
- For local MongoDB: Make sure `mongod` is running
- For cloud database: Update the connection string in `backend/index.js`

### Environment Variables
None required for basic setup (using default local MongoDB).

## Running the Application

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   # or: node index.js
   ```
   Backend will run on http://localhost:5000

2. **Start the Frontend (in a new terminal):**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on http://localhost:3000

3. **Access the Application:**
   Open http://localhost:3000 in your browser

## Usage

1. **Register**: Create an account as a Patient or Doctor
2. **Login**: Use your credentials to log in
3. **Dashboard**: Access your personalized dashboard
4. **Doctors**: Browse available doctors (coming soon)
5. **Appointments**: Book appointments (coming soon)
6. **Records**: View medical history (coming soon)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Appointments
- `GET /api/appointments/doctors` - Get available doctors
- `POST /api/appointments/book` - Book appointment
- `GET /api/appointments/my` - Get user's appointments

## Development

### Adding New Features
- For backend: Add routes in `backend/routes/` and models in `backend/models/`
- For frontend: Create components in `frontend/src/components/`
- Remember to update this README with new features

### Testing
- Run `npm test` in both backend and frontend directories
- Additional testing instructions to be added

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Video consultation integration
- Payment gateway
- Lab test booking and results
- Pharmacy ordering
- AI symptom checker
- Mobile app (React Native)
- Multi-language support

## License

This project is licensed under the ISC License - see the package.json files for details.

## Acknowledgments

- Inspired by Apollo 247 telemedicine services
- Built with Node.js, Express, React, and MongoDB
