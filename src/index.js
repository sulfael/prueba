import express from 'express';
import { fileURLToPath } from 'url';
import * as path from 'path';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const PORT = 3000;
const app = express();

// middlewares
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(dirname, "/views/index.html"))
})

/* Server  */
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} : http://localhost:${PORT}`);
});