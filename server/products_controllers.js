module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body;

        db.create_product(name, description, price, image_url)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_product(id)
        .then(oneItem => {
            res.status(200).send(oneItem)
        })
        .catch(err => {
            res.status(500).send({errorMessage: `can't get one`})
            console.log(err)
        } )
    },
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then(dbResponse => {
            res.status(200).send(dbResponse)
        })
        .catch(err => {
            res.status(500).send({errorMessage: `problem acquiring all`})
            console.log(err)
        } )
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.update_product(id)
        .then(resp => {
            res.status(200).send(resp)
        })
        .catch(err => {
            res.status(500).send({errorMessage: `you want to update, but you can't`})
            console.log(err)
        } )
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
        .then(delResp => {
            res.status(200).send(delResp)
        })
        .catch(err => {
            res.status(500).send({errorMessage: `you want to delete, but you can't`})
            console.log(err)
        } )
    }
}