import Libro from '../components/Libro';
import Sidebar from '../components/SideBar';

import '../styles/home.css'; // Asegúrate de tener este archivo CSS
const Home = () => {

    return (
        <div className="home-page">
            <Sidebar />
            <main className="home-page__content">
                <h1>Los más vendidos: </h1>
                <Libro/>
            </main>
        </div>
    );
};

export default Home;
