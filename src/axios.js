import axios from "../../../node_modules/axios";

// creates an instance of axios object
// you can create multiple such instances n multiple files
// Pass javascript object to configure it
const instance = axios.create({
  baseURl: "https://jsonplaceholder.typicode.com"
});

/* this will override default configuration
 in index.js for all the request sent using this instance
 */
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// you can also add interceptors to this instance (just like default axios object)
// instance.interceptors.request.......

// To use it in other files
export default instance;
