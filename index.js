const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 4000; //Diusahakan jangan menggunakan PORT 3000 karena biasanya sudah digunakan oleh React
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://perry:mongodb@cluster0.0oanl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb.net/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
console.log('Connected to MongoDB <Nama>');
});
app.listen(PORT, () => console.log(`Server started at port:${PORT}
`));
