import Encabezado from "../../componentes/Encabezado";
import Producto from "../../componentes/Producto";

const Home = () => {
    const productos = [
        { "id": 1, "nombre": "Tomate", "precio": 10, "img": "/imagenes/p-1.jpg" },
        { "id": 2, "nombre": "Lechuga", "precio": 25, "img": "/imagenes/p-2.jpg" },
        { "id": 3, "nombre": "Cebolla", "precio": 15, "img": "/imagenes/p-3.jpg" },
        { "id": 4, "nombre": "Chicharos", "precio": 30, "img": "/imagenes/p-4.jpg" },
        { "id": 5, "nombre": "Zanahoria", "precio": 35, "img": "/imagenes/p-5.jpg" }
    ];

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Encabezado />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {productos.map(producto => 
                        <div key={producto.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <Producto producto={producto} />
                        </div>    
                    )}
                </div>
            </div>
        </div>
    )
};

export default Home;