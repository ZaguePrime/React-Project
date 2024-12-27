import Alert from "./components/Alert";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        <h1>Hello world</h1>
      </Alert>
    </div>
  );
}

export default App;
