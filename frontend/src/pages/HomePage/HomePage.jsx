import styles from "./HomePage.module.scss";
import variables from "../../styles/variables.scss"
import logo from "../../assets/logo.png";
import illustration from "../../assets/illustration.jpg";
import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/FilledButton/FilledButton";
import AppForm from "../../components/AppForm/AppForm";
import Padding from "../../components/Padding/Padding";
import {useState} from "react";

export default function HomePage() {
    const states = {login: "login", signup: "signup"};
    const loginText = "Not enrolled? Create an account now";
    const signInText = "Already have an account? Log In";

    const [formState, setFormState] = useState(states.login);

    const loginTextFields = [
        <TextField label="Email" placeholder="Enter your email" type="text" id="email"/>,
        <TextField label="Password" placeholder="Enter your password" type="password" id="passw"/>
    ];

    const signInTextFields = [
        <TextField label="Username" placeholder="Enter your username" type="text" id="username"/>,
        <TextField label="Email" placeholder="Enter your email" type="text" id="email"/>,
        <TextField label="Password" placeholder="Enter your password" type="password" id="passw"/>
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
        }
        //TODO: send to api
    }

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


    return (<div className={styles.wrapper}>

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


    </div>);

}