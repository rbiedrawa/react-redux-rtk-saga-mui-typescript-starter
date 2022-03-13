import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleTypography from "../libs/ui/TitleTypography";

const AboutPage = () => {
  const { t } = useTranslation()

  return <TitleTypography value={t('about.title')} />
}

export default AboutPage
