import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // when auth state is changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        //pass in the userAuth object which we got by auth.onAuthStateChanged
        const userRef = await createUserProfileDocument(userAuth);

        //listen to userRef
        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data()); //Data in snapshot i.e email, displayName, createdAt
          // console.log(snapShot); //entire snapshot on document
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            // after setState is finished
            () => console.log(this.state)
          );
        });
      } else {
        //if user logs out
        //if not userAuth then set currentUser to userAuth i.e null
        this.setState(
          { currentUser: userAuth },
          // after setState is finished
          () => console.log(this.state)
        );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
