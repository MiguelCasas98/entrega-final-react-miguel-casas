# 📦 MultiShopExpress – E‑Commerce React App

MultiShopExpress es una aplicación de comercio electrónico desarrollada como entrega final del curso de **React.js**.  
Incluye navegación por categorías, detalle de productos, carrito de compras, checkout y una arquitectura profesional basada en **Container + View**.

---

## 🚀 Tecnologías utilizadas

- React.js  
- React Router DOM  
- Firebase Firestore  
- Context API  
- Custom Hooks  
- JavaScript ES6+  
- Vite  
- CSS  

---

## 🧱 Arquitectura del proyecto

El proyecto sigue el patrón **Container + View**:

- **Container** → lógica (hooks, estado, funciones, contexto, servicios)  
- **View** → presentación (JSX puro)

Esto permite un código más limpio, modular y escalable.

---

## 📁 Estructura del proyecto

src/
│
├── assets/
│
├── cart/
│   ├── CartContainer.jsx
│   ├── CartView.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   ├── EmptyCart.jsx
│   ├── BackButton.jsx
│   └── Cart.css
│
├── checkout/
│   ├── CheckoutContainer.jsx
│   └── CheckoutView.jsx
│
├── components/
│   ├── NavBar/
│   │   ├── NavBarContainer.jsx
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   │
│   ├── CartWidget/
│   │   ├── CartWidgetContainer.jsx
│   │   └── CartWidget.jsx
│   │
│   ├── HomeContainer.jsx
│   └── HomeView.jsx
│
├── context/
│   └── CartContext.jsx
│
├── hooks/
│   └── useCart.js
│
├── itemDetailContainer/
│   ├── ItemDetailContainer.jsx
│   ├── ItemDetailView.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCountContainer.jsx
│   └── ItemCount.jsx
│
├── itemListContainer/
│   ├── ItemListContainer.jsx
│   ├── ItemListView.jsx
│   ├── ItemList.jsx
│   └── Item.jsx
│
├── routes/
│   └── AppRouter.jsx
│
├── services/
│   ├── FirebaseConfig.js
│   ├── getProducts.js
│   ├── getProductsByCategory.js
│   ├── getCategories.js
│   ├── ProductsService.js
│   └── pixabayService.js
│
├── App.jsx
├── main.jsx
└── index.css

Código

---

## 🛒 Funcionalidades

- Catálogo de productos desde Firebase  
- Navegación por categorías  
- Detalle de producto  
- Selector de cantidad  
- Carrito de compras:
  - agregar productos  
  - eliminar productos  
  - vaciar carrito  
  - subtotal y total  
- Checkout con formulario  
- Context API para estado global  
- Separación completa entre lógica y vista  

---

## 🔧 Instalación

### 1. Clonar el repositorio

git clone https://github.com/tuusuario/MultiShopExpress.git



### 2. Instalar dependencias

npm install



### 3. Ejecutar el proyecto

npm run dev


## 🔥 Configuración de Firebase

```js
const firebaseConfig = {
  apiKey: "AIzaSyBqJgSNvYr22vvikCeADyI-GI9P_rad5as",
  authDomain: "electrohouse-ecommerce.firebaseapp.com",
  projectId: "electrohouse-ecommerce",
  storageBucket: "electrohouse-ecommerce.appspot.com",
  messagingSenderId: "650227584427",
  appId: "1:650227584427:web:f40de89e444ae271c7d6ee"
};


🌐 Deploy en GitHub Pages
Ir a Settings → Pages

Seleccionar:
Source: Deploy from branch
Branch: main
Folder: /root
Guardar

GitHub generará un link como:
Código
https://tuusuario.github.io/MultiShopExpress/


## 📸 Capturas

![Home](src/assets/capturas/image.png)
![Catálogo](src/assets/capturas/image-1.png)
![Detalle](src/assets/capturas/image-2.png)
![Carrito](src/assets/capturas/image-3.png)
![Checkout](src/assets/capturas/image-4.png)
![Final](src/assets/capturas/image-5.png)


🧩 Mejoras futuras
Integración con pasarela de pagos
Panel de administración
Sistema de usuarios
Favoritos
Historial de compras
Migración a TailwindCSS



👨‍💻 Autor
Miguel Angel Casas  
Entrega Final – Curso React.js
MultiShopExpress
