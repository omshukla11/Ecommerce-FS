import './App.css';
import React from 'react';
import { Navbar, Products, ProductDetail ,Categories, Register, Login, Profile, Verification } from './myComponents';
import { ThemeProvider, Protected, ReverseProtected } from './Hooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const token = JSON.parse(localStorage.getItem('token'))?.token

  // if (!token) {
  //   return (
  //     <ThemeProvider>
  //       <Router>
  //         <Navbar />
  //         <Switch>
  //           <Route exact path="/register/">
  //             <Register />
  //           </Route>
  //           <Route exact path="/">
  //             <Login />
  //           </Route>
  //         </Switch>
  //       </Router>
  //     </ThemeProvider>
  //   );
  // }


  // return (
  //   <ThemeProvider>
  //     <Router>
  //       <Navbar />
  //       <Switch>
  //         <Route exact path="/register/">
  //           <Register />
  //         </Route>
  //         <Route exact path="/login/">
  //           <Login />
  //         </Route>
  //         <Route exact path="/home/">
  //           <Products />
  //         </Route>
  //         <Route exact path="/categories/">
  //           <Categories />
  //         </Route>
  //         <Route exact path="/categories/:subcat/">
  //           <Products />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   </ThemeProvider>
  // );
  return (
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/verify-user/user-id=:token" component={Verification}/>

            <ReverseProtected exact path="/register/" component={Register} />

            <ReverseProtected exact path="/login/" component={Login} />

            <Protected exact path="/" component={Products} token={token} />

            <Protected exact path="/categories/" component={Categories} />

            <Protected exact path="/categories/:subcat/" component={Products} token={token} />

            <Protected exact path="/profile" component={Profile} token={token} />

            <Protected exact path="/proddeets/:id/" component={ProductDetail} token={token} />

          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
