import styles from "./QuestsPage.module.scss"
import variables from "../../styles/variables.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import OutlinedButton from "../../components/OutlinedButton/OutlinedButton";
import QuestCard from "../../components/QuestCard/QuestCard";
import User from "../../models/User";
import Quest from "../../models/Quest";
import Padding from "../../components/Padding/Padding";
import AddIcon from '@mui/icons-material/Add';
import {getQuests, getUserByUsername} from "../../api/RestApi";

export default function QuestsPage(props) {
    const [user, setUser] = useState({});
    const location = useLocation();
    const [quests, setQuests] = useState([]);
    const navigate = useNavigate();

    const fetchQuests = () => {
        getQuests().then(recQuests => {
            const questsArr = recQuests.map((quest, idx) => Quest.fromIterable(Object.values(quest)));
            setQuests(questsArr);
        });
    }

    useEffect(() => {
        fetchQuests();

        if (location.state != null) {
            if (location.state['fetch'] === true) {
                getUserByUsername(location.state['username']).then(user => {
                    setUser(User.fromIterable(Object.values(user)));
                })
            } else {
                setUser(User.fromIterable(Object.values(location.state['user'])));
            }
        }
    }, [location.state]);

    return <div className={styles.wrapper}>
        <nav>
            <span>{user.username}<span>@Geoddle</span></span>
            <div className={styles.hex3}>{user.tokens}</div>
            <OutlinedButton label="Profile" labelColor={variables.secondaryColor}
                            backgroundColor={variables.primaryColor}/>
        </nav>
        <section>
            <div>Available Quests</div>
            <div onClick={() => {
                navigate("/postQuest", {state: user.username});
            }}>
                <AddIcon/>
            </div>
        </section>
        <div className={styles.quests}>
            {quests.map(quest =>
                <Padding padding={`${variables.mediumPadding} 0`}>
                    <QuestCard quest={quest} extraClass={styles.fader} currentUser={user.username}/>
                </Padding>
            )}
        </div>
    </div>
}