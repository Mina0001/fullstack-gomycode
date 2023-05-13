import "bootstrap/dist/css/bootstrap.css";
import Menu from "./components/Menu";
import Leftside from "./components/leftside";
import Rightside from "./components/Rightside";
import "./style.css";
function App() {
  return (
    <>
      <Menu />
      <div className="landing">
        <Leftside />
        <Rightside />
      </div>
    </>
  );
}
export default App;
