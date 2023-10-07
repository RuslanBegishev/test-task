import React, { useState } from "react";
import './RandomIconComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBicycle, faBus, faTrain, faRocket, faShip, faPlane, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const icons = [faCar, faBicycle, faBus, faTrain, faRocket, faShip, faPlane, faMotorcycle];

function RandomIconComponent() {
  const [randomIcon, setRandomIcon] = useState(null);

  const showRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    const selectedIcon = icons[randomIndex]
    setRandomIcon(selectedIcon);
 
    setTimeout(() => {
      setRandomIcon(null);
    }, 3000);   
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={showRandomIcon}>
          Show random icon
        </button>
      </div>
      <div>
        {randomIcon && <FontAwesomeIcon icon={randomIcon} size='3x' />}
      </div>
    </div>
  );
}

export default RandomIconComponent;
