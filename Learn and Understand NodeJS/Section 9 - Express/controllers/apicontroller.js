module.exports = function(app) {


    app.get('/api/person/:id', function(req, res) {
        // get data from the database
        res.json({ firstname: 'Aditya', lastname: 'Tyagi' });
    });

    app.post('/api/person', function(req, res) {
        // save to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete data from the database

    });

}