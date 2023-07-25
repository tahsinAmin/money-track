import { BrowserRouter, Route, Routes } from "react-router-dom";
import IncomePage from "./pages/incomePage";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IncomePage/>}/>
          <Route path='/expense' element={<ExpensePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
