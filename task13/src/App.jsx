import ColorChanger from "./Components/ColorChanger"
import MessageToggle from "./Components/MessageToggle"
import StudentList from "./Components/StudentList";
import StudentScore from "./Components/StudentScore"
import ProductCard from "./Components/ProductCard";
function App() {
    const students = ["Sharath", "Riya", "Karan", "Neha"];
    const products = [
        { name: "Laptop", price: 60000 },
        { name: "Headphones", price: 2000 },
        { name: "Smartwatch", price: 5000 }
    ];
    return (
        <div>
            <ColorChanger />
            <MessageToggle />
            <StudentList names={students} />
            <StudentScore />
            {products.map((item, index) => (
                <ProductCard key={index} name={item.name} price={item.price} />
            ))}
            <ProductCard />

        </div>
    )
}
export default App