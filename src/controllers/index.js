const indexController = async(req, res) => {
    res.render("index" , { title: 'Buddy Cal' })
};


export { indexController };