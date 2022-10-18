import {useState, useContext} from'react'
import { useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext'
import Swal from 'sweetalert2'
import axios from 'axios';
const Login = ()=>{
    const navigate = useNavigate();
    const {dataUser, updateDataUser} = useContext(UserContext)
    const URL = 'http://localhost:3000/api/users/login'
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = async () => {
        const datos = {id: null, userName: null, token:null}
        let login = await axios.post(URL, user)
        if(login.data.error){
            Swal.fire({
                title: 'Datos Incorrectos',
                text: login.data.error,
                icon: 'error',
                confirmButtonText: 'Volver a Intentar'
            })
            console.log(login.data.error)
        }
        if(login.data.success){
            datos.id = user.id
            datos.userName = user.userName
            datos.token = login.data.success
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/home');
            updateDataUser(datos)
        }
            

    }
    return(
        <main className="flex-grow">
            <section className="h-full gradient-form bg-gray-200 md:h-screen">
                <div className="container py-12 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="border-2 border-neutral-900 block bg-white shadow-lg rounded-lg">
                        <div className="lg:flex lg:flex-wrap g-0">
                            <div className="lg:w-6/12 px-4 md:px-0">
                            <div className="md:p-12 md:mx-6">
                                <div className="text-center">
                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Administrador cafetero</h4>
                                </div>
                                
                                <p className="mb-4">Por favor ingresa con tu cuenta</p>
                                <div className="mb-4">
                                    <input
                                    onChange={handleChange}
                                    value={user.userName}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="userName"
                                    name="userName"
                                    placeholder="Usuario"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                    onChange={handleChange}
                                    value={user.password}
                                    type="password"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    />
                                </div>
                                <div className="text-center pt-1 mb-12 pb-1">
                                    <button
                                    onClick={handleSubmit}
                                    className="bg-gradient-to-b from-cyan-400 via-cyan-600 to-emerald-900 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    type="button"
                                    >
                                    Ingresar
                                    </button>
                                    <a className="text-gray-500" href="#!">Olvidaste tu contraseña?</a>
                                </div>
                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">No tienes una cuenta?</p>
                                    <button
                                    type="button"
                                    className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    >
                                    Registrarme
                                    </button>
                                </div>
                                
                            </div>
                            </div>
                            <div
                            className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-emerald-900 lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    
                            >
                            <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                <h4 className="text-xl font-semibold mb-6">¿Que es adminsitrador cafetero?</h4>
                                <p className="text-sm">
                                Admisnitrador cafetero, es una herramienta tecnologica que le permitira a los
                                caficultures adminsitrar de una forma mas organizada algunos procesos de sus fincas.

                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login