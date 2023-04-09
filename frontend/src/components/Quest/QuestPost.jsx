import styles from "./Quest.module.scss";
import Quest from "../../models/Quest";
import {useEffect, useState} from "react";
import PlaceIcon from '@mui/icons-material/Place';

export default function QuestPost({quest = null, extraClass}) {
    const [questPost, setQuestPost] = useState();
    useEffect(() => {
        if (quest != null) {
            setQuestPost(new Quest(
                quest.author,
                quest.title,
                quest.description,
                quest.tokensRewards,
                quest.date,
                quest.city));
        }
    }, []);

    return <div className={`${styles.card} ${extraClass}`} onClick={() => {
        //TODO: send to quest details page
    }}>
        <div className={styles.title}>
            {quest.title}
            <span>{quest.author}</span>

            <span className={styles.city}> <PlaceIcon color="error"/>{quest.city}</span>
        </div>

        <div className={styles.hex3}>
            {quest.tokensRewards}
        </div>
    </div>
}