import './App.css'
import Navbar from './assets/Components/Homepage/navbar'
import Banner from './assets/Components/Homepage/banner'
import Player from './assets/Components/Homepage/player'
import { Suspense } from 'react'

const playerPromise = async () => {
  const res = await fetch("/data.json");
  if(!res.ok) throw new Error("failed to load data");
  return res.json();
}

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerPromise={playerPromise()}/>
      </Suspense>
    </>
  )
}

export default App
