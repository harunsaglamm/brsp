import "./TripApp.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1>Güncel Haberler</h1>
      <div className="tripcard">
         <TripData 
            image={"	https://www.bursa.bel.tr/dosyalar/resimler/haberler/33965_MTY1ZDIwZT_1.jpg"}
            heading="‘Yeşil’ yatırımlar şehre nefes aldırıyor "
            text="Bursa’yı yeniden yeşil kimliğine kavuşturmak için çalışmalarını tüm hızıyla sürdüren Bursa Büyükşehir Belediyesi, sil baştan yenilenen toplam 55 dönümlük Demirtaş Kırantepe Çamlık Parkı’nı düzenlenen törenle hizmete açtı. Yeşilin her şehre yakıştığını ama en çok Bursa’ya yakıştığını söyleyen Büyükşehir Belediye Başkanı Alinur Aktaş, “Bursa’yı tekrar yeşil kimliğine ulaştırmak için tabir yerindeyse ant içmişiz” dedi."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1_323.jpg"}
            heading="2023'ün En Gözdesi; Kızlar Kayası"
            text="Meram Belediyesi tarafından oluşturulan ‘Yeni Turizm Rotası’nın en nadide parçası Kızlar Kayası, 2023’ün en gözde mekanlarından biri oldu. Kızlar Kayası’nı kısa zamanda on binlerce kişinin ziyaret ettiğini söyleyen Meram Belediye Başkanı Mustafa Kavuş, “Kızlar Kayası, pek çok hikayeye konu oldu. Ama artık hemşehrilerimiz kendi hikayelerini yazacak dedik, öyle de oldu” diye konuştu."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1-9_60.jpg"}
            heading=" 'Nerede Bu Meram Bağları?' Sorusu, Meram Belediyesi'nin Projesiyle Cevap Buluyor"
            text="Tarihi Meram’ı yeniden canlandırma projesi olan Meram Bağı’nda yazlık çay bahçesi hizmet vermeye başladı. Meram Belediye Başkanı Mustafa Kavuş, İlçenin yeşil dokusuna, sosyal hayatına ve turizmine katkı sunacak Meram Bağı projedinin tamamının da yakın zamanda faaliyete geçeceğinin müjdesini verdi."
         />
       </div>
    </div>
  );
}

export default Trip;