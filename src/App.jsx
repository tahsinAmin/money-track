import { BrowserRouter, Route, Routes } from "react-router-dom";
import IncomePage from "./pages/incomePage";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <div className="bg-slate-700 text-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IncomePage/>}/>
          <Route path='/expense' element={<ExpensePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
