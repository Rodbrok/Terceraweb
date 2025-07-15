function ContactForm() {
  return (
    <section className="contact" id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
export default ContactForm;
