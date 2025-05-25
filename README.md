# BiP Case Study

Bu proje, BiP için hazırlanmış bir e-ticaret listeleme uygulamasının frontend case study'dir. Uygulama, modern React ekosisteminde **Redux-Observable**, **RxJS**, **Material UI**, **TypeScript** gibi teknolojileri kullanarak functional programming ve reactive pattern'lerle geliştirilmiştir.

---

## 🚀 Proje Hakkında

Uygulama, mock data (faker.js ile oluşturulmuş) ürünleri listeleyip, filtreleme, arama, sepete ekleme ve etkileşimli geri bildirimler sunmaktadır. Geliştirme sücrecinde performans, kullanıcı deneyimi ve okunabilir kod yapısı önceliklendirilmiştir.

---

## 🧱 Kullanılan Teknolojiler

- **React 19**
- **TypeScript 5**
- **Redux Toolkit**
- **Redux Observable (RxJS)**
- **Material UI v7.1.0 (Grid v2 desteği ile)**
- **Axios**
- **Faker.js**
- **Font Awesome (Free)**

---

## 🔧 Mimarî Yapı ve Desenler

- **Feature-based folder structure** (`features/products`, `features/cart` vs.)
- **Reaktif veri akışı**: `redux-observable` & `rxjs` ile event-driven architecture
- **Functional programming** yaklaşımı (`map`, `filter`, `switchMap` gibi operatorlerle)
- **Typed Redux** yapısı (`AppDispatch`, `RootState`, `PayloadAction` tipleriyle)
- **Separation of concerns** prensibi (epic, slice, component ayrımı)

---

## 🌟 Özellikler

- 🎨 Ürün listeleme (kategori ve fiyat filtreleriyle)
- 🔍 Anlık arama ve filtreleme (RxJS ile async debounce)
- 🛒 Sepete ürün ekleme / çıkarma / adet değiştirme
- 📣 Epics üzerinden snackbar mesaj yönetimi
- ♻️ Ürünleri mock API’den sayfa sayfa getirme (**WIP: Infinite Scroll**)
- 🖼️ Ürün görsellerinde lazy load ve performans optimizasyonu (**WIP**)
- ⚠️ Error boundary ve hata yönetimi senaryoları (**WIP**)
- 📦 Tüm stateler Redux store üzerinden yönetilir

---

## 🛠️ Projeyi Çalıştırma

```bash
# Gerekli bağımlılıkları kur
yarn install

# Geliştirme sunucusunu başlat
yarn dev
```

> Proje Vite ile yapılandırılmıştır ve `yarn` paket yöneticisi kullanır.

---

## 📁 Dizin Yapısı (ozet)

```bash
src/
├── app/               # Store ve global tanımlar
├── features/          # Tüm domain feature’ları (cart, products)
├── layout/            # Ortak layout bileşenleri (Navbar, Drawer)
├── pages/             # Sayfa bazlı component yapısı
├── types/             # Ortak tip tanımlamaları
├── epics/             # rootEpic birleşimi
└── main.tsx           # Giriş dosyası
```

---

Her commit, Conventional Commits formatına uygun şekilde kategorize edilir (`feat`, `fix`, `chore`, `refactor`).
