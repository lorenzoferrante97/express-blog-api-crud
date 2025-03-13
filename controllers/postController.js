// import array posts from data
// import arrayPosts from '../data/posts.js';

import connection from '../data/db.js';

// function -> index
const index = (req, res) => {
  //   let arrayPostsFiltered = arrayPosts;
  //   const tag = req.query.tag;
  // console.log("tag: ", tag)
  // se presente una chiave nell'url
  //   if (tag) {
  // console.log("sono entrato nell'if")
  // arrayPostsFiltered = arrayPosts.filter( post => {
  //     return post.tags.includes(tag);
  // });
  // arrayPostsFiltered = arrayPosts.filter((post) => post.tags.includes(tag));
  //   }
  //   res.json(arrayPostsFiltered);

  // query
  const sql = 'SELECT * from posts';
};

// function -> show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  let postFiltered = arrayPosts.find((post) => post.id === id);

  res.json(postFiltered);
};

// function -> store
const store = (req, res) => {
  // new id per il nuovo post
  let newId = arrayPosts[arrayPosts.length - 1].id + 1;

  // creazione nuovo oggetto
  let newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  arrayPosts.push(newPost);
  console.log(newPost);
  res.send('nuovo elemento inserito');
};

// function -> update
const update = (req, res) => {
  // recupero post per update
  const id = parseInt(req.params.id);
  let postFiltered = arrayPosts.find((post) => post.id === id);

  // se presente
  if (postFiltered) {
    // per ogni chiave dell'oggetto in body
    for (const key in req.body) {
      postFiltered[key] = req.body[key];
    }

    res.send('Dati aggiornati correttamente');
  } else {
    const notFound = {
      status: 404,
      error: 'Not Found',
      message: 'La risorsa che vuoi aggiornare non è stata trovata',
    };

    res.send(404).json(error);
  }
};

// function -> modify
const modify = (req, res) => {
  // recupero post per modify
  const id = parseInt(req.params.id);
  let postFiltered = arrayPosts.find((post) => post.id === id);

  // se presente
  if (postFiltered) {
    // per ogni chiave dell'oggetto in body
    for (const key in req.body) {
      postFiltered[key] = req.body[key];
    }

    res.send('Dati aggiornati correttamente');
  } else {
    const notFound = {
      status: 404,
      error: 'Not Found',
      message: 'La risorsa che vuoi aggiornare non è stata trovata',
    };

    res.send(404).json(error);
  }
};

// function -> destroy
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  let postFiltered = arrayPosts.find((post) => post.id === id);

  // se post con id è presente
  if (postFiltered) {
    let postIndex = arrayPosts.indexOf(postFiltered);

    // eliminare post
    arrayPosts.splice(postIndex, 1);

    console.log(arrayPosts);
    res.sendStatus(204);
  } else {
    res.status(404);

    const notFound = {
      status: 404,
      error: 'Not Found',
      message: 'La risorsa che vuoi eliminare non è stata trovata',
    };

    res.json(notFound);
  }
};

export default { index, show, store, update, modify, destroy };

// end code
// end code 2
