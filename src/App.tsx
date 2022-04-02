import { BrowserRouter } from "react-router-dom";

// style
import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button className="test-button">ボタン</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
