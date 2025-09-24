import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'



const page = () => {
  return (
    <section>
      <Container className={'py-20'}>
        <h1 className='text-4xl font-semibold text-nuqi-bgfade'>Dive into <span className='text-nuqi-gold'>Expert Insights,& Market Trends</span></h1>
        <div>
          <div className='flex sm:flex-row flex-col my-10 gap-5'>
            <div className='p-8 rounded-xl border'>
              <h1 className='text-xl font-medium'>How to start Investing Journey ?</h1>
              <p className='my-5'>Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.</p>
              <Button className='text-lg p-5'>Read More</Button>
            </div>
            <div className='p-8 rounded-xl border'>
              <h1 className='text-xl font-medium'>How to start Investing Journey ?</h1>
              <p className='my-5'>Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.</p>
              <Button className='text-lg p-5'>Read More</Button>
            </div>
            <div className='p-8 rounded-xl border'>
              <h1 className='text-xl font-medium'>How to start Investing Journey ?</h1>
              <p className='my-5'>Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.</p>
              <Button className='text-lg p-5'>Read More</Button>
            </div>
          </div>
          <div className='flex gap-5'>
            <button className='p-2 text-lg border rounded-full'><ChevronLeft /></button>
            <button className='p-2 text-lg border rounded-full'><ChevronRight /></button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default page