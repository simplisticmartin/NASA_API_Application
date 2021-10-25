import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

import axios from "axios";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      <img src="https://apod.nasa.gov/apod/image/2110/MonumentValleyRoad_Abramyan_960.jpg" />
      <div
        onClick={() => {
          const newperson = {
            person_name: "ian",
            person_position: "ceo",
            person_level: "95",
            person_rating: "",
          };

          axios
            .post("http://localhost:5000/record/add", newperson)
            .then((res) => console.log(res.data));
        }}
      >
        like
      </div>
    </div>
  );
};

export default App;
