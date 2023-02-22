import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "./features/__test__/services/testServices";

function App() {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.test);
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ width: 150, height: 50 }}
          title="Hit endpoint"
          onClick={() => {
            // dispatch(SetUserToken("bauroerj0239r9ehugisdjkbgsdkjfbg"));
            // dispatch(getTestServices());
            dispatch(
              fetchSignIn({
                email: "radiant@pondokit.com",
                password: "bismillah123@",
              })
            );
          }}
        >
          Hit endpoint
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current status: <code>{status}</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
