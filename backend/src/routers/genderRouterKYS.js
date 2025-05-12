import { Router } from "express";
import { getGenderKYS,
        postGenderKYS,
        putGenderKYS,
        deleteGenderKYS
 } from "../controllers/genderControllerKYS.js";
 import { authenticateTokenKYS } from "../controllers/authControllerKYS.js";


const router = Router();

router.get('/genderKYS',authenticateTokenKYS, getGenderKYS);
router.post('/genderKYS',authenticateTokenKYS, postGenderKYS);
router.put('/genderKYS/:id',authenticateTokenKYS, putGenderKYS);
router.delete('/genderKYS/:id',authenticateTokenKYS, deleteGenderKYS);

export default router;