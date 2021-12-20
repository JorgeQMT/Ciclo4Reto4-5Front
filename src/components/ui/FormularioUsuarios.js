import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUsuario from '../paginas/ActualizarUsuario';


const FormularioUsuarios = ({usuario}) => {

    const {identification,name,birthtDay,monthBirthtDay,address,cellPhone,email,zone,type } = usuario;

    const [ usuarios, guardarUsuarios] = useState([]);

    fetch("http://168.138.249.154:8080/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarUsuarios(data);
    });
   
    const actualizarUsuario = id =>{{
        usuarios.map( usuario =>(
                <ActualizarUsuario key={usuario.id} usuario={usuario} /> 
            ))
        }
    }

    const borrarUsuario = id =>{
        Swal.fire({
            title: 'Quieres borrar el Usuario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(id);
                    fetch(`http://168.138.249.154:8080/api/user/${id}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                    }).then((data) =>{
                        // console.log(data);
                    });   
                    Swal.fire(
                        'Deleted!',
                        'Se borro correctamente.',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }
                
            }
        })
    }

    return( 
        <>
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">

                        <p className="text-gray-600 mb-4">Identificacion: {''}
                            <span className="text-gray-700 font-bold"> {identification}</span> 
                        </p>   
                        <p className="text-gray-600 mb-4">Nombre: {''}
                            <span className="text-gray-700 font-bold">{name}</span> 
                        </p>
                        <p className="text-gray-600 mb-4">Identificacion: {''}
                            <span className="text-gray-700 font-bold"> {identification}</span> 
                        </p>   
                        <p className="text-gray-600 mb-4">Cumpleaños: {''}
                            <span className="text-gray-700 font-bold">{birthtDay}</span> 
                        </p>
                        <p className="text-gray-600 mb-4">Mes: {''}
                            <span className="text-gray-700 font-bold"> {monthBirthtDay}</span> 
                        </p>   
                        <p className="text-gray-600 mb-4">Direccion: {''}
                            <span className="text-gray-700 font-bold">{address}</span> 
                        </p>
                        <p className="text-gray-600 mb-4">Celular: {''}
                            <span className="text-gray-700 font-bold"> {cellPhone}</span> 
                        </p>   
                        <p className="text-gray-600 mb-4">Correo: {''}
                            <span className="text-gray-700 font-bold">{email}</span> 
                        </p>
                        <p className="text-gray-600 mb-4">Zona: {''}
                            <span className="text-gray-700 font-bold"> {zone}</span> 
                        </p>   
                        <p className="text-gray-600 mb-4">Tipo: {''}
                            <span className="text-gray-700 font-bold">{type}</span> 
                        </p>
                        <button onClick={ () => borrarUsuario(usuario.id)} type="submit" className=" bg-red-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold"> 
                            Eliminar Usuario
                        </button>
                        <br/>
                        <Link to={`/actualizar-usuario/${usuario.id}`} className="  bg-yellow-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                            Actualizar Usuario
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </> 
    );
}
 
export default FormularioUsuarios;