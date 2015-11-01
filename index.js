var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/tmap', function(request, response) {
  response.render('pages/tmap');
});

var productsJSON = [
    {
      "_id": "5612f62ed69e21ea508f8b77",
      "title": "ullamco cupidatat title",
      "description": "Id ea sunt aute qui ad title aliqua pariatur dolore aliqua.",
      "status": false,
      "price": "$2,660.93",
      "picture": "images/products/1.jpg",
      "color": "blue",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62ee06acb36f1604b37",
      "title": "laborum veniam consectetur",
      "description": "Velit do elit occaecat magna deserunt consequat mollit laborum culpa veniam occaecat.",
      "status": true,
      "price": "$1,702.91",
      "picture": "images/products/2.jpg",
      "color": "green",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62e4ac6290e06f0ccce",
      "title": "occaecat fugiat adipisicing",
      "description": "Duis consequat sit ex eiusmod sunt eiusmod nisi cillum mollit aliqua.",
      "status": true,
      "price": "$2,536.15",
      "picture": "images/products/3.jpg",
      "color": "blue",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62e198814bb65677bec",
      "title": "enim qui reprehenderit",
      "description": "Ut proident amet magna excepteur occaecat veniam nulla sit.",
      "status": true,
      "price": "$2,984.83",
      "picture": "images/products/4.jpg",
      "color": "green",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62e9321121797a89781",
      "title": "consequat esse aliqua",
      "description": "Ea adipisicing nulla sunt ipsum.",
      "status": true,
      "price": "$3,214.24",
      "picture": "images/products/5.jpg",
      "color": "brown",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62ee775e5c500ac5282",
      "title": "elit laboris irure",
      "description": "Magna excepteur occaecat id in veniam aliqua qui elit do ea consequat.",
      "status": true,
      "price": "$2,832.49",
      "picture": "images/products/6.jpg",
      "color": "brown",
      "link": "product_details.html"
    },
    {
      "_id": "5612f62e70be4693f3c4d2cd",
      "title": "nisi nisi irure",
      "description": "Pariatur enim deserunt adipisicing est duis proident ad minim cupidatat anim deserunt.",
      "status": true,
      "price": "$3,318.21",
      "picture": "images/products/7.jpg",
      "color": "brown",
      "link": "product_details.html"
    }
  ];

app.get('/json', function(request, response) {
   response.writeHead(200, {"Content-Type": "application/json"});
   response.end(productsJSON);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


