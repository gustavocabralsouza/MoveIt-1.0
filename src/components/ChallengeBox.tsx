import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

const message = {
    startMessage: " Vamoos !!! Finaliza o ciclo para receber um desafio :)",
    messageSucceeded:"Parabéns! E aí preparado para mais uma conquista? Iniciei um novo ciclo!",
    messageFailed: "Que Pena! Da próxima você consegue. Iniciei um novo ciclo!"
 }

 let messageContext = message.startMessage;


export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext)
    const {autoScrollTop} = useContext(CountdownContext);


    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
        messageContext = message.messageSucceeded;
        autoScrollTop();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
        messageContext = message.messageFailed;
        autoScrollTop();
    }

    return(
        <div className={styles.chalengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick= {handleChallengeFailed}
                        >
                        Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                         >
                         Completei
                        </button>
                    </footer>
                </div>
            ) :(
                 <div className={styles.challengeNotActive}>
                 <strong>{messageContext}</strong>
                 <p>
                     <img src="icons/level-up.svg" alt="Level-Up"/>
                     Avance de level completando desafios
                 </p>
             </div>
            )}
        </div>
    )
}