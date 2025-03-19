import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import logoOnatra from "../../assets/logo-onatra.svg";
import backgroundLogin from "../../assets/background-login.png";
import Logo from "../common/logo";
import { useNavigate } from "react-router-dom";
import { CtaLink } from "../common/link";
import { Button } from "../common/button";

function RegisterComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            phone: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
        }
    });


    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Fonction pour envoyer les informations d'inscription
    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    age: data.age,
                    gender: data.gender
                }),
            });

            // Si l'inscription est réussie, on peut rediriger ou afficher un message
            if (response.ok) {
                // Rediriger vers la page de connexion ou afficher un message de succès
                navigate("/login"); // Assuming you have a login route
            } else {
                // Si l'inscription échoue
                const errorResult = await response.json();
                alert(errorResult.message || "Échec de l'inscription.");
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            alert("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
    };

    const navigateToLogin = () => {
        navigate('/'); // Assuming you have a route for login
    };

    return (
        <div className="flex bg-gray-100 h-screen w-full">
            <div className="items-start grid grid-rows-[0.5fr_0.1fr_3fr] grid-cols-[1fr] justify-center text-center w-full h-screen">
                <div className="flex items-center ml-10 mt-4">
                    <span>ONATRA RDC</span>
                    <Logo
                        src={logoOnatra}
                        alt="l'icon de la connexion"
                    />
                </div>
                <div>
                    <h2 className="font-semibold text-gray-800">
                        Bienvenue ! <br /> Créez votre compte !
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex items-center justify-center flex-col">
                        {/* First Name and Last Name */}
                        <div className="flex w-full max-w-[300px] mt-2 space-x-2">
                            <div className="relative w-1/2">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Prénom"
                                    className="relative z-1 flex-auto w-full mb-0 block px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                    {...register("firstName", { required: "Ce champ est obligatoire" })}
                                />
                                {errors.firstName && (
                                    <span className="text-red-500">{errors.firstName.message}</span>
                                )}
                            </div>
                            <div className="relative w-1/2">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Nom"
                                    className="relative z-1 flex-auto w-full mb-0 block px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                    {...register("lastName", { required: "Ce champ est obligatoire" })}
                                />
                                {errors.lastName && (
                                    <span className="text-red-500">{errors.lastName.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full max-w-[300px] mt-2 space-x-2">
                            <div className="relative w-1/2">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Âge"
                                    className="relative z-1 flex-auto w-full mb-0 block px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                    {...register("age", {
                                        required: "Ce champ est obligatoire",
                                        min: 18,
                                        max: 100,
                                        valueAsNumber: true
                                    })}
                                />
                                {errors.age && (
                                    <span className="text-red-500">{errors.age?.message || "Âge invalide"}</span>
                                )}
                            </div>
                            <div className="relative w-1/2">
                                <select
                                    name="gender"
                                    className="relative z-1 flex-auto w-full mb-0 block px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                    {...register("gender", { required: "Ce champ est obligatoire" })}
                                >
                                    <option value="">Genre</option>
                                    <option value="male">Homme</option>
                                    <option value="female">Femme</option>
                                    <option value="other">Autre</option>
                                </select>
                                {errors.gender && (
                                    <span className="text-red-500">{errors.gender.message}</span>
                                )}
                            </div>

                        </div>

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
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                        message: "Email invalide",
                                    }
                                    ,
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
                        <div className="relative flex w-full max-w-[300px] mt-2">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Votre numéro"
                                className=" relative z-1 flex-auto w-1/12 mb-0 block w-full px-4 py-2 leading-6 text-sm font-medium font-inherit rounded-md appearance-none text-gray-600 border border-gray-300 bg-white transition-border focus:outline-none focus:border-gray-800"
                                {...register("phone", {
                                    required: "Ce champ est obligatoire",
                                    minLength: 6,
                                    pattern: {
                                        value: /^[a-zA-Z0-9_]/i,
                                        message: "Ce champ n'est pas au bon format",
                                    },
                                })}
                            />
                            <span className="whitespace-nowrap block rounded-l-md rounded-r-none cursor-pointer text-center px-3 py-2 text-xs leading-6 text-gray-600 bg-blue-200 border border-blue-400 font-bold transition-colors flex items-center justify-center -ml-1">
                                0890000000
                            </span>
                            {errors.phone && (
                                <span>
                                    {errors.phone.message}
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
                    <Button type="submit">S'inscrire</Button>
                    <div className="mt-2">
                        <span className="text-[#7D7D7D] italic">Vous avez déjà un compte ?</span>
                        <CtaLink onClick={navigateToLogin}>
                            Connectez-vous ici !
                        </CtaLink>
                    </div>
                </form>
            </div>
            <div className="image-login">
                <Logo
                    className="h-screen w-[1000px] object-cover"
                    src={backgroundLogin}
                    alt="l'icon de la connexion"
                />
            </div>
        </div>
    );
}

export default RegisterComponent;