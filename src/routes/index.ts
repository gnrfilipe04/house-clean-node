import { Router } from "express";

import { houseRoutes } from "./house.routes";

const router = Router();

router.use("/house", houseRoutes);

export { router };
