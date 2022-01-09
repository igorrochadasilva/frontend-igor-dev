import React from "react";
interface IExperience{
  year: string
  text: string  
}

const Experience: React.FC <IExperience> = ({year, text}) => (
  <>
  <h3>{year}</h3>
  <p>
    {text}
  </p>
  </>
)

export default Experience;
