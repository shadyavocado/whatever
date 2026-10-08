import './style.css'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Header from './Header.jsx'
import Index from './Index.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Contact from './Contact.jsx'
import Layout from './Layout.jsx';
function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Index title="Home page" />} />
        <Route path="/about" element={<About title="About Page" />} />
        <Route path="/contact" element={<Contact title="contact Page" />} />
        <Route path="/service" element={<Service title="Service Page" />} />
        </Route>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>  
    </BrowserRouter >
  )
}
export default App
