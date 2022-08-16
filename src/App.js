import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from './Charts';
import Edit from './Edit';
import './App.css';

function App({ loadChart }) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Charts loadChart={loadChart} />} />
      {/* <Route path="/" element={<Edit loadChart={loadChart} />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
