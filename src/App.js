import React from 'react'
import CategoryList from "./containers/CategoryList";
import CreateCategory from "./containers/CreateCategory";
import AnswerList from "./containers/AnswerList";
import CreateAnswer from "./containers/CreateAnswer";

function App() {
  return (
    <div className="App">
      <CreateCategory />
      <CategoryList />
      <CreateAnswer/>
      <AnswerList/>
    </div>
  );
}

export default App;
