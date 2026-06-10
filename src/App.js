
import Footer from './components/Footer';
import Nav from './components/Nav';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from './data';
import BookInfo from './pages/BooksInfo';
import { Link } from "react-router-dom";

function App() {
  return (
  <Router>  
     <div className="App">
    <Nav />  
    <Route path="/" exact component={Home} />
    <Route path="/Books" render={() =>  <Books books={books} />} />
    <Route path="/Books/1" render={() => <BookInfo books={books} />} />
    <Footer />
    </div>
   </Router> 
  );
}

export default App;
