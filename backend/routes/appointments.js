const express = require('express');
const { verifyToken } = require('./auth');
const Appointment = require('../models/Appointment');
const User = require('../models/User');

const router = express.Router();

// Get available doctors
router.get('/doctors', verifyToken, async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Book appointment
router.post('/book', verifyToken, async (req, res) => {
  try {
    const { doctorId, date, type } = req.body;
    const appointment = new Appointment({
      patient: req.user.id,
      doctor: doctorId,
      date,
      type
    });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get my appointments (as patient or doctor)
router.get('/my', verifyToken, async (req, res) => {
  try {
    const query = req.user.role === 'patient' ? { patient: req.user.id } : { doctor: req.user.id };
    const appointments = await Appointment.find(query).populate('patient doctor', 'name');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
