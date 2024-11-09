import express, {  request, response } from 'express';
import cors from 'cors'; // Impor cors
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import './strategies/local-strategy.mjs'
import routes from './routes/index.mjs'

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieParser("sangatrahasiacuy"))
app.use(session({
    secret: "inilebihrahasia",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true, maxAge: 6000
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use('/images', express.static('./images'))

const PORT = process.env.PORT || 5000;




app.get("/", (req, res) => {
    
    console.log("hello world")
    return res.send("hola juga")
})






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
