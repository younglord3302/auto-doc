const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/autodoc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const { router: authRoutes } = require('./routes/auth');
const appointmentsRoutes = require('./routes/appointments');
// Add other routes here
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
