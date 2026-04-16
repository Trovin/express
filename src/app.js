import express from 'express';
import router from './modules/users/users.routes.js';
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();
const port = 3000;

app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/users', router);

app.listen(port, () => {
    console.log(`Listening handler ${port}`)
});


