
import Header from './assets/Components.jsx/Header.jsx'
import Hero from './assets/Components.jsx/Hero.jsx'
import Feature from './assets/Components.jsx/Features.jsx'
import Testimonial from './assets/Components.jsx/Testimonial.jsx'
import Footer from './assets/Components.jsx/Footer.jsx'


function App() {

  const user = {
    islogin : true,
  }

  return (
    <>
{/* Header Section */}
  <Header user={user} />
     
{/* Hero Section */}
 <Hero />
 
{/* Features Section */}
     <Feature />

{/* Testimonial Section */}
   <Testimonial />

{/* Footer Section */}
     <Footer />

    </>
  )
}

export default App;
