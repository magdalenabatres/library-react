

  import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes,faBolt,faBookOpen, faTags,faStar} from '@fortawesome/free-solid-svg-icons';
import './index.css';




library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen,faTags,faStar);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
     <BrowserRouter>
           <App />
    </BrowserRouter>
  </React.StrictMode>
  
);

reportWebVitals();

