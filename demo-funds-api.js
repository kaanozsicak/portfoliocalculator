/**
 * Demo Fonlar API
 * Bu JavaScript dosyası, TEFAS verilerine erişim olmadan demo verileri sağlar.
 */

class DemoFundsAPI {
    constructor() {
        // Önbellek için depolama
        this.cache = {
            funds: null,
            details: {},
            history: {}
        };
        
        // Statik fon verileri
        this.staticFunds = [
            { code: 'AFT', name: 'Ak Portföy Altın Fonu', type: 'Kıymetli Maden', company: 'Ak Portföy', risk: 4 },
            { code: 'AFA', name: 'Ak Portföy Amerika Teknoloji Yabancı Hisse Senedi Fonu', type: 'Hisse Senedi', company: 'Ak Portföy', risk: 5 },
            { code: 'IPB', name: 'İş Portföy BIST Banka Endeksi Hisse Senedi Fonu', type: 'Hisse Senedi', company: 'İş Portföy', risk: 5 },
            { code: 'TIY', name: 'Tacirler Portföy İstatistiksel Arbitraj Serbest Fon', type: 'Serbest Fon', company: 'Tacirler Portföy', risk: 4 },
            { code: 'ZBA', name: 'Ziraat Portföy Altın Katılım Fonu', type: 'Kıymetli Maden', company: 'Ziraat Portföy', risk: 4 },
            { code: 'YAY', name: 'Yapı Kredi Portföy Yabancı Teknoloji Sektörü Hisse Senedi Fonu', type: 'Hisse Senedi', company: 'Yapı Kredi Portföy', risk: 5 },
            { code: 'GMR', name: 'Garanti Portföy Birinci Para Piyasası Fonu', type: 'Para Piyasası', company: 'Garanti Portföy', risk: 1 },
            { code: 'TTE', name: 'TEB Portföy Hisse Senedi Fonu', type: 'Hisse Senedi', company: 'TEB Portföy', risk: 5 },
            { code: 'TPL', name: 'Yapı Kredi Portföy Hisse Senedi Fonu', type: 'Hisse Senedi', company: 'Yapı Kredi Portföy', risk: 4 },
            { code: 'VEF', name: 'Vakıf Portföy Emtia Fonu', type: 'Emtia', company: 'Vakıf Portföy', risk: 3 }
        ];
    }

    /**
     * Tüm fonların listesini döndürür
     * @returns {Promise<Array>} - Fon listesi 
     */
    async getAllFunds() {
        // Önbellekten fon listesini kontrol et
        if (this.cache.funds) {
            console.log("Demo API: Önbellekten fon listesi yükleniyor");
            return this.cache.funds;
        }

        console.log("Demo API: Demo fon listesi yükleniyor");
        
        // Demo fon listesini oluştur
        const funds = this.staticFunds.map(fund => ({
            ...fund,
            description: `${fund.name}, ${fund.company} tarafından yönetilmektedir. ${fund.type} türünde, risk değeri ${fund.risk}/7 olan bir fondur. Bu açıklama demo amaçlıdır.`
        }));
        
        // Önbelleğe al
        this.cache.funds = funds;
        
        return funds;
    }

    /**
     * Fon detaylarını döndürür
     * @param {string} code - Fon kodu
     * @returns {Promise<Object>} - Fon detayları
     */
    async getFundDetails(code) {
        // Kod olup olmadığını kontrol et
        if (!code) {
            throw new Error('Fon kodu belirtilmelidir');
        }
        
        // Önbellekten detayları kontrol et
        if (this.cache.details[code]) {
            console.log(`Demo API: Önbellekten ${code} detayları yükleniyor`);
            return this.cache.details[code];
        }
        
        console.log(`Demo API: ${code} için demo detaylar oluşturuluyor`);
        
        // Demo fon detayları oluştur
        const fundDetails = this._generateDemoFundDetails(code);
        
        // Önbelleğe al
        this.cache.details[code] = fundDetails;
        
        return fundDetails;
    }

    /**
     * Fon fiyat geçmişini döndürür
     * @param {string} code - Fon kodu
     * @returns {Promise<Object>} - Fon fiyat geçmişi
     */
    async getFundPriceHistory(code) {
        // Kod olup olmadığını kontrol et
        if (!code) {
            throw new Error('Fon kodu belirtilmelidir');
        }
        
        // Önbellekten geçmişi kontrol et
        if (this.cache.history[code]) {
            console.log(`Demo API: Önbellekten ${code} fiyat geçmişi yükleniyor`);
            return { code, history: this.cache.history[code] };
        }
        
        console.log(`Demo API: ${code} için demo fiyat geçmişi oluşturuluyor`);
        
        // Demo fiyat geçmişi oluştur
        const history = this._generateDemoFundPriceHistory(code);
        
        // Önbelleğe al
        this.cache.history[code] = history;
        
        return { code, history };
    }

