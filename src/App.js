import "./App.css";
import { useState } from "react";
import UserInfo from "./UserInfo";
function App() {
  let [Profession, setProfession] = useState("Profession:Fullstack programmer");
  let [FavBook, setFavBook] = useState("Dokkodo");

  return (
    <div className="App">
      <UserInfo
        Username="f3xz1"
        Age={18}
        Profession={Profession}
        setProfession={setProfession}
        FavBook={FavBook}
        setFavBook={setFavBook}
      ></UserInfo>
    </div>
  );
}

export default App;
