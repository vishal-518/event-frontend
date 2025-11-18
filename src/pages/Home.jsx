import React from 'react'
import CostPackages from './componet/CostPackages'
import RoyalVenuesList from './componet/RoyalVenues'
import WhyJoinUs from './componet/WhyJoinUs'
import Hero from '../components/Hero'
import DestinationEvents from '../Events/destination'
import DestinationWedding2 from '../components/DestinationWedding2'
import Services from '../components/Services'
import About from '../components/About'


function Home() {
    return (
        <>
            <Hero />
            <CostPackages />
            <Services />
            <DestinationEvents />
            <About/>
            <DestinationWedding2 />
            <RoyalVenuesList />
            <WhyJoinUs />
        </>
    )
}

export default Home