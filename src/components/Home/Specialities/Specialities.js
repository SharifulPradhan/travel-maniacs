import React from 'react';
import './Specialities.css'
import SpecialitiesCard from '../SpecialitiesCard/SpecialitiesCard';
import Feature1 from '../../../images/feature-1.jpg'
import Feature2 from '../../../images/feature-2.jpg'
import Feature3 from '../../../images/feature-3.jpg'
import Feature4 from '../../../images/feature-4.jpg'
import WorldWide from '../../../images/worldwide.png'
import Trusted from '../../../images/trusted.png'
import Experience from '../../../images/experience.png'
import Satisfied from '../../../images/satisfied.png'



const Specialities = () => {
  const specialitiesCollection = [{
    id: 1,
    img: Feature1,
    icon: WorldWide,
    description: '2000+ Our Worldwide Guide'
  },{
    id: 2,
    img: Feature2,
    icon: Trusted,
    description: '100% Trusted Tour Agency'
  },{
    id: 3,
    img: Feature3,
    icon: Experience,
    description: '12+ Years of Travel Experience'
  },{
    id: 4,
    img: Feature4,
    icon: Satisfied,
    description: '98% of Our Travelers are Happy'
  },]
  return (
    <section style={{height:'700px'}}>
      <div className="pt-5">
      <h6 className="text-secondary">Travel Maniacs Specials</h6>
      <h1>Why Travel with Travel Maniacs?</h1>
      </div>
      <div className="row align-items-center justify-content-center">
        {
          specialitiesCollection.map(speciality => <SpecialitiesCard speciality={speciality} key={speciality.id}></SpecialitiesCard>)
        }
      </div>
    </section>
  );
};

export default Specialities;