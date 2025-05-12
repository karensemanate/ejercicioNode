import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import config from "../configKYS.js";

const prisma = new PrismaClient();

if (!config.SECRET_KEY) {
  console.error(" ERROR: SECRET_KEY no está definida. Verifica tu archivo .env");
  process.exit(1);
}

const generateTokenKYS = (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    config.SECRET_KEY,
    { expiresIn: config.EXPIRES_IN }
  );
  console.log("🛠 Token generado:", token);
  return token;
};

export const authenticateTokenKYS = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Acceso denegado, token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🔑 Token recibido:", token);

  try {
    const verified = jwt.verify(token, config.SECRET_KEY);
    console.log(" Token verificado:", verified);
    req.user = verified;
    next();
  } catch (error) {
    console.error(" Error al verificar token:", error.message);
    return res.status(401).json({ error: "Token inválido" });
  }
};

export const authorizeAdminKYS = (req, res, next) => {
  if (!req.user || req.user.email !== "admin@example.com") { 
    return res.status(403).json({ error: "Acceso denegado, solo admins" });
  }
  next();
};

export const registerKYS = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { fullname, email, password: hashedPassword },
    });

    const token = generateTokenKYS(newUser);
    res.status(201).json({ message: "Usuario registrado exitosamente", token });
  } catch (error) {
    console.error("❌ Error al registrar usuario:", error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

export const loginKYS = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = generateTokenKYS(user);
    res.json({ message: "Login exitoso", token });
  } catch (error) {
    console.error("❌ Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};