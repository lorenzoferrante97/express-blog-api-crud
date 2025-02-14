const errorNotFound = (err, req, res) => {

    const notFound = {
        status: 404,
        error: "Risorsa non trovata",
        message: "La risorsa a cui vuoi accedere non è stata trovata"
    }

    res.status(404).json(notFound);
    
}