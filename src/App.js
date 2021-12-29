import "./App.css";
import TextInput from "./components/TextInput";
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>All Components</h1>
      <div className="main-container">
        <TextInput label="שם שדה לפני הקלדה" />
      </div>
    </div>
  );
}

export default App;
