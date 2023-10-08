import React, { useState } from "react";
import './RandomIconComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

const iconsList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])
library.add(...iconsList)

function RandomIconComponent() {
  const [showIcon, setShowIcon] = useState(false);

  const showRandomIcon = () => {
    setShowIcon(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * iconsList.length);
      const selectedIcon = iconsList[randomIndex];
      setShowIcon(selectedIcon);
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
        {showIcon && <FontAwesomeIcon icon={showIcon} size='3x' />}
      </div>
    </div>
  );
}

export default RandomIconComponent;
