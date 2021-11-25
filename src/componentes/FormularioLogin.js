import useFormulario from '../hooks/useFormulario';

const FormularioLogin = ({setLogin}) => {
    const [formulario, handleChange, reset] = useFormulario({ usuario: '', contrasena: '', boton: 'Entrar' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(formulario);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    id="txtUsuario"
                    name="usuario" 
                    type="text"
                    className="form-control my-2"
                    placeholder="Teclea tu usuario" 
                    value={formulario.usuario} 
                    onChange={handleChange}
                />

                <input 
                    id="txtContrasena"
                    name="contrasena" 
                    type="password"
                    className="form-control my-2"
                    placeholder="Teclea tu contrasena" 
                    value={formulario.contrasena} 
                    onChange={handleChange}
                />  

                <input 
                    className="btn btn-primary btn-block"
                    type="submit"
                    value={formulario.boton}
                />              
            </div>
        </form>
    );
}

export default FormularioLogin;