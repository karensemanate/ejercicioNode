import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import path from 'path'; 
import { fileURLToPath } from 'url'; 
import fs from 'fs'; 

// Configuración para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//importaciones de los router
import cliente from './src/routers/clienteRoutrerKYS.js';
import pet from './src/routers/petRouterKYS.js';
import race from './src/routers/raceRouterKYS.js';
import category from './src/routers/categoryRouterKYS.js';
import gender from './src/routers/genderRouterKYS.js';
import authRoutes from './src/routers/authRouterKYS.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use(cors({
  origin: ['http://localhost:3001', 'http://10.4.20.95:3001'],
  credentials: true
}));

//controller
app.use(cliente)
app.use(pet)
app.use(race)
app.use(category)
app.use(gender)
app.use(authRoutes)


const imgDir = path.join(__dirname, 'public', 'img');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}


app.set('views', './src/views');
app.set('view engine', 'ejs');
app.get('/documents',(req, res)=>{
    res.render('documents.ejs')
})

// Servir archivos estáticos
app.use('/img', express.static(imgDir));
app.listen(3000, '0.0.0.0', ()=> {
    console.log('listening on port 3000'),
    console.log('documentacion corriendo en:  http://localhost:3000/documents')
    })
