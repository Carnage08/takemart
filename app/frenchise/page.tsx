import React from 'react'
import { Hero } from '@/components/home/Hero'
import NavBar from '@/components/homes/NavBar'
import { Footer } from '@/components/home/Footer'
import { AboutFranchise } from '@/components/home/AboutFranchise'
import { Insights } from '@/components/home/Insights'
// import Insights from '@/components/homes/Insights' // Component not found or incorrect path
import { FAQ } from '@/components/home/FAQ'
import { CTABanner } from '@/components/home/CTABanner'

const page = () => {
  return (
    <>
    <NavBar/>
    <main>
        <Hero/>
        <AboutFranchise/>
        <Insights/>
        <FAQ/>
        <CTABanner/>
    </main>
    <Footer/>
    </>
  )
}

export default page