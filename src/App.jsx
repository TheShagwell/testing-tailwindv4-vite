import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <span className="bg-blue-950 text-white p-23">
          Send a message across
        </span>
        <Link to="/send-message" className="text-blue-500 underline">
          Send Message
        </Link>
      </header>
    </div>
  );
}
