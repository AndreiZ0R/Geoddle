import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuestsPage from "./pages/QuestsPage/QuestsPage";
import QuestDetailsPage from "./pages/QuestDetailsPage/QuestDetailsPage";
import AddQuestPage from "./pages/AddQuestPage/AddQuestPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/quests" element={<QuestsPage/>}/>
                    <Route path="/quests/:questId" element={<QuestDetailsPage/>}/>
                    <Route path="/postQuest" element={<AddQuestPage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
