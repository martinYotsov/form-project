import { useState } from "react";

function Home() {
    const [question, setQuestion] = useState("");
    const [formId, setFormId] = useState("");
    const [options, setOptions] = useState([]);

    const submit = async () => {
        await fetch("http://localhost:8080/createform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: {
                    question: question,
                    options: options.map((option) => ({ quest_option: option })),
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setFormId(data.id);
            })
            .catch();
    };

    return (
        <div className="main">
            <h1>Създай Анкета</h1>
            <div className="container">
                <h3>Въпрос</h3>
                <input
                    className="pole"
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Въпрос"
                />
            </div>
            {options.map((option, i) => (
                <div key={i} className="container">
                    <span id="option">Опция {i + 1}</span>
                    <input
                        value={option}
                        className="pole"
                        onChange={(e) => {
                            const temp = options;
                            temp[i] = e.target.value;
                            setOptions([...temp]);
                        }}
                        placeholder={`Опция ${i + 1}`}
                    />
                </div>
            ))}
            <div>
                <button
                    onClick={() => {
                        const temp = options;
                        temp.push("");
                        setOptions([...temp]);
                    }}
                >
                    Добави опция
                </button>
                <button id="submit" onClick={submit}>
                    Изпрати
                </button>
            </div>
            {formId && (
                <div class="links">
                    <a
                        class="link"
                        href={`http://localhost:3000/votes/${formId}`}
                    >
                        Резултати: http://localhost:3000/votes/{formId}
                    </a>
                    <br />
                    <br />
                    <a
                        class="link"
                        href={`http://localhost:3000/vote/${formId}`}
                    >
                        Въпроси: http://localhost:3000/vote/{formId}
                    </a>
                </div>
            )}
        </div>
    );
}

export default Home;
