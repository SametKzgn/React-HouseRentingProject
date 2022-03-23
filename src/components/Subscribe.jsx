import React from 'react'

function Subscribe() {
  return (
    <div className='subs-class'>


<div className="bg-img2">
        <h2 className='heading'> Newsletter</h2>
        <p> Be inspired. Sign up to get the latest market updates and our
          freshest selection of properties.</p>
        <input className='box1' type="text" placeholder=" Name" />
        <input className='box1' type="text" placeholder=" Email" />

        <div className="btndiv"> <button > SUBSCRIBE</button>
        </div>
      </div>


      <div className='bg-img'>
      <iframe className='map' src="https://www.google.com/maps/d/u/0/embed?mid=1LVfKKTM8maaDMxLTR5KLE8APH3fiKyqC&ehbc=2E312F" width="640" height="480"></iframe>
      </div>

    </div>

  )
}

export default Subscribe