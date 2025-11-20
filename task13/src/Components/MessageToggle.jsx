import { useState } from "react";

function MessageToggle() {
    const [show, setShow] = useState(true);

    const toggleMessage = () => {
        setShow(prev => !prev);
    };

    return (
        <div>
            <button onClick={toggleMessage}>Show / Hide Message</button>

            {show && <p>Welcome to React Hooks!</p>}
        </div>
    );
}

export default MessageToggle;
