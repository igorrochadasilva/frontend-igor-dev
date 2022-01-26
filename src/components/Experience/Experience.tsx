import React from "react";
interface IExperience{
  year: string
  text: string[]  
}

const Experience: React.FC <IExperience> = ({year, text}) => {
  
  const renderExperience = () => {
    console.log('init renderExperience')
    console.log(text)
    return text.map((item, i) => {        
        return <p key={i}>{item}</p>      
    })
  }

  return(
    <>
      <h3>{year}</h3>
      {renderExperience()}
    </>
  )

}

export default Experience;
