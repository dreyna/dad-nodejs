import express from 'express'
import morgan from 'morgan'
import rolesRoutes from './routes/rol.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next){
    res.send('Bienvenido a Node JS...!');    
});

app.use('/api/auth/roles', rolesRoutes);

export default app;