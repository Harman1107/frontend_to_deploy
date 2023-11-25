import './App.css';
import {Navbar} from './components/Navbar/Navbar.js'
import {Helmet} from "react-helmet";
import { Home } from './components/Home/Home';
import axios from "axios"
import { useEffect, useState } from 'react';

const backendURL = "http://emptycupbackend-env.eba-mb7wxky5.ap-south-1.elasticbeanstalk.com"

function App() {

  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    const {data} = await axios.get(`${backendURL}/api/v1/users`);
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
      <Navbar/>
      <Home data = {allUsers}/>
    </>
  );
}

export default App;
