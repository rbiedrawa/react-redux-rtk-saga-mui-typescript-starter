import React from 'react'
import { useTranslation } from 'react-i18next'

import TitleTypography from '../libs/ui/components/TitleTypography'

const AboutPage = () => {
  const { t } = useTranslation()

  return <TitleTypography title={t('about.title')} />
}

export default AboutPage
