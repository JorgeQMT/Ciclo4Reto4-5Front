import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';


const DetalleUsuarios = (   ) => {
  
   // Hook para redireccionar
  const navigate = useNavigate();
 
  const formik = useFormik({
      initialValues: {
        id: "",
        identification: "",
        name: "",
        birthtDay: "",
        monthBirthtDay: "",
        address: "",
        cellPhone: "",
        email: "",
        password:"",
        zone:"",
        type:"",
      }, 
      onSubmit: datos => {
          Swal.fire({
              title: 'Quieres crear el Usuario?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, Crear!'
            }).then((result) => {
              if (result.isConfirmed) {
                  try{ console.log(datos);
                      fetch(`http://168.138.249.154:8080/api/user/new`, {
                          method: "POST",
                          body: JSON.stringify(datos),
                          headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              //console.log(data);             
                      });
                     
                Swal.fire(
                  
                  'Se creo correctamente.',
                  'success'
                  
                  
                );
                navigate('/usuarios');
              } catch (error) {
                  console.log(error)
              }
              
          }
        })
             
      }
   }); 

       return( 
        <>

<div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-light mb-4">DETALLE USUARIOS</h1>
      </div>
      <div className="flex justify-center mt-10">
            <div className="w-full max-w-3xl">
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id"
                            type="number"
                            placeholder="id" 
                            value={formik.values.id} 
                            onChange={formik.handleChange}   
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACION</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="identification"
                            type="number"
                            placeholder="identification" 
                            value={formik.values.identification} 
                            onChange={formik.handleChange}   
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">NOMBRE</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
            
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FECHA DE CUMPLEA??OS</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="birthtDay"
                            type="date"
                            placeholder="Cumplea??os"
                            value={formik.values.birthtDay}
                            onChange={formik.handleChange}    
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MES DE CUMPLEA??OS</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="monthBirthtDay"   
                            value={formik.values.monthBirthtDay}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Selecionar Mes</option>
                            <option value="1">ENERO</option>
                            <option value="2">FEBRERO</option>
                            <option value="2">MARZO</option>
                            <option value="4">ABRIL</option>
                            <option value="5">MAYO</option>
                            <option value="6">JUNIO</option>
                            <option value="7">JULIO</option>
                            <option value="8">AGOSTO</option>
                            <option value="9">SEPTIEMBRE</option>
                            <option value="10">OCTUBRE</option>
                            <option value="11">NOVIEMBRE</option>
                            <option value="12">DICIEMBRE</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIRECCION</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Direccion" 
                            value={formik.values.address}
                            onChange={formik.handleChange}      
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TELEFONO</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cellPhone"
                            type="number"
                            placeholder="Celular" 
                            value={formik.values.cellPhone}
                            onChange={formik.handleChange}      
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CORREO</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Correo" 
                            value={formik.values.email}
                            onChange={formik.handleChange}      
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CONTRASE??A</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            placeholder="Contrase??a" 
                            value={formik.values.password}
                            onChange={formik.handleChange}      
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ZONA</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="zone"   
                            value={formik.values.zone}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Selecionar Zona</option>
                            <option value="Zona 1">CHAPINERO</option>
                            <option value="Zona 2">USAQUEN</option>
                            <option value="Zona 3">MARTIRES</option>
                            <option value="Zona 4">KANNEDY</option>
                            <option value="Zona 5">CIUDAD BOLIVAR</option>
                            <option value="Zona 6">CENTRO</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TIPO</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="type"   
                            value={formik.values.type}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Selecionar Tipo</option>
                            <option value="AMD">ADMINISTRADOR</option>
                            <option value="COOR">COORDINADOR</option>
                            <option value="ASE">ASESOR</option>
                        </select>
                    </div>
            
                    <input type="submit" className="bg-yellow-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Agregar Usuario"/>
                </form>
            </div>
        </div>
    </div>
    </div>
          
        </>
     );
}
 
export default DetalleUsuarios;