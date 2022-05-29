const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'uno', nombre: 'rocko', descripcion: 'rocko descripcion'},
            {id: 'dos', nombre: 'black', descripcion: 'black descripcion'}
        ]
    })
})


module.exports = router;