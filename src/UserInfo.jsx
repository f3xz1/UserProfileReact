import React from "react";

//Uncaught Error: Objects are not valid as a React child (found: object with keys {Username, Age, Profession, setProfession, FavBook, setFavBook}). If you meant to render a collection of children, use an array instead.
//Ошбика перестала выводиться после того как я добавил {} в условия функции
// function UserInfo(
//   Username,
//   Age,
//   Profession,
//   setProfession,
//   FavBook,
//   setFavBook,
// )

function UserInfo({
  Username,
  Age,
  Profession,
  setProfession,
  FavBook,
  setFavBook,
}) {
  return (
    <div>
      <h1>Username: {Username}</h1>
      <h2>Age:{Age} </h2>
      <div>
        <h2>Profession:{Profession}</h2>
        <button onClick={() => setProfession("Teacher")}>
          Change Profession
        </button>
      </div>
      <div>
        <h2>Favarite Book: {FavBook}</h2>
        <button onClick={() => setFavBook("War And Peace")}>
          Change Favarite Book
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
