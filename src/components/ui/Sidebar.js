import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-yellow-800">
            <div className="p-6">
                <img src='https://res.cloudinary.com/uniminuto/image/upload/v1639968075/Logob_duiqe3.jpg'></img>
'
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">By Madre Selva</p>

                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Menu:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-500 hover:text-gray-900 text-center" activeClassName="text-gray-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-500 hover:text-gray-900 text-center" activeClassName="text-gray-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-500 hover:text-gray-900 text-center" activeClassName="text-gray-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-gray-500 hover:text-gray-900 text-center" activeClassName="text-gray-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;