import styles from "./HomePage.module.scss";
import variables from "../../styles/variables.scss"
import logo from "../../assets/logo.png";
import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/FilledButton/FilledButton";
import AppForm from "../../components/AppForm/AppForm";
import Padding from "../../components/Padding/Padding";

export default function HomePage() {

    const textFields = [
        <TextField label="Email" placeholder="Enter your email" type="text" id="email"/>,
        <TextField label="Password" placeholder="Enter your password" type="password" id="passw"/>];

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#passw").value;
        //TODO: sent to api
    }

    return (<div className={styles.wrapper}>
        <div className={styles.mainCard}>

            <img src={logo} alt="geoddle" className={styles.logo}/>

            <AppForm
                onSubmit={handleSubmit}
                submitButton={
                    <Padding padding={variables.mediumPadding}>
                        <FilledButton label="Sign Up"/>
                    </Padding>}
                textFields={textFields.map(textField => <Padding
                    padding={`${variables.mediumPadding} 0`}>{textField}</Padding>)
                }/>
            <Padding padding={variables.mediumPadding}>
                <button className={styles.switchForm}>Already have an account? Log In</button>
            </Padding>
        </div>
    </div>);

}