import React from "react";
import NavBar from "./Components/Navigation/NavigationBarItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };
  }
  componentDidMount() {
    this.initializeAuth();
  }

  initializeAuth() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "950185757331-9c21c5bjk7efairfiimp9ekdsvqte2t8.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance();
          this.setState({ signedIn: this.GoogleAuth.isSignedIn.get() });
          this.GoogleAuth.isSignedIn.listen(() => {
            this.changeIsSignedIn(this.GoogleAuth.isSignedIn.get());
          });
          console.log(this.GoogleAuth);
          console.log("signedIn at App : " + this.state.signedIn);
        });
    });
  }

  state = { signedIn: null };
  GoogleAuth = {};

  changeIsSignedIn(value) {
    this.setState({ signedIn: value });
  }

  onSignIn = () => {
    console.log("im signing in from the child");
    this.GoogleAuth.signIn();
  };
  onSignOut = () => {
    this.GoogleAuth.signOut();
  };

  render() {
    return (
      <div>
        <NavBar
          signedIn={this.state.signedIn}
          onSignIn={this.onSignIn}
          onSignOut={this.onSignOut}
        />
      </div>
    );
  }
}
