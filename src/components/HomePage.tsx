import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../App.module.css'

function HomePage() {
  return (
    <div >
      <h2 style={{padding:"5px 5px", textAlign:"center"}}>ToDo List </h2>
     <button className={Styles.home}> <Link to={'/tasks'} className={Styles.txt}>Task</Link></button><br/> 
     <button className={Styles.home}><Link to={'/about'} className={Styles.txt}>About</Link></button>
    </div>
  )
}

export default HomePage