const sendEmail = async (contenido: string, subject: string) => {
  try {
    const res = await fetch("https://gs-monteperdido.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contenido, subject }),
    });

    const data = await res.json();
    alert(data.message);
    if (data.message == "Correo enviado con éxito") {
      window.location.reload();
      window.scrollTo(0, 0)
    }
  } catch (error) {
    console.error("Error:", error);
    console.log("Ocurrió un error al enviar el correo");
  }
};

export default sendEmail