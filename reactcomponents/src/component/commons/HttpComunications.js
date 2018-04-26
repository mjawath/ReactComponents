import axios from "axios";
import {BASE_API_URL} from './Constants'

export  function post(url,body,actionOnSuccess,actionOnFailier){    
    axios.post(BASE_API_URL.concat(url),body)
      .then(response=>{
        actionOnSuccess (response)
      })
      .catch(error=>{
        actionOnFailier (error)
      });
}


// const http={};
// http.post = post;

// export default http;