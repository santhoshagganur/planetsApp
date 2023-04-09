// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <div className="app-container">
        <Slider {...settings}>
          <ul className="planets-bg-container">
            {planetsList.map(eachPlanet => (
              <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
            ))}
          </ul>
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
