import Cards from "./components/Cards"
import Footer from "./components/Footer"
import TogglePlan from "./components/TogglePlan"
function App() {

  /**
   * The app is divided into three sections:
   * The components include:
   * 1. TogglePlan
   * 2. Cards
   *  3. Footer 
   */
  return (
   <section className="w-[100vw] min-h-[100vh] bg-white flex flex-col justify-between p-[6vh] gap-[4vh] items-center">
    <TogglePlan/>
    <Cards/>
    <Footer/>
   </section>
  )
}

export default App
