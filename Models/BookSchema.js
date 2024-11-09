const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
title: {
type: String,
required: [true, 'Name is required']
},
category: {
type: String,
required: [true, 'NPM is required']
},
author: {
type: String,
required: [true, 'Jurusan is required']
},
genre: {
type: String,
required: [true, 'Gaji is required']
},

price: {
type: String,
required: [true, 'Price is required']
},
});
const Buku = mongoose.model('Buku', BookSchema);

module.exports = Buku;
