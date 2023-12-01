import {getProviders, signIn, getSession} from "next-auth/react"
import {useRouter} from "next/router"

export default function Error() {
    const callbackUrl = "/"
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Error</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <p>Ocurrió un problema iniciando sesión.</p>
                            <button className="btn gap-2 btn-primary"
                                onClick={
                                    () => signIn("google", {callbackUrl})
                            }>
                                Regresar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}