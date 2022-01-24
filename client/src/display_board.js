import React from 'react';
import './style/display_dashboard.css';

export default function Display() {
    return (
        <div className='body'>
            <div className='display'>
                <div className='dysweather'>
                    <div className='dyoutube'>
                    {/* youtube div code */}
                        <iframe className='youtb' src="https://www.youtube.com/embed/9H0OhMUDGzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='dschedule'>
                    {/* schedule div code */}
                        <div className='wholeday'>
                            <div className='dtitleday'>
                                <h2>Founders Day</h2>
                            </div>
                            <div className='bottomwholeday'>
                                <div className='ddaydescription'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus purus, finibus tristique sem id, consequat convallis odio. Duis eget lectus ac justo consequat ultricies. 
                                    </p>
                                </div>
                                <div className='dlistschedule'>
                                    <h3>Schedule</h3>
                                    <ul>
                                        <li>Google meets at 10h30am</li>
                                        <li>Lunch at 12h00pm</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>    
                    </div>
                    </div>
                    <div className='dweather'>
                    {/* weather div code */}
                    </div>
                </div>
                <div className='dsocialjob'>
                    <div className='dsocial'>
                    {/* social tweets div code */}
                        <h3 className='socialHeading'>Social Tweets</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus purus, finibus .</p>
                    </div>
                    <div className='djoblist'>
                    {/* joblistings div code */}
                        <h3 className='jobHeading'>Job Listings</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus purus, finibus tristique sem id, consequat convallis odio. Duis eget lectus ac justo consequat ultricies. Maecenas convallis mi ultrices lectus vulputate, sit amet </p>
                    </div>
                </div>
            </div>            
    )};       