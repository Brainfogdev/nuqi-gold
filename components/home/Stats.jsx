import React from 'react'
import Container from '../Container'

const Stats = () => {
  return (
    <section className='bg-gradient-to-r from-nuqi-bgfade to-nuqi-bgdark'>
      <Container className={'grid sm:grid-cols-4 py-32 my-32'}>
        <StatBox label={"30 Seconds"} description={'To Invest'} />
        <StatBox label={"AED 200"} description={'Start Investing With'} />
        <StatBox label={"8-12 %"} description={'Annualized Returns'} />
        <StatBox label={"200 +"} description={'Nationalities eligible'} />
      </Container>
    </section>
  )
}

export default Stats

const StatBox = ({label,description})=>{
  return (
    <div className='flex items-center text-white flex-col'>
      <h2 className='text-5xl font-semibold text-nuqi-gold'>{label}</h2>
      <p className='text-2xl mt-5'>{description}</p>
    </div>
  )
}