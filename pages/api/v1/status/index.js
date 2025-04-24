function status(request, response) {
    response.status(200).json({ chave: "minha bb é fofinha" });
}

export default status;
