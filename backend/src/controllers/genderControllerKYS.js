import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getGenderKYS = async (req, res) => {
    try {
        const genderKYS = await prisma.gender.findMany();
        res.status(200).json(genderKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al listar el genero." });
    }
}

export const postGenderKYS = async (req, res) => {
    try {

        const newGenderKYS = await prisma.gender.create({
            data : req.body
        })
        res.status(201).json(newGenderKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el genero" });
    }
}

export const putGenderKYS = async (req, res) => {
    const { id } = req.params;
    try {
        const genderKYSActualizado = await prisma.gender.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(genderKYSActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el genero" });
    }
}

export const deleteGenderKYS = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.gender.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ message: "Genero eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el genero" });
    }
}