import React from 'react'
import './sub.css'
import pos1 from '../../assets/pos1.png'
import pos21 from '../../assets/pos21.png'
import pos22 from '../../assets/pos22.png'
import pos3 from '../../assets/pos3.png'

export default function sub() {
  return (
    <div>
        <div className='text-container'>
            <p className='text'>At Kitesndarts, we are advocates of creative freedom. We believe that understanding the distinctiveness of each business is essential in crafting designs that hit the mark. If you're excited about igniting your brand’s potential and witnessing its evolution, you’ve come to the right place. </p>
        </div>
        <div className='link-container'>
            <p className='link'>
                <a>What We Do</a>
            </p>
        </div>
        <div className='poster1'>
            <img className='pos1' src={pos1} alt='DreamHome pvt. ltd.'/>
        </div>
        <div className='poster1-sub'>
            <p className='poster1-text'>DreamHome pvt. ltd.</p>
        </div>
        <div className='poster-container'>
            <div className='poster'>
                <img className='pos21' src={pos21} alt='The Daisy Patch' />
                <p className='poster-text'>The Daisy Patch</p>
            </div>
            <div className='poster'>
                <img className='pos22' src={pos22} alt='Tall Tales' />
                <p className='poster-text2'>Tall Tales</p>
            </div>
        </div>
        <div className='poster3-container'>
                <img className='pos3' src={pos3} alt='The Midnight Sun' />
                <p className='pos3-text'>The Midnight Sun</p>
        </div>
    </div>
  )
}
