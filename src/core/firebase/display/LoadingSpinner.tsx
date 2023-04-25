import styles from './LoadingSpinner.module.css'

export const LoadingSpinner = () => {
  return (
    <div className={styles.animatePulse}>
      <span>Loading...</span>
    </div>
  )
}
