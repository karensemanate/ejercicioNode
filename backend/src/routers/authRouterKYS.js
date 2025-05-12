import { Router } from "express";
import { registerKYS, loginKYS, authenticateTokenKYS, authorizeAdminKYS } from "../controllers/authControllerKYS.js";


const router = Router();

router.post("/register", registerKYS);
router.post("/login", loginKYS);

router.get("/dashboard", authenticateTokenKYS, (req, res) => {
  res.json({ 
    message: "Bienvenido al Dashboard", 
    user: { id: req.user.id, email: req.user.email } 
  });
});

router.get("/admin", authenticateTokenKYS, authorizeAdminKYS, (req, res) => {
  res.json({ message: "Bienvenido Admin", user: req.user });
});

export default router;


