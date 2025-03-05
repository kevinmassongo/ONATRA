import { useForm } from "react-hook-form";
import '../../styles/login/login.css'
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import iconLogin from "../../assets/logo.png"
import Logo from "../common/logo";


function LoginComponent() {

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        pseudo: "",
        password: ""
    })

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData })

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="box">
                    <div className="login-box">
                        <div className="login-title">Connexion</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login-box-container">
                                <div className="input-container">
                                    <input type="text" name='pseudo' placeholder="Entrez votre pseudo" className="input-global" {...register("pseudo", {
                                        required: "Ce champ est obligatoire",
                                        minLength: 6,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_]/i,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span>kevin1182_NJ</span>
                                    {errors.pseudo && (
                                        <span style={{ color: "red" }}>
                                            {errors.pseudo.message}
                                        </span>
                                    )}
                                </div>
                                <div className="input-container">
                                    <input type={showPassword ? "text" : "password"} name='password' placeholder="Entrez votre mot de passe" className="input-global" {...register("password", {
                                        required: "Ce champ est obligatoire",
                                        minLength: 8,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_]/i,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span onClick={togglePasswordVisibility}>
                                        {
                                            showPassword ? (
                                                <FaRegEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                    {errors.password && (
                                        <span style={{ color: "red" }}>
                                            {errors.password.message}
                                        </span>
                                    )}
                                </div>  </div>
                            <button alt="Connexion" type='submit' className="submit">
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
                        </form>
                    </div>
                    <div className="image-login">
                        <div className="onatra-title">ONATRA S.A</div>
                        <Logo src={iconLogin} alt="l'icon de la connexion" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;