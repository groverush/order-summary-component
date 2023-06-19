import { Hero, Content, Footer } from "./components"

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen text-center">
      <div className="bg-white max-w-[350px] mx-auto mt-14 rounded-b-xl">
        <Hero />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
export default App
