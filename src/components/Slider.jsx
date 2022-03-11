import React from 'react'
/* import React, { useState, useEffect } from 'react'; */
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Slider() {
     



    return (
        <div className='populer-div '>
            <a name="more"></a>
            <h1>Most Populer</h1>


            <div className='house-1'>

                <div className='left-arrow'>

                    <a href=""> <FaArrowCircleLeft color='#764c36 ' size={"4rem"} /></a>

                </div>

                <div className="houses-try">

                    <img src="https://wprentalproperty.com/wp-content/uploads/2020/09/Rental-Property-Investment-Market-2020-In-US.jpg" alt="" />

                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className="houses-try">

                    <img src="https://wprentalproperty.com/wp-content/uploads/2020/09/Rental-Property-Investment-Market-2020-In-US.jpg" alt="" />
                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className="houses-try">

                    <img src="https://wprentalproperty.com/wp-content/uploads/2020/09/Rental-Property-Investment-Market-2020-In-US.jpg" alt="" />
                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className='right-arrow'>

                    <a href=""> <FaArrowCircleRight color='#764c36 ' size={"4rem"} /></a>

                </div>

            </div>
            <hr />
            <h1>New Added</h1>

            <div className='house-1'>
                <div className='left-arrow'>

                    <a href=""> <FaArrowCircleLeft color='#764c36 ' size={"4rem"} /></a>

                </div>

                <div className="houses-try">

                    <img src="https://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Luxury_Home_HD_Photo.jpg" alt="" />
                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className="houses-try">

                    <img src="https://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Luxury_Home_HD_Photo.jpg" alt="" />
                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className="houses-try">

                    <img src="https://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Luxury_Home_HD_Photo.jpg" alt="" />
                    <h3>3 Bedroom House</h3>
                    <h5>Kato Polemidia, Limassol</h5>
                    <p>€500</p>
                    <a href="#" class="button">View Details</a>

                </div>
                <div className='right-arrow'>

                    <a href=""> <FaArrowCircleRight color='#764c36 ' size={"4rem"} /></a>

                </div>



            </div>
        </div>
    )
}

export default Slider