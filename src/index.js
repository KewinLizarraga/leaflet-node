require("dotenv").config();
const express = require("express");
// const engine = require("ejs-mate");
const ejs = require("ejs");
const path = require("path");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

const router = require("./routes");
const { PORT } = require("./config");

// app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

require("./socket")(io);

app.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => console.log(`API run on PORT ${PORT}`));
