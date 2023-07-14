import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './redux/store.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDso0BNPU_hMnBWXt0PxzVZqBNYTGzN44Y",
  authDomain: "adm-canela.firebaseapp.com",
  projectId: "adm-canela",
  storageBucket: "adm-canela.appspot.com",
  messagingSenderId: "433325022922",
  appId: "1:433325022922:web:ffadd766b4aba7fc495e33",
  measurementId: "G-WT70GGX8NP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
