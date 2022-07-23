// Root Layout Function(app/layout.js) 
// Master Layout, applies to all app global,
// main can be in individual component page.js, here we pass page components as children

//import Regular



//import Component 
import CryptoContext from '../components/CryptoContext'
import Header from '../components/Header'

const RootLayout = ({ children }) => {
  return (
    <>
    <CryptoContext>
    <Header />
    {children}
    </CryptoContext>
    </>
  )
}

export default RootLayout

