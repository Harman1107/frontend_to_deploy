import './App.css';
import {Navbar} from './components/Navbar/Navbar.js'
import {Helmet} from "react-helmet";
import { Home } from './components/Home/Home';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from "axios"
import { useEffect, useState } from 'react';

const backendURL = "https://backendemptycup-production.up.railway.app"

function App() {

  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const {data} = await axios.get(`${backendURL}/api/v1/users`).catch((err) => {
      NotificationManager.error(`${err}`);
    });
    return data.users
    // console.log(data.users);
  }

  useEffect(()=>{

    const setFun = async () => {
      setAllUsers(await fetchAllUsers());
    }

    setFun();
  },[])

  console.log(allUsers);

  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>EmptyCup</title>
            </Helmet>
            <NotificationContainer/>
      <Navbar/>
      <Home data = {allUsers}/>
    </>
  );
}

export default App;
