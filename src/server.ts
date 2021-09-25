import express from "express";

import { createFtpServer } from "./utils/FtpServer";

const app = express();

createFtpServer({
    host: "ftp://10.0.0.107:4444",
    root: "C:/Users/Acer/Desktop/Filipe/ftp-server/src/tmp"
});

app.listen(3333, () => {
    console.log("Server is running...");
});
