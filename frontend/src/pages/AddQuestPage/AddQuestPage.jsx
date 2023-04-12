import styles from "./AddQuestPage.module.scss";
import AppForm from "../../components/AppForm/AppForm";
import Padding from "../../components/Padding/Padding";
import OutlinedButton from "../../components/OutlinedButton/OutlinedButton";
import TextField from "../../components/TextField/TextField";
import variables from "../../styles/variables.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {addQuest, addAnswer, getUserByUsername} from "../../api/RestApi";

export default function AddQuestPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const [questId, setQuestId] = useState(-1);

    useEffect(() => {
        if (location.state != null) {
            setAuthor(location.state);
        }
    });

    const textFields = [
        <TextField label="Title" id="title" type="text" required={true} placeholder="Brief summary"/>,
        <TextField label="Tokens Reward" type="number" placeholder="How much this quest is worth" id="tokens"/>,
        <TextField label="City" type="text" placeholder="Where shall the adventures go?" id="city"/>,
        <TextField label="Description" id="desc" isTextArea={true}
                   placeholder="Describe your quest as precisely as you can"/>,
        <TextField label="Answer" type="text" placeholder="Your quest's answer" required={true} id="answer"/>
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value;
        const tokens = document.querySelector("#tokens").value;
        const city = document.querySelector("#city").value;
        const description = document.querySelector("#desc").value;
        const answer = document.querySelector("#answer").value;

        addQuest(author, title, description, tokens, city).then(quest => {
            setQuestId(quest.id);
        });
        addAnswer(questId, answer);
        navigate("/quests", {state: {fetch: true, username: author}});
    }

    return <div className={styles.wrapper}>
        <AppForm
            textFields={textFields.map(textField =>
                <Padding padding={`${variables.mediumPadding} 0`}>
                    {textField}
                </Padding>)}
            onSubmit={handleSubmit}
            submitButton={
                <Padding padding={variables.mediumPadding}>
                    <OutlinedButton label="Confirm" labelColor={variables.primaryColor}
                                    backgroundColor={variables.secondaryColor}/>
                </Padding>
            }
        >
        </AppForm>
    </div>
}