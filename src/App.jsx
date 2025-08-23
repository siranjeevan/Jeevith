import Header from "./components/Header/main/Header"
import HomeScreen from "./components/HomeScreen/main/HomeScreen"
import ServiceScreen from "./components/Service/main/ServiceScreen"
import AboutScreen from "./components/AboutScreen/main/AboutScreen"
import Project from "./components/Projects/main/ProjectScreen"
import Testimonial from "./components/Testimonials/main/TestimonialsScreen"
import Mentor from "./components/Mentor/main/MentorScreen"
function App() {

  return (
    <>
      <Header />
      <HomeScreen />
      <hr className="hr-with-dot" />
      <ServiceScreen />
      <hr className="hr-with-dot" />
      <AboutScreen />
      <hr className="hr-with-dot" />
      <Project />
      <hr className="hr-with-dot" />
      <Testimonial />
      <hr className="hr-with-dot" />
      <Mentor/>
      <hr className="hr-with-dot" />
    </>
  )
}

export default App
