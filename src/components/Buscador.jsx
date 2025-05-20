import '../styles/buscador.css';

const Buscador = ({ value, onChange }) => {
  return (
    <div className="book-search">
      <input
        type="text"
        placeholder="Buscar"
        className="book-search__input"
        value={value}
        onChange={onChange}
      />
      <button className="book-search__button">🔍</button>
    </div>
  );
};

export default Buscador;
