import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Votes() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            fetch(`http://localhost:8080/viewform?id=${url}`)
                .then((response) => response.json())
                .then((data) => {
                    setQuestion(data.question.question);
                    setOptions([...data?.question.options]);
                })
        }
    }, [url]);

    return (
        <div className="main">
            <h1>Анкети</h1>
            <div class="viewquestion">
                <strong>{question}</strong>
            </div>
            {options.map((option, i) => (
                <div key={i} className="viewpoints">
                    <span>
                        {option.quest_option} - <strong>{option.votes}</strong>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Votes;
