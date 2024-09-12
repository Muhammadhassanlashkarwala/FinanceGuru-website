
import Header from './assets/Components.jsx/Header.jsx'
import Hero from './assets/Components.jsx/Hero.jsx'
import Feature from './assets/Components.jsx/Features.jsx'
import Testimonial from './assets/Components.jsx/Testimonial.jsx'
import Footer from './assets/Components.jsx/Footer.jsx'
import financeImage from './assets/finance-guru.png'


function App() {


  return (
    <>
{/* Header Section */}
  <Header />
     

  {/* Hero Section */}
  
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Take Control of Your Finances
          <br className="hidden lg:inline-block" />
     Today
        </h1>
        <p className="mb-8 leading-relaxed">
         Track expenses, set budgets, and achieve your financial goals with
         <br className="hidden lg:inline-block" />
          FinanceGuru. 
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Get started now
          </button>
       
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded border border-blue-800"
          alt="hero"
          src={financeImage}
        />
      </div>
    </div>
  </section>
 
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
