import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
          </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default App
