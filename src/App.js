
import { BrowserRouter, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import ViewCourse from "./components/ViewCourse";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />

      <Route path="/" exact component={AddCourse} />
      <Route path="/view" exact component={ViewCourse} />
      </BrowserRouter>
    </div>
  );
}

export default App;
