// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const sliderProps = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  return (
    <div className="planets-slider-bg-container">
      <h1 className="planets-slider-header">PLANETS</h1>
      <Slider {...sliderProps}>
        {planetsList.map(planetsListItem => (
          <div key={planetsListItem.id}>
            <PlanetItem itemData={planetsListItem} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
