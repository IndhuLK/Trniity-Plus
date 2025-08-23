import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import SustainableSection from './SustainableSection'
import WhatDrives from './WhatDrives'
import FeaturedProjects from './FeaturedProjects'
import RecentEvents from './RecentEvents'
import CallToAction from './CallToAction'
import SuccessStories from './SuccessStories'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection />
        <SustainableSection />
        <WhatDrives />
        <FeaturedProjects />
        <RecentEvents />
        <CallToAction />
        <SuccessStories />
    </div>
  )
}

export default Home