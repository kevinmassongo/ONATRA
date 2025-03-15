import { useForm } from "react-hook-form";
import '../../styles/login/login.css';
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import logoOnatra from "../../assets/logo-onatra.svg";
import backgroundLogin from "../../assets/background-login.png";
import Logo from "../common/logo";
import { useNavigate } from "react-router-dom";

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
        <div className="box">
            <div className="image-login">
                <Logo style="background" src={backgroundLogin} alt="l'icon de la connexion" />
            </div>
            <div className="login-box">
                <div className="login-box-head">
                    <span>ONATRA RDC</span>
                    <Logo style="logo-onatra" src={logoOnatra} alt="l'icon de la connexion" />
                </div>
                <div className="login-title">
                    <h2>Bienvenue ! <br /> Veuillez vous connecter !</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-box-container">
                        <div className="input-container">
                            <input type="email" name="email" placeholder="Votre email" className="input-global" {...register("email", {
                                required: "Ce champ est obligatoire",
                                minLength: 6,
                                pattern: {
                                    value: /^[a-zA-Z0-9_]/i,
                                    message: "Ce champ n'est pas au bon format",
                                },
                            })} />
                            <span>@gmail.com</span>
                            {errors.email && (
                                <span style={{ color: "red" }}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="input-container">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Votre mot de passe" className="input-global" {...register("password", {
                                required: "Ce champ est obligatoire",
                                minLength: 8,
                                pattern: {
                                    value: /^[a-zA-Z0-9_]/i,
                                    message: "Ce champ n'est pas au bon format",
                                },
                            })} />
                            <span onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                            </span>
                            {errors.password && (
                                <span style={{ color: "red" }}>
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <button alt="Connexion" type="submit" className="submit">
                        <i>C</i>
                        <i>o</i>
                        <i>n</i>
                        <i>n</i>
                        <i>e</i>
                        <i>x</i>
                        <i>i</i>
                        <i>o</i>
                        <i>n</i>
                    </button>
                    <div className="navigateToRegister">
                        <span>Vous n'avez pas de compte ?</span>
                        <span onClick={navigateToRegister}> Inscrivez-vous ici !</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
