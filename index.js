
const express = require("express");
15
const mongoose = require("mongoose");
const User = require("./models/UserSchema");
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
app.post("/addMahasiswa", async (req, res) => {
const { name, npm, jurusan } = req.body;
const user = new User({ name, npm, jurusan });
try {
    await user.save();
        res
        .status(201)
        .json({ message: "Data Mahasiswa berhasil ditambahkan", data: user });
    } catch (err) {
res.status(400).send(err);
}
});
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));