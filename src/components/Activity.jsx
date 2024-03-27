import "./ActivityApp.css"
import ActivityData from "./ActivityData"
import Mountain1 from  "../assets/1.jpg"
import Mountain2 from  "../assets/2.jpg"
import Mountain3 from  "../assets/3.jpg"


const Activity = () =>{
    return(
        <div className="activity">
            <h1>Meram Belediyesi Faaliyetleri</h1>
            <p>En Son Yapılan Faaliyetler</p>

            <ActivityData
            className="first-act"
            heading="Meram Belediyesi’nden Eğitime MEGA Katkı"
            text="Meram Belediyesi, 75 bin öğrencinin faydalanacağı yeni nesil eğitim projesi Meram Gelişim Akademisi/MEGA’yı hayata geçirdi. Projenin detaylarını bir basın toplantısıyla kamuoyuna açıklayan Başkan Mustafa Kavuş,  ‘Z ve Alfa Kuşaklarının’ içinde aktif olarak yer alacağı ve yeni nesli yeni nesil eğitim yöntemleriyle tanıştıracak projenin ahlaki karakter eğitimini merkeze alarak bilim, sanat, yaşam, doğa, sağlık ve spor eğitimlerinde yeni bir çığır açacağını kaydetti."
            img1={"	https://www.meram.bel.tr/upload/medya/MRM_8757.jpg"}
            img2={"	https://www.meram.bel.tr/upload/medya/HE5B2475.jpg"}
            />

            <ActivityData
            className="first-act-reverse"
            heading="Meram Lavanta Bahçesi"
            text="Meram Belediyesi'nin Dere Mahallesi’nde oluşturduğu lavanta bahçesi düzenlenen törenle açıldı. Meram Lavanta Bahçesi doğal güzellikleri, eşsiz manzarası ve muhteşem atmosferiyle ziyaretçilerini adeta büyülüyor. Meram Belediyesi'nin insana ve insan ruhuna dokunan her şeyi bir araya getirdiği lavanta bahçesi ziyaretçilerini bekliyor.Törende misafirlerine lavanta bahçesi hakkında bilgi veren Meram Belediye Başkanı Mustafa Kavuş, lavanta bahçesinin, 20 bin metrekarelik bir alanın 10 bin metrekaresi içerisinde ziyaretçilerini ağırlayacağını belirterek “Yapılan 190 metre ahşap iskele yol ile ziyaretçilerimiz rahatlıkla burayı gezebilecekler. İçerisinde bulunan, mermer su havuz pergolesi, oturma bankları, seyir terası, salıncak terası, 365 metrelik sağlıklı yaşam parkuru ve yüz metrelik gül kemerleri ile ziyaretçilere sosyal donatılarıyla da doyumsuz anlar yaşatacak. Bahçemize diktiğimiz birbirinden güzel diğer çiçeklerimiz de bahçemizin güzelliğine güzellik katacak” diye konuştu."
            img1={"	https://www.meram.bel.tr/upload/medya/1-12_26.jpg"}
            img2={"	https://www.meram.bel.tr/upload/medya/1-8_112.jpg"}
            />
        </div>

    )
}

export default Activity