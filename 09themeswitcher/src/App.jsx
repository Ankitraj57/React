
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <Navbar/>
        <div className="w-full">
          <div className="w-full flex justify-end pr-6 mb-3">
            {/* <ThemeBtn/> */}
          </div>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

           <Card description={" Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport, Bluetooth connection "} 
           image={"https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_7_GPS_41mm_Midnight_Aluminum_Anthracite_Black_Nike_Sport_Band_PDP_Image_Position-8_EAEN.jpg?v=1698883715&width=823"} 
           price={"$599"}/>

           <Card description={"Fastrack Cerame Quartz Multifunction Black Dial Steel & Ceramic Strap Watch for Guys "}
           image={"https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8660f3dd/images/Fastrack/Catalog/3304KD01_4.jpg?sw=800&sh=800"}
           price={"$850"}/>

           <Card description={"Fire-Boltt Dominian 36.3mm (1.43 inch) AMOLED Display, Stainless Steel Design, 466 * 466 px"}
           image={"https://m.media-amazon.com/images/I/715ZaYE2O4L.jpg"}
           price={"$550"}/>

            <Card description={"Fastrack Cerame Quartz Multifunction Black Dial Steel & Ceramic Strap Watch for Guys "}
           image={"https://m.media-amazon.com/images/I/71PXkv-smcL._UF1000,1000_QL80_.jpg"}
           price={"$500"}/>

            <Card description={"Noise ColorFit Ore Smart Watch with Largest-Ever 2.1 AMOLED Display with Ultra Thin Bezels, battery 7000mh"}
           image={"https://m.media-amazon.com/images/I/71ZNB1qCdXL._UF1000,1000_QL80_.jpg"}
           price={"$320"}/>
           
           <Card description={"Titan Heritage Premium Smartwatch with All SS Design, 3.6 CM AMOLED Display, BT Calling, Advanced"}
           image={"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7343b45a/images/Titan/Catalog/90207NM01_1.jpg?sw=600&sh=600"}
           price={"$270"}/>

          </div>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
