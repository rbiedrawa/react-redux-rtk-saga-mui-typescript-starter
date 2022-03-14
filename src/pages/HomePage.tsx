import React from 'react'
import { useTranslation } from 'react-i18next'

import '../App.css'
import { PostContainer } from '../features/posts'
import TitleTypography from '../libs/ui/components/TitleTypography'

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
