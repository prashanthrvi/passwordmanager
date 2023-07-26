import "./index.css"
import { Component } from "react"
import SavedPasswords from "../SavedPasswords"

class AddPassword extends Component {
  state = {
    website: "",
    username: "",
    password: "",
    userInfo: {},
    pwAdded: false,
  }

  getWebsite = (event) => this.setState({ website: event.target.value })

  getUsername = (event) => this.setState({ username: event.target.value })

  getPassword = (event) => this.setState({ password: event.target.value })

  addPassword = (event) => {
    event.preventDefault()

    const { website, username, password } = this.state

    const addInfo = {
      site: website,
      name: username,
      pw: password,
    }
    this.setState({ userInfo: addInfo, pwAdded: true })
  }

  render() {
    const { userInfo, pwAdded } = this.state
    return (
      <>
        <div className="addpassword-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
          <div className="addpassword-card">
            <h4>Add New Password</h4>
            <form onSubmit={this.addPassword}>
              <div className="align-icon-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icons"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.getWebsite}
                />
              </div>
              <div className="align-icon-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icons"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.getUsername}
                />
              </div>
              <div className="align-icon-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icons"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  onChange={this.getPassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
        <SavedPasswords pwAdded={pwAdded} />
      </>
    )
  }
}

export default AddPassword
