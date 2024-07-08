import React from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App(){
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;