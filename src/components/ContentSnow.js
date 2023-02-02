import React from 'react'
import Snowfall from 'react-snowfall'


const Snow = () => {
  return (

    <Snowfall
  // Changes the snowflake color
  color="#48adfa"
  // Applied to the canvas element
  style={{ background: '' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={30}
/>

  );
};





export default Snow;
