import express from "express";

import { initialize } from "../../../database/initialize";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333, async () => {
    await initialize();
});
