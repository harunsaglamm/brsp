import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"


function Wifi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("src/data/wifi.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            })
    }, []);

    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.meram.bel.tr/upload/medya/37623-2.jpg"
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        
            <div className='border'>
                <h1>WİFİ Noktaları</h1>
               
            </div>
            <br />
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {data.map(item => (
                    <div key={item.id} className="card">
                        <div className='card-header'>
                           
                        </div>
                        <div className='card-body'>
                        
                        <p> {item.name}</p>
                        
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Wifi