import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.meram.bel.tr/upload/medya/MRM_6245.jpg"
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;