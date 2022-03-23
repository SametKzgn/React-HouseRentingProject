import React from 'react'
import { useEffect } from 'react';
/* import React, { useState, useEffect } from 'react'; */
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Slider() {
    let slides;
    let itemWidth;

    const scrollStart = (slides) => {
        return slides.scrollLeft === 0;
    }

    const scrollEnd = (slides) => {
        return slides.scrollLeft + slides.offsetWidth === slides.scrollWidth;
    }


    const nextItem = () => {
        slides = document.getElementById(`slider`);
        itemWidth = document.querySelector('.slide').offsetWidth;
        console.log(itemWidth);
        if (scrollEnd(slides)) {
            slides.scrollLeft = 0;
        } else {
            slides.scrollLeft += itemWidth + 100;
        }


    }

    const prevItem = () => {
        slides = document.getElementById(`slider`);
        itemWidth = document.querySelector('.slide').offsetWidth;

        if (scrollStart(slides)) {
            slides.scrollLeft += slides.scrollWidth;
        } else {
            slides.scrollLeft -= itemWidth;
        }
    }



    return (
        <div className='populer-div '>
            <a name="more"></a>
            <h1>Most Populer</h1>


            <div className='house-1'>
                <div className='left-arrow' onClick={() => prevItem()}>

                    <a > <FaArrowCircleLeft color='#764c36 ' size={"4rem"} /></a>

                </div>
                <div className="innerhouse" id='slider'>



                    <div className="houses-try slide">
                        
                        <img src="https://wallpapercave.com/wp/wp8491797.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/dreamy-outdoor-covered-patio-with-stone-fireplace-picture-id875189894?k=20&m=875189894&s=612x612&w=0&h=b9hhgGLmbJtdS98YZDe2tZuYnTaxa4K-CSVCnf40blM=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/woman-on-laptop-in-gorgeous-villa-united-states-virgin-islands-picture-id1269579602?k=20&m=1269579602&s=612x612&w=0&h=iIPNRicgIyxYGUIIyQe0nRWlRa2_aFyiwsMDM0uGVt4=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/perfect-traditional-living-room-with-beautiful-decor-picture-id480775514?k=20&m=480775514&s=612x612&w=0&h=pGrfkyCZ8tjlvD9Gw2lW3p9d4sFIu_oBix0MmW2_4oE=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>

                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/modern-livingroom-cottage-picture-id182913963?k=20&m=182913963&s=612x612&w=0&h=UBee_JPtXRaRiFRQJydIXMhHyQKQ5idCMKRWlTvTZT8=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://media.istockphoto.com/photos/luxury-tropical-villa-interior-view-from-living-room-to-outside-picture-id821536932?k=20&m=821536932&s=612x612&w=0&h=RfMxxScD8IWhvETlTAtEEZnLVKoITMdcTix3TENXXKQ=" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                </div>


                <div className='right-arrow' onClick={() => nextItem()}>

                    <a> <FaArrowCircleRight color='#764c36 ' size={"4rem"} /></a>

                </div>

            </div>

            <hr />
            <h1>New Added</h1>

            <div className='house-1'>
                <div className='left-arrow' onClick={() => prevItem()}>

                    <a> <FaArrowCircleLeft color='#764c36 ' size={"4rem"} /></a>

                </div>
                <div className="innerhouse" id='slider'>



                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>

                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>
                    </div>
                    <div className="houses-try slide">

                        <img src="https://wallpapercave.com/wp/wp7012084.jpg" alt="" />

                        <h3>3 Bedroom House</h3>
                        <h5>Kato Polemidia, Limassol</h5>
                        <p>€500</p>
                        <a href="#" class="button">View Details</a>

                    </div>
                </div>


                <div className='right-arrow' onClick={() => nextItem()}>

                    <a> <FaArrowCircleRight color='#764c36 ' size={"4rem"} /></a>

                </div>


            </div>

        </div>

    )
}

export default Slider