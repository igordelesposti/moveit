import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/igordelesposti.png" alt="Igor Delesposti" />
      <div>
        <strong>Igor Delesposti</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
            Level 1
        </p>
      </div>
    </div>
  )
}