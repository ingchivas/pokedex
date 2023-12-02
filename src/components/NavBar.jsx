import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FaGoogle } from "react-icons/fa";

import PropTypes from 'prop-types';

const Navbar = ({ user }) => {
    return (
        <nav className="bg-red-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="logo" className="h-10 w-10 inline-block mr-2 rounded-lg" />
                    <a href="/" className="hover:text-gray-300">Pokedex</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    {user && (
                        <div className="flex items-center space-x-2">
                            <img src={user.image} alt={user.first_name} className="h-8 w-8 rounded-full" />
                            <span> Bienvenido, {user.first_name}</span>
                        </div>
                    )}

                    {/* If no user, a button to sign in with google */}

                    {!user && (
                        <button className="flex btn btn-primary gap-2 text-white justify-center items-center outline rounded px-4 py-2 outline-white hover:bg-red-600"
                            onClick={() => signIn()}>
                            <FaGoogle className='color-white mr-2' size={20} />
                            Inicia Sesión con Google

                        </button>
                    )}

                    {/* If there is a user, a button to log out */}
                    {user && (
                        <button className="btn btn-primary gap-2 text-white justify-center items-center outline rounded px-4 py-2 outline-white hover:bg-red-600"
                            onClick={() => signOut()}>
                            Cerrar Sesión
                        </button>
                    )}


                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        image: PropTypes.string
    }),
};

export default Navbar;


// hola me llamo claudio