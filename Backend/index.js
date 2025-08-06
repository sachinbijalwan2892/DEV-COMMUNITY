const express = require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const projectRoutes=require('./routes/projectRoutes');
dotenv.config()

connectDB();

const app = express()

app.use(express.json());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT=process.env.PORT||5000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

