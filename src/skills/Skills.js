import SkillBar from 'react-skillbars';
import React from 'react';

//Change colours to best suit purple background
const Colors = {
    "bar": {
      "colour": 'blue',
      "hue": 32,
      "saturation": 50,
      "level": {
        "minimum": 30,
        "maximum": 70
      }
    },
    "title": {
      "text": {
        "hue": 45,
        "saturation": {
          "minimum": 70,
          "maximum": 30
        },
        "level": 50
      }
    }
};

const ListOfSkills = [
    {type: "JavaScript", level: 85},
    {type: "React", level: 80},
    {type: "Ruby", level: 70},
    {type: "Rails", level: 70},
    {type: "HTML", level: 85},
    {type: "CSS", level: 80},
];

const Skills = () => {
    return(
        <SkillBar skills={ListOfSkills} colors={Colors}/>
    );
};

export default Skills;