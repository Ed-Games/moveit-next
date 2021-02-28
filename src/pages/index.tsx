import {ExperienceBar} from '../components/ExperienceBar'
import Head from 'next/head'
import React from 'react'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/completedChallenges'
import { Countdown } from '../components/countdown'
import { ChallengeBox } from '../components/challengeBox'
import { CountdownProvider } from '../contexts/countdownContext'
import { GetServerSideProps} from 'next'
import { ChallengesProvider } from '../contexts/challengesContext'

interface HomeProps{
  level : number
  currentExperience: number
  challengesCompleted: number

}

export default function Home(props:HomeProps) {
  console.log(props)

  return (
   <ChallengesProvider 
   level ={props.level}
   currentExperience = {props.currentExperience}
   challengesCompleted = {props.challengesCompleted}
   >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.It</title>
        </Head>
        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
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

export const getServerSideProps: GetServerSideProps = async(context) => {
  
  const {level, currentExperience, challengesCompleted} = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
