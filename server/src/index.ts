import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "*",
    // origin: "https://incomparable-kelpie-ba6430.netlify.app",
    // origin: "https://vfernandez24.github.io",
    // origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { contenido, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "webgsmonteperdido@gmail.com",
      pass: "uuneobexjrvetbno",
    },
  });

  const mailOptions = {
    from: "webgsmonteperdido@gmail.com",
    to: "infomonteperdido@gmail.com",
    subject: subject,
    text: contenido,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
