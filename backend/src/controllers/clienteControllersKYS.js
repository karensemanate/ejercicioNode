import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getClientesKYS = async (req, res) => {
    try {
        const clientesKYS = await prisma.user.findMany();
        res.status(200).json(clientesKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al listar clientes" });
    }
}

export const postClientesKYS = async (req, res) => {
    try {

        const nuevoClienteKYS = await prisma.user.create({
            data : req.body
        })
        res.status(201).json(nuevoClienteKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al crear cliente" });
    }
}

export const putClientesKYS = async (req, res) => {
    const { id } = req.params;
    try {
        const clienteKYSActualizado = await prisma.user.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(clienteKYSActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar cliente" });
    }
}

export const deleteClientesKYS = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar cliente" });
    }
}