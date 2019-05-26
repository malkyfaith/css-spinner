import React from 'react'
import styles from './styles.css'

const Ripple = () => (
  <>
    <style>${`${styles}`}</style>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
)

export default Ripple
