const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '2857afa86bff482cba2f012daf56d22f'
});

const handleApiCall = (req, res) => {
    console.log('inside api call');
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        req.body.input)
            .then(data => {
                res.json(data);
            })
            .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id).increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries);
        })
        .catch(err => res.status(400).json('unable to get count'))
}

module.exports = {
    handleImage,
    handleApiCall
}