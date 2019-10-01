const express = require('express');
const path = require('path');
const handle = require('express-handlebars');

const app = express();
app.use(express.static('public'));

//handlebars section
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handle({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('action', { })
})

const actionRout = require('./routes/action');
app.use('/type', actionRout);

// const actionRout = require('./routes/action');
// app.use('/action', actionRout);

// const comedyRout = require('./routes/comedy');
// app.use('/comedy', comedyRout);

// const dramaRout = require('./routes/drama');
// app.use('/drama', dramaRout);



let port = process.env.PORT || 3000;
app.set('port', port);
app.listen(app.get('port'), () => {
    console.log('server listning on port:', port);
})