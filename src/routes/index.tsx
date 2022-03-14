import { Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

const AppRoutes = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  </>
)

export default AppRoutes
