
// import array posts from data
import arrayPosts from '../data/posts.js';


// function -> index
const index = (req, res) => {

    let arrayPostsFiltered = arrayPosts;

    const tag = req.query.tag;

    // console.log("tag: ", tag)

    // se presente una chiave nell'url
    if(tag) {
        // console.log("sono entrato nell'if")
        // arrayPostsFiltered = arrayPosts.filter( post => {
        //     return post.tags.includes(tag);
        // });
        arrayPostsFiltered = arrayPosts.filter( post => post.tags.includes(tag) );
    };

    res.json(arrayPostsFiltered);
};

// function -> show
const show = (req, res) => {

    const id = parseInt(req.params.id);

    let postFiltered = arrayPosts.find( post => post.id === id);


    res.json(postFiltered);
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

    const id = parseInt(req.params.id);

    let postFiltered = arrayPosts.find( post => post.id === id);

    // se post con id è presente
    if (postFiltered) {

        let postIndex = arrayPosts.indexOf(postFiltered);

        // eliminare post
        arrayPosts.splice(postIndex, 1);

        console.log(arrayPosts)
        res.sendStatus(204);
    } else {
        res.status(404);

        const notFound = {
            status: 404,
            error: "Not Found",
            message: "La risorsa che vuoi eliminare non è stata trovata"
        }

        res.json(notFound);
    }

};

export default {index, show, store, update, modify, destroy};

// end code