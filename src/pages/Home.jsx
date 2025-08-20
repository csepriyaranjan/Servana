import React from 'react'
import HeroSection from '../components/Hero'
import ServicesSection from '../components/Service'
import StatsSection from '../components/Stats'
import TestimonialsSection from '../components/Testimonial'
import CTASection from '../components/CTA'

export default function Home() {
  return (
    <main>
        <HeroSection/>
        <ServicesSection/>
        <StatsSection/>
        <TestimonialsSection/>
        <CTASection/>
    </main>
  )
}
