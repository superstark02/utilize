import "./App.css";
import { useSelector } from "react-redux";
import React, {
  useEffect,
  useState
} from "react";
import DisplayList from "./components/DisplayList";
import Pagination from "./components/Pagination";
import login, { logout } from './functions/login'
import './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const userList = useSelector((state) => state.users.value);
  const [cuurentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [user, setUser] = useState(null);

  const inexOfLastPost = cuurentPage * postPerPage;
  const indexOfFirstPost = inexOfLastPost - postPerPage
  const currentPost = userList.slice(indexOfFirstPost, inexOfLastPost)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
      } else {
        setUser(null)
      }
    });
  });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const sign_in = () => {
    setUser(login)
  }

  if (user) {
    return (
      <div>
        <div className="app-bar" >
          <div style={{display:'flex', alignItems:'center', gap:'10px'}} >
            <div>
              <img src={user.photoURL} width="50px"/>
            </div>
            <div>
              <div className="displayName" >
                {user.displayName}
              </div>
              <div>
                {user.email}
              </div>
            </div>
          </div>
          <div>
            <button onClick={logout} >Logout</button>
          </div>
        </div>
        <div>
          <DisplayList userList={currentPost} />
          <Pagination postsPerPage={postPerPage} totalPosts={userList.length} paginate={paginate} />
          <p>
            Note: 
            <ul>
              <li>User can delete data from the list</li>
              <li>User can add new data</li>
              <li>Pagination is used to display the list</li>
              <li>User can login and logout (top right) from her Google account</li>
              <li>To edit data, please enter new data and click the corresponding button to update it. Input box is common for all new data</li>
              <li>For eg. to update email type new email in input and click "Update Email" button</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className="wrap" >
          <button onClick={sign_in} >Login</button>
        </div>
      </div>
    );
  }

}

export default App;
