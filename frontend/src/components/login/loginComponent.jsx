import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import logoOnatra from "../../assets/logo-onatra.svg";
import backgroundLogin from "../../assets/background-login.png";
import Logo from "../common/logo";
import { useNavigate } from "react-router-dom";
import { CtaLink } from "../common/link";
import { Button } from "../common/button";

function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData });

    // Fonction pour envoyer les informations de login
    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            // Si le login est réussi, on récupère le token
            if (response.ok) {
                const result = await response.json();
                const { token } = result;
                // Sauvegarder le token dans le localStorage
                localStorage.setItem("token", token);

                // Rediriger vers le dashboard ou la page d'accueil
                navigate("/dashboard");
            } else {
                // Si l'authentification échoue
                const errorResult = await response.json();
                alert(errorResult.message || "Échec de la connexion.");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
            alert("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
    };

    const navigateToRegister = () => {
        navigate('/register'); // Assurez-vous d'avoir une route pour l'inscription
    };

    return (
        <div className="flex bg-gray-100 h-screen w-full">
            <div className="image-login">
                <Logo
                    className="h-screen w-[1000px] object-cover"
                    src={backgroundLogin}
                    alt="l'icon de la connexion"
                />
            </div>
            <div className="items-start grid grid-rows-[1fr_0.1fr_2fr] grid-cols-[1fr] justify-center text-center w-full h-screen">
                <div className="flex items-center ml-10 mt-4">
                    <span>ONATRA RDC</span>
                    <Logo
                        src={logoOnatra}
                        alt="l'icon de la connexion"
                    />
                </div>
                <div>
                    <h2 className="font-semibold text-gray-800">
                        Bienvenue ! <br /> Veuillez vous connecter !
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex items-center justify-center flex-col">
                        <div className="relative flex w-full max-w-[300px] mt-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                className=" relative z-1 flex-auto w-1/12 mb-0 block w-full px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                {...register("email", {
                                    required: "Ce champ est obligatoire",
                                    minLength: 6,
                                    pattern: {
                                        value: /^[a-zA-Z0-9_]/i,
                                        message: "Ce champ n'est pas au bon format",
                                    },
                                })}
                            />
                            <span className="whitespace-nowrap block rounded-l-md rounded-r-none cursor-pointer text-center px-3 py-2 text-xs leading-6 text-gray-600 bg-blue-200 border border-blue-400 font-bold transition-colors flex items-center justify-center -ml-1">
                                @gmail.com
                            </span>
                            {errors.email && (
                                <span>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="input-container relative flex w-full max-w-[300px] mt-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Votre mot de passe"
                                className="input-global relative z-1 flex-auto w-1/12 mb-0 block w-full px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                {...register("password", {
                                    required: "Ce champ est obligatoire",
                                    minLength: 8,
                                    pattern: {
                                        value: /^[a-zA-Z0-9_]/i,
                                        message: "Ce champ n'est pas au bon format",
                                    },
                                })}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="whitespace-nowrap block rounded-l-none rounded-r-md cursor-pointer text-center px-3 py-2 text-xs leading-6 text-gray-600 bg-blue-200 border border-blue-400 font-bold transition-colors flex items-center justify-center -ml-1"
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                            </span>
                            {errors.password && (
                                <span className="text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <Button type="submit">Se connecter</Button>
                    <div className="navigateToRegister mt-2">
                        <span className="text-[#7D7D7D] italic ">Vous n'avez pas de compte ?</span>
                        <CtaLink onClick={navigateToRegister}>
                            Inscrivez-vous ici !
                        </CtaLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;