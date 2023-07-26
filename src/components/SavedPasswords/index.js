import "./index.css"
import { Component } from "react"

class SavedPasswords extends Component {
  {pwAdded} = this.props

  renderNoPassword() {
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="nopasswords-img"
        />
        <h3>No Passwords</h3>
      </>
    )
  }

  renderAddedPassword() {
    return (
      <ul className="password-container-ul">
        <li className="password-lists-li">
          <div className="icon-bg">
            <h3>Y</h3>
          </div>
          <div className="name-pw-card">
            <p className="website-text">youtube.com</p>
            <p className="name-text">rahul</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-icon"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </li>
      </ul>
    )
  }

  render() {
    const { pwAdded } = this.state
    return (
      <div className="savedpasswords-container">
        <div className="topsection-card">
          <div className="password-count-card">
            <h5>Your Passwords</h5>
            <h5 className="count">0</h5>
          </div>
          <div className="align-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="showpasswords-card">
          <input type="checkbox" id="checkbox-id" />
          <label for="checkbox-id">Show Passwords</label>
        </div>

        {pwAdded && this.renderAddedPassword()}
        {!pwAdded && this.renderNoPassword()}
      </div>
    )
  }
}

export default SavedPasswords
