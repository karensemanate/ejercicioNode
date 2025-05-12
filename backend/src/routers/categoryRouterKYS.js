import { Router } from "express";
import { getCategoryKYS,
        postCategoryKYS,
        putCategoryKYS,
        deleteCategoryKYS
 } from "../controllers/categoryControllerKYS.js";
import { authenticateTokenKYS } from "../controllers/authControllerKYS.js";


const router = Router();

router.get('/categoryKYS', authenticateTokenKYS, getCategoryKYS);
router.post('/categoryKYS', authenticateTokenKYS, postCategoryKYS);
router.put('/categoryKYS/:id', authenticateTokenKYS, putCategoryKYS);
router.delete('/categoryKYS/:id', authenticateTokenKYS, deleteCategoryKYS);

export default router;