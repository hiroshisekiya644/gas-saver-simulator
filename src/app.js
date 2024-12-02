const express = require('express');
const cors = require('cors'); 
const simulateRoutes = require('./routes/simulateRoutes');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', simulateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
