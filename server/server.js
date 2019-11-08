const express = require('express');
const app = express();
const port = 3000;

app.get('/employee', (req, res) => {
  res.json([
    {id: 1, image: 'circle.png', rating: 5, name: 'vikky pall', place: 'coimbatore'},
    {id: 2, image: 'circle.png', rating: 5, name: 'indrajith venugopal', place: 'ernamkulam'},
    {id: 3, image: 'circle.png', rating: 5, name: 'deepak s', place: 'palakkadu'},
    {id: 4, image: 'square.png', rating: 5, name: 'mahesh', place: 'trivandrum'},
    {id: 5, image: 'circle.png', rating: 5, name: 'vishnu s pillai', place: 'idduki'},
    {id: 6, image: 'circle.png', rating: 5, name: 'suralal s suresh', place: 'trivandrum'},
    {id: 7, image: 'circle.png', rating: 5, name: 'vibin thomas', place: 'angamali'},
    {id: 8, image: 'circle.png', rating: 5, name: 'lenin jayaraj', place: 'edukki'},
    {id: 9, image: 'circle.png', rating: 5, name: 'chandulal', place: 'trivandrum'},
    {id: 10, image: 'circle.png', rating: 5, name: 'sneha', place: 'kannur'},
    {id: 11, image: 'circle.png', rating: 5, name: 'paulson ps', place: 'trivandrum'},
    {id: 12, image: 'circle.png', rating: 5, name: 'jayakrishnan', place: 'trivandrum'},
    {id: 13, image: 'star.png', rating: 5, name: 'deepa', place: 'kollam'},
    {id: 14, image: 'circle.png', rating: 5, name: 'akash s prakash', place: 'trivandrum'},
    {id: 15, image: 'circle.png', rating: 5, name: 'preetha', place: 'trivandrum'},
    {id: 16, image: 'circle.png', rating: 5, name: 'Akashy kannan', place: 'trivandrum'},
    {id: 17, image: 'circle.png', rating: 5, name: 'visakh', place: 'trivandrum'},
    {id: 18, image: 'circle.png', rating: 5, name: 'jishnu s bhattathiri', place: 'trivandrum'},
    {id: 19, image: 'triangle.png', rating: 5, name: 'athul', place: 'trivandrum'},
    {id: 20, image: 'circle.png', rating: 5, name: 'vignesh', place: 'trivandrum'},
    {id: 21, image: 'circle.png', rating: 5, name: 'abilash anandhan', place: 'trivandrum'},
    {id: 22, image: 'circle.png', rating: 5, name: 'vinay', place: 'trivandrum'},
    {id: 23, image: 'circle.png', rating: 5, name: 'safal das', place: 'trivandrum'},
    {id: 24, image: 'circle.png', rating: 5, name: 'liji', place: 'palakadu'},
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
