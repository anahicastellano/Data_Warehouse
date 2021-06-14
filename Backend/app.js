const express = require("express");

const helmet = require("helmet");
const cors = require('cors')
const rateLimit = require("express-rate-limit");
const { authenticateToken } = require("./routes/authentication.js");

const routes = require("./routes/index.js");

const app = express();

if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("Please set ACCESS_TOKEN_SECRET before running app");
}

app.use(helmet());
app.use(cors());

app.use(authenticateToken);
app.use(express.json());

routes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Api escuchando el puerto: 3000`);
});

module.exports = app;