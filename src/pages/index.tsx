import {ExperienceBar} from '../components/ExperienceBar'
import Head from 'next/head'
import React from 'react'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/completedChallenges'
import { Countdown } from '../components/countdown'
import { ChallengeBox } from '../components/challengeBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.It</title>
      </Head>
      <ExperienceBar/>

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
    </div>
  )
}
