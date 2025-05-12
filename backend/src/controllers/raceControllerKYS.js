import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getRaceKYS = async (req, res) => {
    try {
        const raceKYS = await prisma.race.findMany();
        res.status(200).json(raceKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al listar las razas." });
    }
}

export const postRaceKYS = async (req, res) => {
    try {

        const newRaceKYS = await prisma.race.create({
            data : req.body
        })
        res.status(201).json(newRaceKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar la raza" });
    }
}

export const putRaceKYS = async (req, res) => {
    const { id } = req.params;
    try {
        const raceKYSActualizado = await prisma.race.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(raceKYSActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la mascota" });
    }
}

export const deleteRaceKYS = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pet.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ message: "Raza eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la raza" });
    }
}