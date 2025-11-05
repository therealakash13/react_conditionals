import Form from "./Form";

function App() {
  let isLoggedIn = false;
  return (
    <div className="container"> <Form userState={isLoggedIn} /> </div>
  );
}

export default App;
