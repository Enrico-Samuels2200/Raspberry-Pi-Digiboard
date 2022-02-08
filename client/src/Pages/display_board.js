import React from 'react';
import './style/display_dashboard.css';
import Slideshow from './jobslideshow';

export default class Display extends React.Component {
    constructor() {
        super();
        this.state = ({
            data: [],
            title: "",
            type: ""
        });
    };

    // Once the code is placed/mounted in the DOM the code will execute.
    componentDidMount = () => {
        this.fetch_data('weather', process.env.REACT_APP_WEATHER_API);
        this.fetch_data('media', process.env.REACT_APP_MEDIA_API);
    };

    // Makes GET request to the specifies API
    fetch_data = async (var_name, api_link) => {
        try {
            let raw = await fetch(api_link);
            let data = await raw.json();
            
            /* 
                Creates a key and value pair using: var_name as key and api_link ad value in
                the componennts state(this.state).
            */
            this.setState({
                [var_name]: data
            });    
        } catch (err) {
            console.log(err);
        }
    };
    
    // Returns html elements to the DOM and display them with relevant data.
    weather_constructor = () => {
        let weather_item = this.state.weather;
        let item_array = [];

        // Creates html element for each item in weather item(key value 'weather' in this.state).
        for (const i in weather_item) {
            item_array.push([
                <div className='weather-item'>
                    <img src={weather_item[i].icon} />
                    <h4>{weather_item[i].day}</h4>
                    <p>{weather_item[i].temperature}°</p>
                    <p>{weather_item[i].weather_type}</p>
                </div>
            ]);
        };

        // Once item_array has all the weather items the array is returned to the renderer.
        return item_array;
    };

    // Returns html elements to the DOM and display them with relevant data.
    media_constructor = () => {
        let media_item = this.state.media;
        let item_array = [];

        // Creates html element for each item in media item(key value 'media' in this.state).
        for (const i in media_item) {
            item_array.push([
                <div className='social-item'>
                    <div className='icon'>
                        <img src={media_item[i].profile_picture} />
                    </div>
                    <div className='data'>
                        <h4>{media_item[i].name}</h4>
                        <p>{media_item[i].tweet}</p>
                    </div>
                </div>
            ]);
        };

        // Once item_array has all the weather items the array is returned to the renderer.
        return item_array;
    };

    render() {
        return (
            <div className='body'>
                <button onClick={() => this.a()}>Click me</button>
                <div className='left-container'>
                    <div className='left-panel'>
                        <div className='media-outlet'>
                            {/* <iframe src="https://www.youtube.com/embed/9H0OhMUDGzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </div>


                        <div className='schedule-section'>
                            {/* schedule div code */}
                            
                            <div className='bottom-panel'>
                                <h1>hh</h1>
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
                            {this.weather_constructor()}
                        </div>

                    </div>
                </div>
                    
                <div className='right-container'>
                    <div className='social-display'>
                        <div className='se'>
                            <h2>Social Media</h2>
                        </div>
                        {this.media_constructor()}
                    </div>

                    <div className='job-section'>
                        {/* joblistings div code */}
                        <h4>Job Listings</h4>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien. Vivamus finibus eget dui sit amet ultrices. Ut metus purus, finibus tristique sem id, consequat convallis odio. Duis eget lectus ac justo consequat ultricies. Maecenas convallis mi ultrices lectus vulputate, sit amet egestas neque porta. Pellentesque finibus venenatis elit, ut pulvinar urna vestibulum viverra. Pellentesque finibus eros id egestas porta. Donec nibh odio, aliquet ut interdum eu, facilisis non risus. In egestas sagittis justo, non euismod urna interdum sed. Proin et urna sed turpis lobortis suscipit.</p> */}
                        <Slideshow />
                    </div>
                </div>
            </div>
        );
    };
};