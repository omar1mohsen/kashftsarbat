import { Noto_Sans_Arabic } from "next/font/google";

// Import styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import '@/assets/css/animate.css';
import "./globals.scss"; 

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-noto-arabic",
});

export const metadata = {
  title: "كشف تسريبات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
