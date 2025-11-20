

function StudentScore({ name, score }) {
    const textColor = score >= 50 ? "green" : "red";

    return (
        <h3 style={{ color: textColor }}>
            {name} — {score} {score >= 50 ? "✅" : "❌"}
        </h3>
    );
}

export default StudentScore;
