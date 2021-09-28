import { Router } from "express";
import { getMain } from "../controllers/movies";

const router =Router();

router.get('/',        getMain);

export default router;
