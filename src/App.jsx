import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";

const useStyles = makeStyles(theme => ({

}));

const App = () => {
  const classes = useStyles();

  return (
      <div>
        <Navbar/>
      </div>
  );
};

export default App;