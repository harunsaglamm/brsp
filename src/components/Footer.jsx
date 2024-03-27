import "./FooterApp.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
            <div className="text">
                <h1>BURSA BÜYÜKŞEHİR BELEDİYESİ</h1>
                <p>Yeşil Bursa İçin Canla Başla</p>
            </div>
            <div>
              <a href="https://www.facebook.com/bursabuyuksehir/?locale=tr_TR"> <i className="fa-brands fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/bursabuyuksehir/"> <i className="fa-brands fa-instagram-square"></i></a>
              <a href="https://twitter.com/bursabuyuksehir"> <i className="fa-brands fa-twitter-square"></i></a>
              
            </div>
        </div>
        </div>
    )
}

export default Footer