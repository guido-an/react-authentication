import React, { Component } from "react";
import AuthService from "../services/authService";

export default class Avatar extends Component {
  
  service = new AuthService();

  handleFileUpload = (e) => {
    //e.target.files[0]
    const uploadData = new FormData();
    uploadData.append("avatar", e.target.files[0]);
    this.service.imageUpload(uploadData);
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Private page</h1>
        <form>
          <label>Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={(e) => this.handleFileUpload(e)}
          />
        </form>
      </div>
    );
  }
}
