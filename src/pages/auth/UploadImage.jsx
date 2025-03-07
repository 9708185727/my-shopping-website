import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";
import { BiLogOut } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";

const Users = ({isProfile,setProfile}) => {
const {user}=useSelector((state)=>state.auth)
const dispatch = useDispatch();
function logout() {
  dispatch(logoutUser());
}
  // const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(`${config.baseApiUrl}/image`) // Backend should have a GET route
//       .then(response => setUsers(response.data))
//       .catch(error => console.error(error));
//   }, []);
// console.log(user)
  return (
//     user.image.replace('./uploads/', ''): This removes the ./uploads/ part of the image path, so you’re left with just the filename (e.g., 1741257605113-download.jpeg).
// The final image URL becomes http://localhost:5000/uploads/1741257605113-download.jpeg.
    <div className={`${isProfile?"hidden":null} bg-slate-400 bg-opacity-80 space-y-1 relative border px-2 py-2 w-36 rounded-lg shadow-lg cursor-pointer flex items-center justify-center flex-col` }>
   <button onClick={()=>setProfile(!isProfile)}> <GiSplitCross className="absolute top-3 right-2" /></button>

   {/* { users.map((user) => (
        <div key={user.id}> 
        <img src={`http://localhost:5000/uploads/${user.image.replace('./uploads/', '')}`} alt={user.name} width="100" />
        </div>
      // ))} */}
   
       <img src={`${config.baseApiUrl}/uploads/${user?._doc.image.replace('./uploads/', '')}`} className="w-10 h-10 rounded-full" alt={user.name} width="100" />
       <h1 className=" text-teal-600 text-md">{user?._doc.name}</h1> 
                <button
                type="button"
                onClick={logout}
                className="text-red-500  text-lg focus:ring-4 focus:outline-none focus:ring-teal-700 font-medium rounded-lg  px-2 py-2 text-center "
              >
                Logout
                <BiLogOut className="inline ml-2" />
              </button>
    </div>
  );
};

export default Users;
