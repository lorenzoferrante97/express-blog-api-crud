
// import array posts from data
import arrayPosts from '../data/posts.js';


// function -> index
const index = (req, res) => {
    res.json(arrayPosts);
};

// function -> show
const show = (req, res) => {
    res.send("show funziona");
};

// function -> store
const store = (req, res) => {
    res.send("store funziona");
};

// function -> update
const update = (req, res) => {
    res.send("update funziona");
};

// function -> modify
const modify = (req, res) => {
    res.send("modify funziona");
};

// function -> destroy
const destroy = (req, res) => {
    res.send("destroy funziona");
};

export default {index, show, store, update, modify, destroy};