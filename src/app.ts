import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import path from 'path';
import { defaultLego } from './controllers/legoController';
import legoRoutes from './routes/legoRoutes';
import { db } from './models';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

app.use('/legos', legoRoutes);
app.use('/', defaultLego);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
})

db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3099);

//in order to start the server do, 'mysql -u root -p' USE legoDB 'npm run start'