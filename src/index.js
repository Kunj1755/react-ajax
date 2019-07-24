import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Blog from "./containers/Blog/Blog";
import * as serviceWorker from "./serviceWorker";
import axios from "../node_modules/axios";

// global config for all the requests
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

// this interceptors object will be shared across all files in the project
// it will intercept all the http request in the application
axios.interceptors.request.use(
  request => {
    console.log(request);
    // You can also Edit request config here
    /* You need to always return the request config from the interceptor,
    otherwise you are blocking the request
    */
    return request;
  },
  error => {
    // error function will handle all the errors
    console.log(error);
    /* We need to return this error so that we forward it to the request
    made in the component and handle in the catch method
    */
    return Promise.reject(error);
  }
);

// To handle responses
axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<Blog />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
