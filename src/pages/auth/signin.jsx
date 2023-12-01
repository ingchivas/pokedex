import { getProviders, signIn, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";

export default function SignIn({ providers }) {
    const { callbackUrl } = useRouter().query
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-red-400">
            <div className="bg-red-500 rounded-lg p-8 shadow-md text-center flex flex-col items-center px-28">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png "
                    alt="logo"
                    width={100}
                    height={100}
                />

                <h1 className="text-5xl font-bold mt-5 text-white">
                    Pokedex
                </h1>
                

                <h1 className="text-2xl font-bold mt-5 text-white">
                    Inicia Sesión con Google
                </h1>

                <button className="flex btn btn-primary gap-2 mt-5 text-white justify-center items-center outline rounded px-4 py-2 outline-white hover:bg-red-600"
                            onClick={() => signIn("google", { callbackUrl })}>
                            <FaGoogle className='color-white mr-2' size={20} />
                            Inicia Sesión con Google
                        </button>
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}