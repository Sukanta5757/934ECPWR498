import React, {useEffect, useState } from 'react';
import '../benner/Benner.css';
import data from '../benner/CarouseImagel';

const Benner = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index> lastIndex) {
            setIndex(0);
        }
    }, [index, people] );

    useEffect(()=>{
        let slider = setInterval(()=> {
            setIndex(index + 1)
        }, 5000);
        return ()=>{
            clearInterval(slider)
        }
    }, [index])

    return (
        <div className='carousel-container'>
            <div className='carousel-inner'>
                {people.map((item, indexPeople)=> {
                    const {id, image, name, title, quote} = item;
                    let position = "nextSlide";
                    if(indexPeople === index) {
                        position = "actveSlide"
                    }
                    if(indexPeople === index -1 || (index === 0 && indexPeople === people.length - 1)){
                        position = "lastSlide";
                    }
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='carousel_item'/>
                        </article>
                    )
                })}
                
            </div>

            <button className="prev" onClick={()=> setIndex(index - 1)}>
                &#10094;
            </button>
            <button className="next" onClick={()=> setIndex(index + 1)}>
                &#10095; 
            </button>
        </div>
    )
}

export default Benner;