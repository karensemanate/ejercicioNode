import { Router } from "express";
import { getPetKYS, postPetKYS, putPetKYS, deletePetKYS, getPetKYSById,
    getPetsByStatusReportKYS,
    getPetsByRaceAndCategoryReportKYS,
    getPetsByGenderKYS

} from "../controllers/petsControllersKYS.js";
import { authenticateTokenKYS } from "../controllers/authControllerKYS.js";
import uploadKYS from "../middleware/uploadMiddlewareKYS.js";

const router = Router();

router.get('/petsKYS', authenticateTokenKYS, getPetKYS);
router.get('/petsKYS/:id', authenticateTokenKYS, getPetKYSById);
router.post('/petsKYS', authenticateTokenKYS, uploadKYS.single('photo'), postPetKYS);
router.put('/petsKYS/:id', authenticateTokenKYS, uploadKYS.single('photo'), putPetKYS);
router.delete('/petsKYS/:id', authenticateTokenKYS, deletePetKYS);

//reportes
router.get('/petsKYS/reportes/estado', authenticateTokenKYS, getPetsByStatusReportKYS);
router.get('/petsKYS/reportes/raza-categoria', authenticateTokenKYS, getPetsByRaceAndCategoryReportKYS);
router.get('/petsKYS/reportes/genero', authenticateTokenKYS, getPetsByGenderKYS);

export default router;