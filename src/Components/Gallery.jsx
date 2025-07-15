const images = [
  { src: '/Terceraweb/images/gato.jpg', title: 'Prototipo 3D' },
  { src: '/Terceraweb/images/grabado.jpg', title: 'Grabado en Madera' },
  { src: '/Terceraweb/images/corte.jpg', title: 'Corte en Acrílico' },
];

function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <h2>Galería de Trabajos</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;


