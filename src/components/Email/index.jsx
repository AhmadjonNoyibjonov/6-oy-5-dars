import React from 'react'
import styles from './index.module.css'

function index() {
  return (
    <div>
        <label className={styles['email_lebel']} htmlFor="email">Email</label>
        <input className={styles['input_email']}  type="email" id='email' placeholder="Enter email..." />
    </div>
  )
}

export default index