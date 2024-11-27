
const express = require("express");
15
const mongoose = require("mongoose");
const Buku = require("./Models/BookSchema");
const app = express();
const PORT = 4000; //Diusahakan jangan menggunakan PORT 3000 karena biasanyasudah digunakan oleh React
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
"mongodb+srv://perry:mongodb@cluster0.0oanl.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected to MongoDB");
});
app.post("/addBuku", async (req, res) => {
const { title, category, author, genre, price } = req.body;
const buku = new Buku({ title, category, author, genre, price });
try {
    await buku.save();
        res
        .status(201)
        .json({ message: "Data Buku berhasil ditambahkan", data: buku });
    } catch (err) {
res.status(400).send(err);
}
});
app.delete("/deleteBuku", async (req, res) => {
    const { title } = req.body;
    try {
        await Buku.deleteMany({title: title});
            res
            .status(201)
            .json({ message: `Data Buku berjudul ${title} berhasil dihapus` });
        } catch (err) {
    res.status(400).send(err);
    }
});
app.get("/cariBuku", async (req, res) => {
    const { title } = req.body;
    try {
        var books = await Buku.find({title: title});
            res
            .status(201)
            .json({ message: `Ditemukan buku: `,books });
        } catch (err) {
    res.status(400).send(err);
    }
});



app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));