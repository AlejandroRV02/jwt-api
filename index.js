const express = require('express');
const app = express();


//Cors
const cors = require('cors');
var corsOptions = {
    origin:'*',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


//Mongoose and bodyparser
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//Variables de entorno
require('dotenv').config();


//Capturar body
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//Conexion a la base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.48b4z.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch(e => console.log(e)); 


//Importar las rutas
const authRoute = require('./routes/auth');
const validateToken = require('./routes/validate-token');
const adminRoute = require('./routes/admin');



//Middlewares
app.use('/api/user', authRoute);
app.use('/api/admin', validateToken, adminRoute);


//history vue
const history = require('connect-history-api-fallback');
app.use(history());

//Static
app.use(express.static(__dirname + "/public"));

//Iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})