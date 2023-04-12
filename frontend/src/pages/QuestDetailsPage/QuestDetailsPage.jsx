import styles from "./QuestDetailsPage.module.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Quest from "../../models/Quest";
import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/FilledButton/FilledButton";
import {getAnswerByQuestId, updateUserTokensByUsername} from "../../api/RestApi";


export default function QuestDetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [quest, setQuest] = useState(Quest.default());
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (location.state != null) {
            setQuest(Quest.fromIterable(Object.values(location.state.quest)));
            setUsername(location.state.currentUser);
        }
    }, [location.state]);

    const handleOnClick = () => {
        const answer = document.querySelector("#answer").value;
        getAnswerByQuestId(quest.id).then(data => {
            if (answer === data['answer']) {
                updateUserTokensByUsername(username, quest.tokensReward).then(res => {
                    navigate("/quests", {state: {fetch: true, username: username}});
                });
            }
        });
    }

    return <div className={styles.wrapper}>
        <div className={styles.questCard}>
            <div className={styles.expanded}>
                <div>Posted by <span
                    className={styles.header}>{quest.author}</span> on {quest.formatDate()}</div>
                <div className={styles.title}>{quest.title}</div>
                <div className={styles.divider}></div>
                <div className={styles.description}>{quest.description}</div>
            </div>


            <div className={`${styles.expanded} ${styles.centered}`}>
                <TextField label="Answer this quest" type="text" id="answer"/>
                <FilledButton label="Try" onClick={handleOnClick}/>
            </div>
        </div>
    </div>
}