const indexController = async(req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
};


export { indexController };