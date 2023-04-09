// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <li className="planet-container">
      <h1 className="app-heading"> PLANETS </h1>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name"> {name} </h1>
      <p className="description"> {description} </p>
    </li>
  )
}

export default PlanetItem
