import "./App.css"
import AddPassword from "./components/AddPassword"
import SavedPasswords from "./components/SavedPasswords"

const App = () => (
  <div className="bg">
    <div className="logo-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
      />
    </div>
    <AddPassword />
  </div>
)

export default App
