import express from "express";
import dotenv from "dotenv";
import loanRoutes from "./routes/loanRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Menambahkan route untuk root URL (/) agar tidak muncul "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Selamat datang di Library API (Peminjaman Buku). Gunakan endpoint /api/loans untuk mengakses data.");
});

app.use("/api/loans", loanRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
