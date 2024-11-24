import React, {useEffect} from 'react'
import Hero from './Hero'
import Team from './Team'
import LiveSection from './LiveSection'
import YoutubeSection from './YoutubeSection'

export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <Hero/>
        <Team/>
        <LiveSection/>
        <YoutubeSection/>
    </>
  )
}
