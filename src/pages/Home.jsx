import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import DestinationWeddingSection from '../components/DestinationWedding';
import DestinationWedding2 from '../components/DestinationWedding2';
import CostPackages from './componet/CostPackages';
import RoyalVenuesList from './componet/RoyalVenues';
import WhyJoinUs from './componet/WhyJoinUs';

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <DestinationWeddingSection />
            <DestinationWedding2 />
            <CostPackages />
            <RoyalVenuesList />
            <WhyJoinUs />
        </>
    )
}

export default Home