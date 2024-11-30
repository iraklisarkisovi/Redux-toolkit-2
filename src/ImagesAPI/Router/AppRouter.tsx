import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ImagePage from '../ImagePage'
import ImagesPage from '../ImagesPage'
import HomePage from '../HomePage'

const AppRouter:React.FC = () => {
  return (
    <Routes>
      <Route path="images">
        <Route index element={<ImagesPage />} />
        <Route path="id" element={<ImagePage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
  </Routes>
  
  )
}

export default AppRouter
