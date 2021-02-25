
import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import {CountdownContext} from '../contexts/CountdownContext';


let countdownTimeOut: NodeJS.Timeout;

export function Countdown(){
   const {minutes,
    seconds, 
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
} = useContext(CountdownContext)
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                 <button 
                    disabled
                    className={styles.CountdownButton}
                >
                    Ciclo encerrado
                </button>
            ):(
                <>
                     {/* if ternario  */}
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                            onClick = {resetCountdown}
                        >
                        Abandonar ciclo
                    </button>
                    ):(
                        <button 
                        type="button" 
                        className={styles.CountdownButton}
                        onClick = {startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                    ) }
                {/* tag sem elemento = fragment do react     */}
                </>
            )}

           
        </div>
    );
}