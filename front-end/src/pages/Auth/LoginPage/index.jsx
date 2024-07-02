import React, { useState } from "react";
import "./style.css";
// var facebook_logo = require("../../../assets/images/facebook-logo.png");
// var google_logo = require("../../../assets/images/google-logo.png");
import { useDispatch } from 'react-redux';


export const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [isSwitch, setIsSwitch] = useState(false);
    const changeForm = (e) => {
        e.preventDefault();
        setIsSignUp(!isSignUp);
        setIsSwitch(true);

        // setTimeout(() => {
        //     setIsSwitch(false);
        // }, 1500);
    };
    

    const dispatch = useDispatch(); 
    // const isFetching = useSelector((state: RootState) => state.auth.login.isFetching);

    // const singInForm = useFormik({
    //     initialValues: {
    //         username: "",
    //         password: "",
    //     },
    //     validationSchema: Yup.object({
    //         username: usernameSchema,
    //         password: passwordSchema,
    //     }),
    //     onSubmit: async (values) => {
    //         loginUser(values, dispatch, navigate);
    //     },
    // });

    // const singUpForm = useFormik({
    //     initialValues: {
    //         username: "",
    //         displayName: "",
    //         password: "",
    //         confirmPassword: "",
    //     },
    //     validationSchema: Yup.object({
    //         username: usernameSchema,
    //         displayName: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
    //         password: passwordSchema,
    //         confirmPassword: Yup.string()
    //             .required("Required")
    //             .oneOf([Yup.ref("password"), ""], "passwords must match"),
    //     }),
    //     onSubmit: async (values) => {
    //         // await registerUser(values, dispatch, navigate);
    //     },
    // });
    return (
        <div className="login-page"  >
            <div className="main-login-page">
                <div className={`a-container ${isSwitch && "is-txl is-z200"}`}>
                    <form className="form" id="a-form">
                        <h2 className="form_title title">Create Account</h2>
                        <span className="form__span">or use email for registration</span>
                        <input className="form__input" name="username" type="text" placeholder="Name" />
                        <input className="form__input email" name="email" type="text" placeholder="Email" />
                        <input
                            className="form__input password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <small className="message text-danger pt-1"></small>
                        <button className="form__button button submit" type="submit">SIGN UP</button>
                    </form>
                </div>
                <div className={`b-container ${isSwitch && "is-txl"}`}>
                    <form className="form" method="POST" action="auth/sign-in">
                        <h2 className="form_title title">Sign in to Website</h2>
                        <div className="form__icons">
                            <div className="form__icon">
                                {/* <img className="poiter" alt="img" src={facebook_logo} /> */}
                                <box-icon name='facebook-square' type='logo' ></box-icon>
                            </div>
                            <div className="form__icon">
                                {/* <img className="poiter" alt="img" src={google_logo} /> */}
                                <box-icon type='logo' name='google'></box-icon>
                            </div>
                        </div>
                        <span className="form__span">or use your email account</span>
                        <input className="form__input" name="username" type="text" placeholder="email" />
                        <small className="message text-danger"></small>
                        <input className="form__input" name="password" type="password" placeholder="Password" />
                        <a href="/forgotPassword" className="form__link">
                            Forgot your password?
                        </a>
                        <button className="form__button button submit" id="sign-in">
                            SIGN IN
                        </button>
                    </form>
                </div>
                <div className={isSwitch ? "switch is-gx is-txr" : "switch"} id="switch-cnt">
                    <div className={`switch__circle ${isSwitch && "is-txr"}`}></div>
                    <div className={`switch__circle switch__circle--t ${isSwitch && "is-txr"}`}></div>
                    <div className={`switch__container ${isSwitch && "is-hidden"}`} id="switch-c1">
                        <h2 className="switch__title title">Welcome Back !</h2>
                        <p className="switch__description description">
                            To keep connected with us please login with your personal info
                        </p>
                        <button onClick={changeForm} className="switch__button button switch-btn">
                            SIGN UP
                        </button>
                    </div>
                    <div className={`switch__container ${!isSwitch && "is-hidden"}`} id="switch-c2">
                        <h2 className="switch__title title">Hello Friend !</h2>
                        <p className="switch__description description">
                            Enter your personal details and start journey with us
                        </p>
                        <button onClick={changeForm} className="switch__button button switch-btn">
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
