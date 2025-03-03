# 🚧 Proje geliştirme aşamasındadır!

# 💼 Portföy Hesaplayıcı

Bu proje, yatırımcıların portföylerini yönetmelerine, izlemelerine ve dengelemelerine yardımcı olan web tabanlı bir uygulamadır.

## ⭐ Özellikler

### 🔑 Kullanıcı Yönetimi
- Kullanıcı kaydı ve girişi
- Admin / Normal kullanıcı ayrımı
- Güvenli oturum yönetimi
- Anonim kullanıcı desteği

### 📊 Portföy Yönetimi

#### 1️⃣ Dinamik Portföy Oluşturma
- Sınırsız sayıda portföy ekleme
- Özelleştirilebilir portföy başlıkları
- Portföyleri gizleme/gösterme özelliği

#### 2️⃣ Varlık Yönetimi
- Manuel varlık girişi
- Hazır hisse senedi & fon seçimi
- Her varlık için:
  - Değer girişi
  - Yüzde ayarlama
  - Silme özelliği

#### 3️⃣ Portföy Dengeleme
- Otomatik dengeleme hesaplaması
- Al/Sat önerileri
- Minimum işlem tutarı kontrolü (Kripto için)
- Toplam portföy değeri hesaplama

### 📈 Yatırım Bilgileri

#### 📊 Fon Detayları Sayfası
- Kapsamlı fon bilgileri görüntüleme
- Performans grafikleri (1H, 1A, 3A, 6A, 1Y, MAX)
- Tarihsel veri tablosu
- Günlük/haftalık/aylık/yıllık değişim istatistikleri
- Fiyat geçmişi ve performans istatistikleri
- Varlık ve sektör dağılımı grafikleri
- Bir tıkla portföye ekleme özelliği

#### 🔍 Yatırım Araştırma Sayfası
- Tüm fonların ve hisse senetlerinin listesi
- Arama ve filtreleme özellikleri
- Sıralama seçenekleri
- Detaylı bilgilere hızlı erişim

### ⚙️ Admin Paneli

#### 📌 Hisse Senedi Yönetimi
- Hisse ekleme, düzenleme, silme
- Detaylı hisse bilgileri (kod, isim, açıklama, sektör, website)

#### 📌 Fon Yönetimi
- Fon ekleme, düzenleme, silme
- Detaylı fon bilgileri (kod, isim, açıklama, tür, şirket, risk seviyesi)

### 🔧 Teknik Özellikler
- Firebase Authentication ile güvenli giriş
- Firestore veritabanı ile gerçek zamanlı veri yönetimi
- Demo API ile fon fiyat ve performans verilerine erişim
- Binance API entegrasyonu ile canlı kripto fiyatları
- Responsive tasarım (mobil uyumlu)
- Yerel depolama ile önbellekleme
- Otomatik veri kaydetme ve cross-browser uyumluluğu

## 🚀 Son Güncellemeler

### Versiyon 1.5.0 (Güncel)
- **Yeni Özellikler:**
  ✅ Fon performans metriklerini Excel'den içe aktarma (1ay, 3ay, 6ay, YTD, 1yıl, 3yıl, 5yıl)
  ✅ Performans karşılaştırma grafiği ile fonların dönemsel getirileri
  ✅ Dönemsel sonuçların yeşil/kırmızı renk vurgularıyla gösterimi
  ✅ Fon detay sayfalarından portföye doğrudan ekleme
- **İyileştirmeler:**
  ✅ Demo fon API'si genişletildi
  ✅ Sayfalama sistemi ile büyük listelerde performans optimizasyonu
  ✅ Veri önbelleğe alma ile hızlı erişim
  ✅ Hata yönetimi geliştirildi
- **Güvenlik:**
  ✅ Firestore kuralları güçlendirildi
  ✅ Admin erişim kontrolleri sıkılaştırıldı

### Versiyon 1.4.0
✅ Demo fon API'si eklendi
✅ Fon detay sayfası geliştirildi
✅ Performans grafikleri ve istatistikleri eklendi
✅ Fon bilgileri görüntüleme sistemi yenilendi
✅ Yatırım bilgileri sayfası eklendi
✅ URL parametreleriyle fon ekleme özelliği eklendi
✅ Portföye doğrudan ekleme özelliği geliştirildi

### Versiyon 1.3.0
✅ Admin paneline ana sayfa butonu eklendi
✅ Portföy listelerinde taşma sorunları giderildi
✅ Liste öğelerinin arka plan renkleri iyileştirildi
✅ Hisse düzenleme modalı düzeltildi
✅ Veri giriş formlarının düzeni geliştirildi
✅ Responsive tasarım güncellemeleri yapıldı

### Versiyon 1.2.0
✅ Firebase entegrasyonu tamamlandı
✅ Hisse ve fon veritabanı oluşturuldu
✅ Portföy kaydetme özelliği eklendi
✅ Admin paneli geliştirildi
✅ Kullanıcı yetkilendirme sistemi eklendi
✅ Hata yönetimi ve güvenlik artırıldı

### Versiyon 1.1.0
✅ Çoklu portföy desteği eklendi
✅ Binance API entegrasyonu yapıldı
✅ Kripto para birimleri için minimum işlem tutarı kontrolü eklendi
✅ Portföy gizleme/gösterme özelliği eklendi
✅ Arayüz iyileştirmeleri yapıldı

## 🔄 Planlanan Güncellemeler

- 📊 **TEFAS** üzerinden fonların gerçek zamanlı verilerinin çekilmesi
- 📈 **BIST** üzerinden hisse fiyat bilgilerinin alınması
- 📲 Progressive Web App (PWA) desteği
- 🔄 Portföylerin otomatik yeniden dengelenmesi için önerilerin geliştirilmesi
- 📅 Uzun vadeli yatırım planlaması ve tahmin özellikleri
- 💹 Gelişmiş getiri analizi ve raporlama

## 🛠️ Kurulum

1. Projeyi klonlayın
   ```
   git clone https://github.com/kullaniciadi/portfoliocalculator.git
   cd portfoliocalculator
   ```

2. Firebase konfigürasyonunu yapın
   - Firebase konsolundan yeni bir proje oluşturun
   - Authentication ve Firestore özelliklerini etkinleştirin
   - Firestore kurallarını projenize göre düzenleyin
   - Firebase konfigürasyon bilgilerinizi uygulamaya ekleyin

3. Gerekli bağımlılıkları yükleyin
   - Proje sadece istemci taraflı HTML/CSS/JS kullanır, ayrıca bir bağımlılık yüklemesine gerek yoktur
   - Gerekli CDN bağlantıları zaten HTML dosyalarında mevcuttur

4. Local sunucuda çalıştırın
   - Herhangi bir statik dosya sunucusu kullanabilirsiniz (Live Server vb.)

## 💻 Teknolojiler

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase (Authentication & Firestore)
- Binance API
- Chart.js
- jQuery

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak için:
1. 🍴 Fork edin
2. 🌿 Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. 💾 Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. 🚀 Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. 📥 Pull Request açın

## 📜 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

📧 **İletişim**  
[İletişim bilgileri eklenecek]

🔗 **Demo Sürüm:** https://portfoliocalculator.netlify.app
```
