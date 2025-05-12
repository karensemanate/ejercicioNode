import { Router } from "express";
import { getClientesKYS, 
        postClientesKYS,
        putClientesKYS,
        deleteClientesKYS } from "../controllers/clienteControllersKYS.js";
import { authenticateTokenKYS } from "../controllers/authControllerKYS.js";


const router = Router();

router.get('/clientesKYS', getClientesKYS);
router.post('/clientesKYS', postClientesKYS);
router.put('/clientesKYS/:id',authenticateTokenKYS, putClientesKYS);
router.delete('/clientesKYS/:id',authenticateTokenKYS, deleteClientesKYS);

export default router;