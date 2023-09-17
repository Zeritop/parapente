import styles from './page.module.css'
import { MainBanner } from './components/main-banner'
import MisionVision from './components/mision-vision'
import VueloParapente from './components/VueloParapente'
import MiniGalerry from './components/MiniGalerry'
import Profile from './components/Profile'
import VueloSeguro from './components/VueloSeguro'
import ComoLlegar from './components/ComoLlegar'
import Tarifas from './components/Tarifas'
import LugarVuelo from './components/LugarVuelo'
import Contacto from './components/Contacto'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainBanner />
      <MisionVision />
      <VueloParapente />
      <MiniGalerry />
      <Profile />
      <VueloSeguro />
      <ComoLlegar />
      <Tarifas />
      <LugarVuelo />
      <Contacto />
    </main>
  )
}
