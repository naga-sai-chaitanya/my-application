const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Home Page')
});




app.listen(8000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('8000')
})