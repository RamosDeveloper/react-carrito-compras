import { useContext } from "react";
import UserContext from "../../contextos/UserContext";
import { useNavigate } from "react-router";
import FormularioLogin from "../../componentes/FormularioLogin";
import './Login.css';

const Login = () => {
    const {setUserInfo} = useContext(UserContext);
    let navigate = useNavigate();

    const setLogin = ({usuario}) => {
        setUserInfo({
            id: 1,
            nombre: usuario            
        });

        navigate("/");
    };

    return (
        <div className="row h-100 bg-principal">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center h-100 bg-white">
                <i className="fas fa-lock icono-principal"></i>
                <section className="w-50 my-3">
                    <FormularioLogin setLogin={setLogin} />
                </section>
            </div>            
        </div>
    )
};

export default Login;