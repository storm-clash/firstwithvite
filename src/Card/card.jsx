
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

function Card(){

    return(

        <div className={styles.card_Wrapper}>
            <div className={styles.upper_Wraper}></div>
            <div className={styles.down_Wrapper}></div>
        </div>
    );
}


function CardWithImg(){
return(

    <div className={styles.img_card__Wrapper}>
       <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
       <h4>Succefully Submited</h4>
       <p>Your application was submited. In a few moments you will receibe an email with more information</p>
    </div>
);

}

export default Card
export {CardWithImg}