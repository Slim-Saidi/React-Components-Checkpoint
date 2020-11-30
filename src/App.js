import './App.css';
import Name from "./Component/Profile/FullName"
import Add from "./Component/Profile/Address"
import Pic from "./Component/Profile/ProfilePhoto"

function App() {
  return (
    <div className="App">
      
      <Pic />
      <Name />
      <Add />

    </div>
  );
}

export default App;
