const express = require('express');
const app = express();
const port = 3000;

app.get('/employee', (req, res) => {
  res.json([
    {id: 1, image: 'square.png', rating: 5, name: 'vikky pall', place: 'coimbatore', position: 'software developer'},
    {id: 2, image: 'circle.png', rating: 3, name: 'indrajith venugopal', place: 'ernamkulam', position: 'software developer'},
    {id: 3, image: 'circle.png', rating: 4.5, name: 'deepak s', place: 'palakkadu', position: 'Senior software developer'},
    {id: 4, image: 'square.png', rating: 3, name: 'mahesh', place: 'trivandrum', position: 'software developer'},
    {id: 5, image: 'circle.png', rating: 5, name: 'vishnu s pillai', place: 'idduki', position: 'senior software developer'},
    {
      id: 6,
      image: 'circle.png',
      rating: 5,
      name: 'suralal s suresh',
      place: 'trivandrum',
      position: 'Senior software developer',
    },
    {id: 7, image: 'circle.png', rating: 5, name: 'vibin thomas', place: 'angamali', position: 'software developer'},
    {id: 8, image: 'square.png', rating: 3.5, name: 'lenin jayaraj', place: 'edukki', position: 'senior software developer'},
    {id: 9, image: 'square.png', rating: 3.5, name: 'chandulal', place: 'trivandrum', position: 'senior designer'},
    {id: 10, image: 'square.png', rating: 3.5, name: 'sneha', place: 'kannur', position: 'software developer'},
    {id: 11, image: 'square.png', rating: 3.5, name: 'paulson ps', place: 'trivandrum', position: 'senior ui developer'},
    {id: 12, image: 'circle.png', rating: 5, name: 'jayakrishnan', place: 'trivandrum', position: 'senior software developer'},
    {id: 13, image: 'star.png', rating: 5, name: 'deepa', place: 'kollam', position: 'software tester'},
    {
      id: 14,
      image: 'circle.png',
      rating: 5,
      name: 'akash s prakash',
      place: 'trivandrum',
      position: 'senior software developer',
    },
    {id: 15, image: 'circle.png', rating: 2.5, name: 'preetha', place: 'trivandrum', position: 'software tester'},
    {id: 16, image: 'circle.png', rating: 2.5, name: 'Akashy kannan', place: 'trivandrum', position: 'bussines development'},
    {id: 17, image: 'circle.png', rating: 2.5, name: 'visakh', place: 'trivandrum', position: 'senior software tester'},
    {
      id: 18,
      image: 'circle.png',
      rating: 5,
      name: 'jishnu s bhattathiri',
      place: 'trivandrum',
      position: 'senior software developer',
    },
    {id: 19, image: 'triangle.png', rating: 4, name: 'athul', place: 'trivandrum', position: 'software developer'},
    {id: 20, image: 'triangle.png', rating: 4, name: 'vignesh', place: 'trivandrum', position: 'software developer'},
    {
      id: 21,
      image: 'triangle.png',
      rating: 4.5,
      name: 'abilash anandhan',
      place: 'trivandrum',
      position: 'senior bussines development',
    },
    {id: 22, image: 'triangle.png', rating: 4, name: 'vinay', place: 'trivandrum', position: 'bussines development'},
    {id: 23, image: 'triangle.png', rating: 5, name: 'safal das', place: 'trivandrum', position: 'senior software developer'},
    {id: 24, image: 'circle.png', rating: 5, name: 'liji', place: 'palakadu', position: 'senior SEO'},
  ]);
});

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + '/shapes/' + req.params.image);
});

app.post('/review', (req, res) => {
  setTimeout(() => {
    res.json({success: 'OK'});
  }, 2000);
});

app.listen(port, () => console.log(`Restaurant app listening on port ${port}!`));
