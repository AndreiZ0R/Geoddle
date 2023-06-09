import styles from "./QuestCard.module.scss";
import PlaceIcon from '@mui/icons-material/Place';
import {useNavigate} from "react-router-dom";

export default function QuestCard({quest = null, extraClass, currentUser}) {
    const navigate = useNavigate();

    return <div className={`${styles.card} ${extraClass}`} onClick={() => {

        navigate(`/quests/${quest.id}`, {state: {quest: quest, currentUser: currentUser}});
    }}>
        <div className={styles.title}>
            {quest.title}
            <span>{quest.author}</span>

            <span className={styles.city}> <PlaceIcon color="error"/>{quest.city}</span>
        </div>

        <div className={styles.hex3}>
            {quest.tokensReward}
        </div>
    </div>
}