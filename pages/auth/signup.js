import React from 'react'
import SignupLeft from '../../components/Auth/SignupLeft'
import SignupRight from '../../components/Auth/SignupRight'
import PreAuth from '../../components/Layouts/PreAuth'

const Signup = () => {
  return (
  <PreAuth className={`
  overflow-y-scroll
  md:flex md:flex-row
  flex flex-col
  scrollbar
  `}>
    <SignupLeft/>
    <SignupRight/>
  </PreAuth>
  )
}

export default Signup