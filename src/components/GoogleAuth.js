import React, { Component } from "react";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "248239315370-7badboorgao7c2f7ju6dd9e5s8vlmtlt.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div></div>;
  }
}

export default GoogleAuth;
