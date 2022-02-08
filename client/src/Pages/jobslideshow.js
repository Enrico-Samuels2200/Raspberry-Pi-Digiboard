import React from 'react';

// function SlidesData(){
//     const animals = ["dog", "beaver", "cat"];
//     console.log("Its done");

//     document.getElementsByClassName('slides').value = animals[1];
//     console.log(document.getElementsByClassName('slides').value);

     
// } 
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const words = ["Hey", "I am", "root"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <div className='info-section'>
              <h4>Junior frontend developer</h4>
              <p id='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id maximus sapien.
              </p>
              <p id='platform'>LinkedIn</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// ReactDOM.render(<Slideshow />, document.getElementById("App"));

export default Slideshow;
