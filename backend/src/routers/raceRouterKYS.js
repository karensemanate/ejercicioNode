import { Router } from "express";
import { getRaceKYS,
        postRaceKYS,
        putRaceKYS,
        deleteRaceKYS
 } from "../controllers/raceControllerKYS.js";
 import { authenticateTokenKYS } from "../controllers/authControllerKYS.js";

const router = Router();

router.get('/raceKYS',authenticateTokenKYS, getRaceKYS);
router.post('/raceKYS',authenticateTokenKYS, postRaceKYS);
router.put('/raceKYS/:id',authenticateTokenKYS, putRaceKYS);
router.delete('/raceKYS/:id',authenticateTokenKYS, deleteRaceKYS);

export default router;