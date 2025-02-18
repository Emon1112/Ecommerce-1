import "./globals.css";
import Header from "./Components/Header/Header";
import { ProductFetch } from "./Api/ProductFetch";
import CartProvider from "./Reducer/CartProvider";
import Footer from "./Components/Footer/Footer";


export const metadata = {
  title: "MyShoping",
  description: "It is created for to build up my profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="p-2">
        <ProductFetch>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ProductFetch>
      </body>
    </html>
  );
}
