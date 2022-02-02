import React from 'react';
import './style/display_dashboard.css';
import Slideshow from './jobslideshow';

export default function Display() {
    return (
        <div className='body'>
            <div className='left-container'>
                <div className='left-panel'>
                    <div className='media-outlet'>
                        {/* <iframe src="https://www.youtube.com/embed/9H0OhMUDGzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </div>


                    <div className='schedule-section'>
                        {/* schedule div code */}
                        
                        <div className='bottom-panel'>
                            <div className='data-display'>
                                <div className='day-description'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
                                        maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus
                                        purus, finibus tristique sem id, consequat convallis odio. Duis eget
                                        lectus ac justo consequat ultricies.
                                    </p>
                                </div>
                                <div className='day-schedule'>
                                    <h2>Schedule</h2>
                                    <ul>
                                        <li>Google meets at 10h30am</li>
                                        <li>Lunch at 12h00pm</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className='forecast-display'>
                        <div className='weather-item'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/583/443/non_2x/cloud-and-rain-icon-vector.jpg' />
                            <h4>Monday</h4>
                            <p>24°-25°</p>
                            <p>Thunder Showers</p>
                        </div>

                        <div className='weather-item'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/583/443/non_2x/cloud-and-rain-icon-vector.jpg' />
                            <h4>Monday</h4>
                            <p>24°-25°</p>
                            <p>Thunder Showers</p>
                        </div>

                        <div className='weather-item'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/583/443/non_2x/cloud-and-rain-icon-vector.jpg' />
                            <h4>Monday</h4>
                            <p>24°-25°</p>
                            <p>Thunder Showers</p>
                        </div>

                        <div className='weather-item'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/583/443/non_2x/cloud-and-rain-icon-vector.jpg' />
                            <h4>Monday</h4>
                            <p>24°-25°</p>
                            <p>Thunder Showers</p>
                        </div>

                        <div className='weather-item'>
                            <img src='https://static.vecteezy.com/system/resources/previews/000/583/443/non_2x/cloud-and-rain-icon-vector.jpg' />
                            <h4>Monday</h4>
                            <p>24°-25°</p>
                            <p>Thunder Showers</p>
                        </div>
                    </div>

                </div>
            </div>
                
            <div className='right-container'>
                <div className='social-display'>
                    <div className='se'>
                        <h2>Social Media</h2>
                    </div>

                    <div className='social-item'>
                        <div className='icon'>
                            <img src='https://wallpaperaccess.com/full/368244.jpg' />
                        </div>
                        <div className='data'>
                            <h4>MyNameIsEarl</h4>
                            <p>She's my age</p>
                        </div>
                    </div>

                    <div className='social-item'>
                        <div className='icon'>
                            <img src='data:image/jpeg;base64,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' />
                        </div>
                        <div className='data'>
                            <h4>I am Daki</h4>
                            <p>Bro I'm 12</p>
                        </div>
                    </div>

                    <div className='social-item'>
                        <div className='icon'>
                            <img src='https://wallpaperaccess.com/full/368244.jpg' />
                        </div>
                        <div className='data'>
                            <h4>MyNameIsEarl</h4>
                            <p>I don't care</p>
                        </div>
                    </div>

                    <div className='social-item'>
                        <div className='icon'>
                            <img src='https://wallpaperaccess.com/full/368244.jpg' />
                        </div>
                        <div className='data'>
                            <h4>MyNameIsEarl</h4>
                            <p>She's my age</p>
                        </div>
                    </div>

                    <div className='social-item'>
                        <div className='icon'>
                            <img src='https://wallpaperaccess.com/full/368244.jpg' />
                        </div>
                        <div className='data'>
                            <h4>MyNameIsEarl</h4>
                            <p>She's my age</p>
                        </div>
                    </div>
                </div>

                <div className='job-section'>
                    {/* joblistings div code */}
                    <h4>Job Listings</h4>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus purus, finibus tristique sem id, consequat convallis odio. Duis eget lectus ac justo consequat ultricies. Maecenas convallis mi ultrices lectus vulputate, sit amet egestas neque porta. Pellentesque finibus venenatis elit, ut pulvinar urna vestibulum viverra. Pellentesque finibus eros id egestas porta. Donec nibh odio, aliquet ut interdum eu, facilisis non risus. In egestas sagittis justo, non euismod urna interdum sed. Proin et urna sed turpis lobortis suscipit.</p> */}
                    <Slideshow />
                </div>
            </div>
        </div>            
    )};       