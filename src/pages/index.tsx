import Head from 'next/head';
import {GetServerSideProps} from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';



import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
  level : number,
  currentExperience : number,
  challengesCompleted : number,
}

export default function Home(props: HomeProps ) {


  return (

    <ChallengesProvider 
      level={props.level}
     currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// funcao para manipular quais dados sao repassados para a camada fron-end(cliente)
  export const getServerSideProps: GetServerSideProps = async(ctx) =>{
    //chamada api
    const user = {
      level : 1,
      currentExperience:50,
      challengesCompleted : 2,
    }

    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    return{
      props : {
        // conversoes de string para numeros
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      }
    }
  }