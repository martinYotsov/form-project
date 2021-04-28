import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Vote() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [optionId, setOptionId] = useState();
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

    async function submit() {
        await fetch(`http://localhost:8080/votequestion?id=${optionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <div className="main">
            <h1>Анкета</h1>
            <div className="viewconteiner">
                <strong>{question}</strong>
            </div>
            {options.map((option, i) => (
                <div key={i} className="viewcontainer">
                    <label>
                        {option.quest_option}
                        <input
                            className="radios"
                            onChange={(e) => setOptionId(e.target.value)}
                            type="radio"
                            value={option.id}
                            name="question"
                        />
                    </label>
                </div>
            ))}
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Vote;
