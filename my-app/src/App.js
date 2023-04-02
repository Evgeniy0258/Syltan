import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main/main";
import Footer from "./components/Footer";
import "./components/styles/style.scss"
import { initialData } from "./components/JsonApi";

// import { useDispatch, useSelector } from "react-redux";


function App() {
  // const [card, setCard] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)
  // const [cardPerPage] = useState(10)

  // useEffect(() => {
  //   initialData
  //   console.log([initialData])
  // })

  return (

    <div className="App">

      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
