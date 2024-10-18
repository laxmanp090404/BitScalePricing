import Cards from "./components/Cards"
import TogglePlan from "./components/TogglePlan"
function App() {

  return (
   <section className="w-[100vw] h-[100vh] bg-white flex flex-col justify-evenly items-center">
    <TogglePlan/>
    <Cards/>
   </section>
  )
}

export default App
