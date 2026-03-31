import './App.css'
import Navbar from './assets/Components/Homepage/navbar'
import Banner from './assets/Components/Homepage/banner'
import Player from './assets/Components/Homepage/player'
import { Suspense, useState } from 'react'

const playerPromise = async () => {
  const res = await fetch("/data.json");
  if(!res.ok) throw new Error("failed to load data");
  return res.json();
}

function App() {
  const [coin, setCoin] = useState(500000);
  return (
    <>
      <Navbar coin = {coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerPromise={playerPromise()} coin={coin} setCoin = {setCoin}/>
      </Suspense>
    </>
  )
}

export default App
