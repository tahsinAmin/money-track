import { useState } from "react";
import Layout from "../Layout/Layout";

function IncomePage() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function addMoney(e) {
    // e.preventDefault();
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
        <div className="h-full flex justify-center bg-cover bg-center income-banner-bg">
          <div className="mt-20">
            <form className="mb-20">
              <label>Name:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                className="text-gray-800 p-2 rounded-lg border-2 border-b-slate-500"
                value={text}
                required
              />
              <br />
              <label>Amount</label>
              <br />
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                className="text-gray-800 p-2 rounded-lg border-2 border-b-slate-500"
                value={amount}
                required
              />
              <br />
              <br />
              <button
                className="w-full rounded-lg text-gray-100 p-2 bg-blue-500 border-2"
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
                    <li
                      key={index}
                      className="py-3 sm:py-4 flex justify-between"
                    >
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
              <div className="py-3 sm:py-4 flex justify-between font-bold">
                <span className="">Total</span> = <span>{total}</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IncomePage;
