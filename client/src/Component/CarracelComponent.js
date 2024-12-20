import React, { useState, useEffect } from "react";
import styles from './carracel.module.css'



const CarracelComponent = ({ slides }) => {
    const [carracelPage, setCarracelPage] = useState(0);


    const nextSlide = () => {
        setCarracelPage((prevIndex) => (prevIndex + 1) % slides.length);


    }
    const prevSlide = () => {
        setCarracelPage((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }


    const arrayTestItems = 20;
    let finalArray = [];
    for (let i = 0; i <= arrayTestItems; i++) {
        finalArray.push(i + "");
    }

    const Items = () => {
        return finalArray.map((x) => {
            return (
                // <div>
                <div className={styles.cardImage}>{x}</div>

                //</div>

            )
        })
    }
    useEffect(() => {

    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.cardCarracel}>
                <Items />
                <button onClick={nextSlide}>next</button>
                <button onClick={prevSlide}>back</button>
            </div>
        </div>
    )
}
export default CarracelComponent;