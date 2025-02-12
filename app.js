import express from 'express';
const app = express();
const port = 3000;

// import posts router
import postsRouter from './routers/postsRouter.js';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server root');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});