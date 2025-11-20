
function StudentList({ names }) {
    return (
        <ul>
            {names.map((student, index) => (
                <li key={index}>{student}</li>
            ))}
        </ul>
    );
}

export default StudentList;
