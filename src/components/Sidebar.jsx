import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <section className='col-span-1 bg-slate-800'>
     <Link to="buttons"><button>Botones</button></Link>
      </section>
    </>
  )
}

export default Sidebar