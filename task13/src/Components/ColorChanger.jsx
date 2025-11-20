
import { useState } from "react";

function ColorChanger() {
    const [color, setColor] = useState("blue");

    const changeColor = () => {
        setColor(prev => (prev === "blue" ? "red" : "blue"));
    };

    return (
        <div>
            <h2 style={{ color: color }}>
                My favorite color is {color} {color === "blue" ? "💙" : "❤️"}
            </h2>

            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default ColorChanger;
