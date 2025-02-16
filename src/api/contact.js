import axios from "axios"
import config from "../config/config";
const authToken = localStorage.getItem("authToken");
const addContact=async(data)=>{
const response=await axios.post(`${config.baseApiUrl}/api/contact`,data,{
    headers: {
      Authorization: `Bearer ${authToken}`,
    }}
)
console.log(response)
return response;
}
export {addContact}