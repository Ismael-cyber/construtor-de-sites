import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from './ui/ui.route';
import pageRoute from './page/page.route';

//Setup Express App
const app = express();
app.use(express.json());
app.use(cors());

//Setup Template Engine
app.use('/resources', express.static(path.join(__dirname, 'public')));
app.use('views', express.static(path.join(__dirname, 'views')));


//Mongo DB Settings
mongoose.connect(
    "mongodb+srv://ismaelsousasilva07:8H5TT8htrNVua9l1@cluster0.kvtxoti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado ao banco de dados!"));

app.set('view engine', 'hbs');

app.use("/pages", pageRoute);
app.use('/' , uiRoute);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})