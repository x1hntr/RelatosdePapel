import "../styles/header.css";

const Libro = () => {
  return (
   <div className="libro">
      <img className="libro__imagen" src={"src/assets/portada.png"} alt={"cien"} />
      <p className="movie__details"><strong>Nombre:</strong> {}</p>
      <p className="movie__details"><strong>Autor:</strong> {}</p>
      <p className="movie__details"><strong>Resumen:</strong> {}</p>
    </div>
  );
};

export default Libro;
