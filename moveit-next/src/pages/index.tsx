import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className="div">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className="div">
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
