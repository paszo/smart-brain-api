const handleGetAll = (req, res, db) => {
    db.select('*').from('users').then(data => {
        if (data.length) {
            res.json(data);
        } else {
            res.status(400).json('Not found');
        }
    })
        .catch(err => res.status(400).json('error getting user'))

}

module.exports = {
    handleGetAll: handleGetAll
}