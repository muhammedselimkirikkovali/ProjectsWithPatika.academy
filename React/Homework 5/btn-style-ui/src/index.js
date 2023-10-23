import React from 'react'
import styles from './styles.module.css'

export const Btn = () => {
  return (
    <div>
      <button className={styles.primary}>Primary Button</button>
      <button className={styles.default}>Default Button</button>
      <button className={styles.dashed}>Dashed Button</button>
      <button className={styles.text}>Text Button</button>
      <button className={styles.link}>Link Button</button>
    </div>
  )
}
