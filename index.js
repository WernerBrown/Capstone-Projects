//1. Set up a new Node.js project using Express.js. - DONE
//2. Include Axios for making HTTP requests. - DONE
import express from 'express';
import axios from 'axios';

//3. Include EJS for templating. - DONE
//4. Ensure that the project has a structured directory and file organization. - DONE
const app = express();
const port = 3000;

app.use(express.static("public"));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})