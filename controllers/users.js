'use strict';

const users = (app) => {
    app.post('/api/users', (req, res) =>{
        let body = req.body;
        res.json({
            msg:"Create Success",
            data: body
        });
    });

    app.get('/api/users/:id', (req, res) => {
        let id = req.params.id;
        res.json({
            msg:"Read Success",
            data: id
        });
    });

    app.put('/api/users/:id', (req, res) =>{
        let body = req.body;
        let id = req.params.id;
        res.json({
            msg:`Update Data ${id} success`,
            data: body
        });
    });

    app.delete('/api/users/:id', (req, res) =>{
        let id = req.params.id;
        res.json({
            msg:`Delete data ${id} success`,
            data : id
        });
    });
}


module.exports = users;