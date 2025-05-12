import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCategoryKYS = async (req, res) => {
    try {
        const categoryKYS = await prisma.category.findMany();
        res.status(200).json(categoryKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al listar las categorias" });
    }
}

export const postCategoryKYS = async (req, res) => {
    try {

        const newCategoryKYS = await prisma.category.create({
            data : req.body
        })
        res.status(201).json(newCategoryKYS);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar la categoria" });
    }
}

export const putCategoryKYS = async (req, res) => {
    const { id } = req.params;
    try {
        const CategoryKYSActualizado = await prisma.category.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(CategoryKYSActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la " });
    }
}

export const deleteCategoryKYS = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.category.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ message: "categoria eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoria" });
    }
}