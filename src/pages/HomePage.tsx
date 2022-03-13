import React from 'react'

import '../App.css'
import { useTranslation } from 'react-i18next'
import TitleTypography from '../libs/ui/TitleTypography'
import PostContainer from '../containers/PostContainer'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleTypography value={t('home.title')} />
      <PostContainer />
    </>
  )
}

export default HomePage
