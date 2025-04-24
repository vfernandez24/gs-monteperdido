const sendEmail = async (contenido: string, subject: string) => {
  try {
    //! Deploy
    const res = await fetch("https://gs-monteperdido-ofjz.onrender.com/send-email", {
      //! Dev
      // const res = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contenido, subject }),
    });

    const data = await res.json();
    console.log(data.message);
    return res.ok;
  } catch (error) {
    console.error("Error:", error);
    console.log("Ocurrió un error al enviar el correo");
    return false;
  }
};

export default sendEmail;
