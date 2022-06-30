import React from 'react'
import SignInRight from '../../components/Auth/SignInRight'
import SignupLeft from '../../components/Auth/SignupLeft'
import SignupRight from '../../components/Auth/SignupRight'
import PreAuth from '../../components/Layouts/PreAuth'

const Signin = () => {
  return (
  <PreAuth className={`
  overflow-y-scroll
  md:flex md:flex-row
  flex flex-col
  scrollbar
  `}>
    <SignupLeft/>
    <SignInRight/>
  </PreAuth>
  )
}

export default Signin