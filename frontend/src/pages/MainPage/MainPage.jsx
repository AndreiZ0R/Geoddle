import styles from "./MainPage.module.scss"
import variables from "../../styles/variables.scss";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import OutlinedButton from "../../components/OutlinedButton/OutlinedButton";
import QuestPost from "../../components/Quest/QuestPost";
import User from "../../models/User";
import Quest from "../../models/Quest";
import Padding from "../../components/Padding/Padding";

export default function MainPage() {
    const [user, setUser] = useState(User.default());
    const location = useLocation();

    const quests = [
        new Quest('author', 'Title', 'Description', 5, Date.now(), "Cluj-Napoca"),
        new Quest('johncena2', 'gagfgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'eeemacarena', 5, Date.now(), "Cluj-Napoca"),
        new Quest('johncena3', 'foobar', 'eeemacarena', 7, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena4', 'foobar', 'eeemacarena', 10, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena5', 'foobar', 'eeemacarena', 2, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena61', 'foobar', 'eeemacarena', 20, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena61', 'foobar', 'eeemacarena', 2, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena61', 'foobar', 'eeemacarena', 1, Date.now(), 'Cluj-Napoca'),
        new Quest('johncena61', 'foobar', 'eeemacarena', 15, Date.now(), 'Cluj-Napoca')
    ];

    useEffect(() => {
        const recUser = location.state;
        setUser(new User(recUser.username, recUser.email))
    }, []);

    return <div className={styles.wrapper}>
        <nav>
            <span>{user['username']}</span>
            <OutlinedButton label="Log Out" labelColor={variables.secondaryColor}
                            backgroundColor={variables.primaryColor}/>
        </nav>
        <span className={styles.header}>Available Quests:</span>
        <div className={styles.quests}>
            {quests.map(quest =>
                <Padding padding={`${variables.mediumPadding} 0`}>
                    <QuestPost quest={quest} extraClass={styles.fader}/>
                </Padding>
            )}
        </div>
    </div>
}