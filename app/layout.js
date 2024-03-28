import { Inter } from "next/font/google";
import "./globals.css";
import {StatisticsProvider} from "@/app/globalComponents/statisticsCountContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StatisticsProvider>
        {children}
      </StatisticsProvider>
      </body>
    </html>
  );
}
