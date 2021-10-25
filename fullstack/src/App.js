/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Image } from "./components/Image";
import { useEffect, useState } from "react";
import { CreateUser } from "./components/CreateUser";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [apodData, setApodData] = useState();
  const [registerModalActive, setRegisterModalActive] = useState(false);

  const fetchItems = async () => {
    const data = await fetch(
      nasaEndpoint + "planetary/apod?api_key=" + nasaApiKey
    );
    const dataJSON = await data.json();
    console.log(dataJSON);
    setApodData(dataJSON);
  };

  return (
    <div className="App">
      <Navbar openRegistrationModal={setRegisterModalActive} />
      {registerModalActive && (
        <CreateUser
          active={registerModalActive}
          setActive={setRegisterModalActive}
        />
      )}
      {apodData && <Image source={apodData.url} />}
    </div>
  );
}

export default App;
