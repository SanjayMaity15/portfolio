import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AppLayout from './components/Layout/appLayout/AppLayout'
import Skills from './page/skills/Skills'
import Project from './page/project/Project'
import Contact from './page/contact/Contact'
import Home from './page/Home/Home'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />}/>
        <Route path='/skill' element={<Skills />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<ErrorPage />} */}
      </Route>
    </Routes>
  )
}

export default App


