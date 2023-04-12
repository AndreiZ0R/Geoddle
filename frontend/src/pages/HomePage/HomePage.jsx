import styles from "./HomePage.module.scss";
import variables from "../../styles/variables.scss"
import logo from "../../assets/logo.png";
import illustration from "../../assets/illustration.jpg";
import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/FilledButton/FilledButton";
import AppForm from "../../components/AppForm/AppForm";
import Padding from "../../components/Padding/Padding";
import {forwardRef, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {logInUser, signUpUser} from "../../api/RestApi";
import {Snackbar, Alert} from '@mui/material';


export default function HomePage() {
    const states = {login: "login", signup: "signup"};
    const loginText = "Not enrolled? Create an account now";
    const signInText = "Already have an account? Log In";

    const navigate = useNavigate();
    const [formState, setFormState] = useState(states.login);
    const [user, setUser] = useState(null);

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMsg, setSnackMsg] = useState("");

    const loginTextFields = [
        <TextField label="Email" placeholder="Enter your email" type="text" id="email"/>,
        <TextField label="Password" placeholder="Enter your password" type="password" id="passw" required={true}/>
    ];

    const signInTextFields = [
        <TextField label="Username" placeholder="Enter your username" type="text" id="username"/>,
        <TextField label="Email" placeholder="Enter your email" type="text" id="email"/>,
        <TextField label="Password" placeholder="Enter your password" type="password" id="passw" required={true}/>
    ];

    const handleFormState = () => {
        setFormState(formState === states.login ? states.signup : states.login);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#passw").value;

        if (formState === states.signup) {
            const username = document.querySelector("#username").value;
            signUpUser(email, password, username).then(data => {
                if (data === null) {
                    setSnackOpen(true);
                    setSnackMsg("Error signin up. Please try again!");
                } else {
                    setUser(data);
                }
            });
        } else {
            logInUser(email, password).then(data => {
                if (data === null) {
                    setSnackOpen(true);
                    setSnackMsg("Invalid email/password!");
                } else {
                    setUser(data);
                }
            });
        }
    }

    useEffect(() => {
        if (user !== null) {
            navigate("/quests", {state: user});
        }
    }, [user]);


    const loginForm = <AppForm
        onSubmit={handleSubmit}
        submitButton={
            <Padding padding={variables.mediumPadding}>
                <FilledButton label="Log In"/>
            </Padding>}
        textFields={loginTextFields.map(textField =>
            <Padding
                padding={`${variables.mediumPadding} 0`}>{textField}
            </Padding>)
        }/>;

    const signupForm = <AppForm
        onSubmit={handleSubmit}
        submitButton={
            <Padding padding={variables.mediumPadding}>
                <FilledButton label="Sign Up"/>
            </Padding>}
        textFields={signInTextFields.map(textField =>
            <Padding
                padding={`${variables.mediumPadding} 0`}>{textField}
            </Padding>)
        }/>;


    return (
        <div className={styles.wrapper}>
            <Snackbar autoHideDuration={2000} open={snackOpen} onClose={(e?, r?) => {
                setSnackOpen(false);
            }}
                      message={snackMsg}
            />
            <div className={styles.mainCard}>
                <div className={styles.half1}>
                    <img src={illustration} alt="explore" className={styles.illustr}/>
                </div>
                <div className={styles.half2}>
                    <img src={logo} alt="geoddle" className={styles.logo}/>

                    {formState === states.login ? loginForm : signupForm}
                    <Padding padding={variables.mediumPadding}>
                        <button onClick={handleFormState}
                                className={styles.switchForm}>{formState === states.login ? loginText : signInText}
                        </button>
                    </Padding>
                </div>

            </div>


        </div>
    );

}