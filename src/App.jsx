import SwiperComponent from "./components/SwiperComponent";

import { Keyboard, GridNine, MouseSimple, Monitor, VideoCamera, OfficeChair, Headphones, DeviceTablet, DesktopTower, Laptop } from "@phosphor-icons/react";




function App() {
  return (
    <>
      <header></header>

      <main>
        <SwiperComponent />
      </main>
      <Keyboard size={32} />
      <GridNine size={32} />
      <MouseSimple size={32} />
      <Monitor size={32} />
      <VideoCamera size={32} />
      <OfficeChair size={32} />
      <Headphones size={32} />
      <DeviceTablet size={32} style={{ transform: "rotate(90deg)" }} />
      <DesktopTower size={32} />
      <Laptop size={32} />


      <footer></footer>
    </>
  );
}

export default App;
