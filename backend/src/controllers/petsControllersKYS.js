import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Reemplazo de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

export const getPetKYS = async (req, res) => {
  try {
    const petKYS = await prisma.pet.findMany({
      include: {
        race: true,    
        category: true, 
        gender: true    
      }
    });
    res.status(200).json(petKYS);
  } catch (error) {
    res.status(500).json({ message: "Error al listar las mascotas." });
  }
};


export const getPetKYSById = async (req, res) => {
  const { id } = req.params;
  try {
    const petKYS = await prisma.pet.findUnique({
      where: { id: Number(id) },
      include: {
        race: true,
        category: true,
        gender: true
      }
    });
    if (!petKYS) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }
    res.status(200).json(petKYS);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la mascota" });
  }
}


export const postPetKYS = async (req, res) => {
    try {
      // Validar campos requeridos
      const requiredFields = ['name', 'raceId', 'categoryId', 'genderId', 'user_Id'];
      const missingFields = requiredFields.filter(field => !req.body[field]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          message: `Faltan campos requeridos: ${missingFields.join(', ')}`
        });
      }
  
      // Verificar si se subió una foto
      if (!req.file) {
        return res.status(400).json({ message: "La foto es requerida" });
      }
  
      const { name, raceId, categoryId, genderId, estado = 'porAdoptar', user_Id } = req.body;
      
      const newPetKYS = await prisma.pet.create({
        data: {
          name,
          estado,
          photo: req.file.filename, // Usar el nombre generado por Multer
          raceId: parseInt(raceId),
          categoryId: parseInt(categoryId),
          genderId: parseInt(genderId),
          user_Id: parseInt(user_Id),
        },
      });
  
      res.status(201).json(newPetKYS);
    } catch (error) {
      console.error("Error detallado:", error);
      res.status(500).json({ 
        message: "Error al registrar la mascota",
        error: error.message
      });
    }
};

export const putPetKYS = async (req, res) => {
    const { id } = req.params;
    try {
      // Validar campos requeridos
      const requiredFields = ['name', 'raceId', 'categoryId', 'genderId'];
      const missingFields = requiredFields.filter(field => !req.body[field]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          message: `Faltan campos requeridos: ${missingFields.join(', ')}`
        });
      }
  
      const { name, raceId, categoryId, genderId, estado } = req.body;
      
      const updateData = {
        name,
        raceId: parseInt(raceId),
        categoryId: parseInt(categoryId),
        genderId: parseInt(genderId),
        estado: estado || 'porAdoptar'
      };
  
      // Solo actualizar la foto si se proporciona una nueva
      if (req.file) {
        updateData.photo = req.file.filename;
        
        // Opcional: Eliminar la foto anterior si existe
        const oldPet = await prisma.pet.findUnique({ where: { id: Number(id) } });
        if (oldPet?.photo) {
          const oldPhotoPath = path.join(__dirname, '../public/img', oldPet.photo);
          if (fs.existsSync(oldPhotoPath)) {
            fs.unlinkSync(oldPhotoPath);
          }
        }
      }
  
      const petKYSActualizado = await prisma.pet.update({
        where: { id: Number(id) },
        data: updateData,
        include: {
          race: true,
          category: true,
          gender: true
        }
      });
  
      res.status(200).json(petKYSActualizado);
    } catch (error) {
      console.error("Error al actualizar mascota:", error);
      res.status(500).json({ 
        message: "Error al actualizar la mascota",
        error: error.message
      });
    }
};

export const deletePetKYS = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.pet.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: "Mascota eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la mascota" });
  }
};

//reportes 

export const getPetsByStatusReportKYS = async (req, res) => {
  try {
    const reportData = await prisma.pet.findMany({
      where: {},
      include: {
        race: { select: { name: true } },
        category: { select: { name: true } },
        gender: { select: { name: true } },
        user: { select: { fullname: true, email: true } }
      }
    });

    const groupedByStatus = reportData.reduce((acc, pet) => {
      const statusKey = pet.estado === 'Adoptado' ? 'Adoptado' : 'Por adoptar';
      if (!acc[statusKey]) {
        acc[statusKey] = { estado: statusKey, cantidad: 0 };
      }
      acc[statusKey].cantidad++;
      return acc;
    }, {});

    const formattedReport = Object.values(groupedByStatus);
    
    res.status(200).json(formattedReport); // Envía directamente el array

  } catch (error) {
    console.error("Error al generar reporte por estado:", error);
    res.status(500).json({ 
      message: "Error al generar reporte por estado",
      error: error.message
    });
  }
};

export const getPetsByRaceAndCategoryReportKYS = async (req, res) => {
  try {
    const reportData = await prisma.pet.findMany({
      include: {
        race: { select: { name: true, id: true } },
        category: { select: { name: true, id: true } }
      }
    });

    const reportByRaceCategory = reportData.reduce((acc, pet) => {
      const key = `${pet.race.id}-${pet.category.id}`;
      
      if (!acc[key]) {
        acc[key] = {
          raza: pet.race.name,
          categoria: pet.category.name,
          cantidad: 0
        };
      }
      
      acc[key].cantidad++;
      return acc;
    }, {});

    const formattedReport = Object.values(reportByRaceCategory)
      .sort((a, b) => b.cantidad - a.cantidad);
    
    res.status(200).json(formattedReport); // Envía directamente el array

  } catch (error) {
    console.error("Error al generar reporte por raza y categoría:", error);
    res.status(500).json({ 
      message: "Error al generar reporte por raza y categoría",
      error: error.message
    });
  }
};

export const getPetsByGenderKYS = async (req, res) => {
  try {
    const reportData = await prisma.pet.findMany({
      include: {
        gender: { select: { name: true } }
      }
    });

    const reportByGender = reportData.reduce((acc, pet) => {
      const genderKey = pet.gender.name;
      
      if (!acc[genderKey]) {
        acc[genderKey] = {
          genero: genderKey,
          cantidad: 0
        };
      }
      
      acc[genderKey].cantidad++;
      return acc;
    }, {});

    const formattedReport = Object.values(reportByGender);
    
    res.status(200).json(formattedReport); // Envía directamente el array

  } catch (error) {
    console.error("Error al generar reporte por género:", error);
    res.status(500).json({ 
      message: "Error al generar reporte por género",
      error: error.message
    });
  }
};