    /**
     * Demo fon detayları oluştur
     * @param {string} code - Fon kodu
     * @returns {Object} - Demo fon detayları
     */
    _generateDemoFundDetails(code) {
        // Statik fon listesinde bu koda sahip bir fon var mı kontrol et
        const foundFund = this.staticFunds.find(f => f.code === code);
        
        // Rassal değişimler için yardımcı fonksiyon
        const randomPercentChange = () => ((Math.random() * 10) - 3).toFixed(2);
        
        // Fon bilgilerini ayarla
        const fundName = foundFund ? foundFund.name : `Demo ${code} Fonu`;
        const fundType = foundFund ? foundFund.type : 'Karma Fon';
        const fundCompany = foundFund ? foundFund.company : 'Demo Portföy Yönetimi A.Ş.';
        const fundRisk = foundFund ? foundFund.risk : Math.floor(Math.random() * 5) + 1;
        
        // Demo detayları oluştur
        return {
            code: code,
            name: fundName,
            type: fundType,
            company: fundCompany,
            founder: fundCompany,
            manager: fundCompany + ' Fon Yönetimi',
            inception_date: '01.01.' + (2015 + Math.floor(Math.random() * 7)), // 2015-2021 arası
            risk_category: fundRisk,
            fund_size: `${(Math.random() * 1000 + 100).toFixed(2)} Milyon TL`,
            daily_change: `${randomPercentChange()}%`,
            weekly_change: `${randomPercentChange()}%`,
            monthly_change: `${randomPercentChange()}%`,
            ytd_change: `${(randomPercentChange() * 3)}%`,
            annual_change: `${(randomPercentChange() * 5)}%`,
            last_price: `${(Math.random() * 10 + 1).toFixed(4)} TL`,
            price_date: this._formatDate(new Date()),
            description: foundFund ? 
                `${fundName}, ${fundCompany} tarafından yönetilen ${fundType} türünde, risk değeri ${fundRisk}/7 olan bir fondur. Bu demo amaçlı üretilmiş veridir.` :
                `Bu demo ${code} kodlu fon, test amaçlı oluşturulmuştur. Bu fon gerçek bir fon değildir ve veriler tamamen rastgele üretilmiştir.`,
            portfolio_distribution: [
                { category: 'Hisse Senedi', percentage: Math.floor(Math.random() * 40) + 10 },
                { category: 'Tahvil/Bono', percentage: Math.floor(Math.random() * 30) + 10 },
                { category: 'Ters Repo', percentage: Math.floor(Math.random() * 20) + 5 },
                { category: 'Yabancı Menkul', percentage: Math.floor(Math.random() * 15) + 5 },
                { category: 'Diğer', percentage: Math.floor(Math.random() * 10) + 5 }
            ]
        };
    }

    /**
     * Demo fon fiyat geçmişi oluştur
     * @param {string} code - Fon kodu
     * @returns {Array} - Demo fiyat geçmişi
     */
    _generateDemoFundPriceHistory(code) {
        const history = [];
        const endDate = new Date();
        
        // Fon tipine göre başlangıç fiyatı ve değişkenlik ayarla
        let volatility = 0.02; // Varsayılan değişkenlik
        let startPrice = 5 + Math.random() * 5; // Varsayılan başlangıç fiyatı
        
        // Statik listede fonu bul
        const foundFund = this.staticFunds.find(f => f.code === code);
        if (foundFund) {
            // Fon türüne göre değişkenlik ve başlangıç fiyatı ayarla
            if (foundFund.type === 'Hisse Senedi') {
                volatility = 0.03;
                startPrice = 3 + Math.random() * 7;
            } else if (foundFund.type === 'Kıymetli Maden') {
                volatility = 0.015;
                startPrice = 7 + Math.random() * 5;
            } else if (foundFund.type === 'Serbest Fon') {
                volatility = 0.025;
                startPrice = 4 + Math.random() * 6;
            }
        }
        
        let price = startPrice;
        
        // Son 365 gün için veri oluştur
        for (let i = 365; i >= 0; i--) {
            const date = new Date(endDate);
            date.setDate(date.getDate() - i);
            
            // Rassal fiyat hareketi ekle
            const dailyChange = Math.random() * volatility * 2 - volatility;
            price = price * (1 + dailyChange);
            
            // Fiyat çok düşükse veya çok yüksekse düzelt
            price = Math.max(price, 1);
            price = Math.min(price, 30);
            
            // Kaydı ekle
            history.push({
                TARIH: this._formatISODate(date),
                FONFTD: price.toFixed(6),
            });
        }
        
        return history;
    }

    /**
     * Tarihi DD.MM.YYYY formatına çevir
     * @param {Date} date - Tarih
     * @returns {string} - Formatlanmış tarih
     */
    _formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    /**
     * Tarihi YYYY-MM-DD (ISO) formatına çevir
     * @param {Date} date - Tarih 
     * @returns {string} - Formatlanmış tarih
     */
    _formatISODate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}

// Tek örnek oluştur ve dışa aktar
const demoFundsAPI = new DemoFundsAPI();
