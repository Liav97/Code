const express = require("express")
const loginRouter = require("./routers/loginRouter")
const cors = require("cors")

const app = express();

app.use(cors());

app.use(express.json());

require('./configs/database');

app.use('/api/users', loginRouter);

app.listen(8000);