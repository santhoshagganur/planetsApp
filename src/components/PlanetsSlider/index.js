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
    <div className="slider-container" data-testid="planets">
      <div className="app-container">
        <ul className="planets-bg-container">
          <Slider {...settings}>
            {planetsList.map(eachPlanet => (
              <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  )
}

export default PlanetsSlider
