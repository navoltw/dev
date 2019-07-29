import React from 'react';
import Navbar from './Navbar'
import Main from './Main';
import Footer from './Footer';
import './styles.css'
// function App () {
//   return(
//     <div>Hello World</div>
//   )
// }

//         or

const App = () => {
  return(
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App

