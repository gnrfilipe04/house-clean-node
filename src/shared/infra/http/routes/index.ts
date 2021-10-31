import { Router } from "express";

import { accountsRoutes } from "./accounts.routes";
import { houseRoutes } from "./house.routes";

const router = Router();

router.use("/house", houseRoutes);
router.use("/account", accountsRoutes);

export { router };
