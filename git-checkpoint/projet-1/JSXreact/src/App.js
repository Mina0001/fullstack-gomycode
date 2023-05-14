import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePhoto from "./components/ProfilePhoto.js";
import FullName from "./components/FullName.js";
import Address from "./components/Address.js";

function App() {
  return (
    <div className="section">
      <div className="row align-items-center gx-5 pt-5">
        <div className="col">
          <ProfilePhoto />
        </div>
        <div className="col">
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
