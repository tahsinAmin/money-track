import { NavLink } from "react-router-dom";

function Layout(props) {

  return (
    <>
      <header className="h-20 border-2 flex justify-center items-center">
        <ul tabIndex={0} className="flex ">
          <NavLink to={"/"} className={({isActive})=> isActive? "bg-blue-300": "bg-gray-100"}>
            <li className="p-4">Income</li>
          </NavLink>
          <NavLink to={"/expense"} className={({isActive})=> isActive? "bg-blue-300": "bg-gray-100"}>
            <li className="p-4">Expense</li>
          </NavLink>
        </ul>
      </header>
      <main>{props.children}</main>
      <footer className="h-20 border-2">All rights reserved.</footer>
    </>
  );
}

export default Layout;
