import React from "react";

import classes from "./burgerIngredient.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      indredient = <div className={classes.BreadBottom}></div>;
      break;

    case "bread-top":
      indredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      indredient = <div className={classes.Meat}></div>;
      break;

    case "cheese":
      indredient = <div className={classes.Cheese}></div>;
      break;

    case "salad":
      indredient = <div className={classes.Salad}></div>;
      break;

    case "bacon":
      indredient = <div className={classes.Bacon}></div>;
      break;

    default:
      break;
  }
  return ingredient;
};

export default burgerIngredient;
