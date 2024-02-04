import express from 'express';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { indexRoutes } from './routes/index.js';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const PORT = 3000;
const app = express();

// middlewares
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

app.use('/', indexRoutes);

/* Server  */
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} : http://localhost:${PORT}`);
});