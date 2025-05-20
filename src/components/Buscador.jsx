import '../styles/buscador.css';

const Buscador = () => {
    return (
        <div className="book-search">
            <input
                type="text"
                placeholder="Buscar"
                className="book-search__input"
            />
            <button className="book-search__button">🔍</button>
        </div>
    );
};

export default Buscador;
