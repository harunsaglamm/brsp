import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";



import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function İndex(){
  return(
    <div className="İndex">
    {
      Records.map(record=>{
        return(
        <div className="box" key={record.id}>
          <strong>{record.name}</strong>
          
        </div>
        )
      }

      )
    }

     
    </div> 

  )
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);