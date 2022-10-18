import {useState,useEffect, useContext} from'react'
import UserContext from '../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { faTree, faRuler, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Finca from '../assets/img/finca.webp'

const Fincas = ()=>{
    const URL = 'http://localhost:3000/api/fincas'
    const {dataUser, updateDataUser} = useContext(UserContext)
    const [fincas, setFincas] = useState([]);
    const [fincasState, setFincasState] = useState(false);
    const navigate = useNavigate();
    const config = {
        headers:{
          'user-token': dataUser.token
        }
      };
    const cargarFincas = async ()=>{
        const respose = await axios.get(URL, config)
        console.log(respose.data)
        setFincas(respose.data);
    }
    useEffect(() => {
        cargarFincas()
    }, []);
    
    return(
        <main className="flex-grow">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl text-center font-bold tracking-tight text-green-900 drop-shadow">Fincas</h2>
                    <div className="flex justify-end">
                        <button  className="-mt-11 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 bg-green-900 hover:bg-green-500 rounded">Nueva finca</button>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {fincas.map(finca=>{
                            return(
                                <div key={fincas.id} className="group relative">
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img src={Finca} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                                    </div>
                                    <div className="mt-2 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            Nombre
                                        </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500"><FontAwesomeIcon className="text-green-700" icon={faTree} />{finca.arboles}</p>
                                        <p className="mt-1 text-sm text-gray-500"><FontAwesomeIcon className="text-yellow-400" icon={faRuler} />{finca.hectareas}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{finca.nombre}</p>
                                    </div>
                                </div>
                          )
                        })}
                            
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Fincas