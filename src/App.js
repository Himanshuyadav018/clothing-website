import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'


import { HomePage } from './pages/homepage/hompage-component'
import ShopPage from './pages/shoppage/shop-component'
import SigninAndSignupPage from './pages/sign-in-page/signin-and-signup-component'
import CheckoutPage from './pages/checkoutpage/checkout-page-component'

import Header from './components/header/header-component'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {

  componentDidMount() {

    const {setCurrentUser} = this.props

    auth.onAuthStateChanged(async (user) => {
      if(user){
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot((snapshot) => {
         setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      }

      setCurrentUser(user)
    })
  }


  render(){
    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={ <HomePage/> }/> 
          <Route path="/shop/*" element={ <ShopPage/> }/>
          <Route path="/signin" element={this.props.currentUser ?
                                        (<Navigate to="/"/>) :
                                        (<SigninAndSignupPage/>)}/>
          <Route path='/checkout' element={ <CheckoutPage/>}/>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
