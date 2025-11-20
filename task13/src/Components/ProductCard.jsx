// ProductCard.jsx

function ProductCard({ name, price }) {
    const cardStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        width: "250px"
    };

    return (
        <div style={cardStyle}>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </div>
    );
}

export default ProductCard;
