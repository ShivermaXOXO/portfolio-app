import React from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';



function App(){
    return (
        <div className="App">
            <CustomCursor />
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;