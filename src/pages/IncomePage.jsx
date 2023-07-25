import { useState } from "react";
import Layout from "../Layout/Layout";

function IncomePage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function addMoney() {
    if (text && amount) {
      setList([...list, { text: text, amount: parseInt(amount) }]);
      setTotal(parseInt(total) + parseInt(amount));
      setText("");
      setAmount(0);
    }
  }
  return (
    <>
      <Layout>
        <form>
          <label>Name:</label><br />
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded-lg border-2 border-b-slate-500"
            value={text}
            required
          />
          <br />
          <label>Amount</label><br />
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 rounded-lg border-2 border-b-slate-500"
            value={amount}
            required
          /><br />
          <button
            className="p-2 text-blue-500 border-2 border-b-slate-500"
            onClick={addMoney}
          >
            Submit
          </button>
        </form>
        <h1 className="text-3xl font-bold underline">Your Income</h1>
        {list.length > 0 ? (
          <ul className="w-40 border-b-2 border-gray-800">
            {list.map((element, index) => {
              return (
                <li key={index} className="py-3 sm:py-4 flex justify-between">
                  <span className="font-semibold">{element.text}</span> -{" "}
                  <span>{element.amount}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}

        <div className="w-40">
          <div className="py-3 sm:py-4 flex justify-between">
            <span className="font-semibold">Total</span> - <span>{total}</span>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IncomePage;
