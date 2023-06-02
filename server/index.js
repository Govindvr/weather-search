const express = require('express');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(express.json());
app.use('/api/getweather', weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`View devoplment server at http://localhost:${PORT}/`);
});