import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <div>
        <header style={headerStyle} className={styles.header}>todos</header>
        <p>Items will persist in the browser local storage</p>
    </div>
  )
}
