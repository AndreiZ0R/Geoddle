import styles from "./QuestDetailsPage.module.scss";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Quest from "../../models/Quest";

export default function QuestDetailsPage() {
    const location = useLocation();
    // const {questId} = useParams();
    const [quest, setQuest] = useState({});

    useEffect(() => {
        if (location.state != null) {
            setQuest(Quest.fromIterable(Object.values(location.state)));
            console.log(quest);
        }
    }, [location.state]);

    return <div>Quest id: {quest.id}</div>
}