import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoursorProvider } from '../components/First_div/sixth_div/coursor_reducer.jsx'
import { BrowserRouter } from 'react-router-dom'

import  {AuthProvider} from '../context/auth_context.jsx'
import {Provider} from "react-redux";

import store from "./redux_store/main_store";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
<Provider store={store}>

    <BrowserRouter>

<AuthProvider>



   <CoursorProvider>


        <App />
        
      </CoursorProvider>

      </AuthProvider>
    </BrowserRouter>
</Provider>

  // </StrictMode>
);


// import ReactDOM from "react-dom/client";

// import {
//   BrowserRouter
// } from "react-router-dom";

// import App from "./App";

// ReactDOM.createRoot(
//   document.getElementById("root")
// ).render(

//   <BrowserRouter>

//     <App />

//   </BrowserRouter>
// );