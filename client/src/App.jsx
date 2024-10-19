import Cards from "./components/Cards"
import Footer from "./components/Footer"
import TogglePlan from "./components/TogglePlan"
function App() {

  return (
   <section className="w-[100vw] min-h-[100vh] bg-white flex flex-col justify-between p-[6vh] gap-[4vh] items-center">
    <TogglePlan/>
    <Cards/>
    <Footer/>
   </section>
  )
}

export default App
