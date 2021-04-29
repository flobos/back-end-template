import bodyParser from 'body-parser';
import express from 'express';
import { routes } from './routes';


const app = express();

app.use(bodyParser.json());


routes.forEach(route => {
    app[route.method](route.path, route.handler)

});


app.listen(8081, () => {
    console.log("Server on post 8081");
})