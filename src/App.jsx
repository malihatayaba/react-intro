
import "./App.css";


import Shop from "./components/Shop";

function App() {
    const shop ={
      name:"flower shop",
      address:"Ranveer street",
      price:"reasonable"
    }
    return(
    <>
    <Shop shop={shop}></Shop>
      </>
    )
}

export default App;
