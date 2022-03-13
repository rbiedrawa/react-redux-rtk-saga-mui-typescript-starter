import React from 'react'

import { Button, ButtonGroup, IconButton, Link } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

type HeaderProps = {
  currentThemeMode: string
  onChangeThemeClick: () => void
  onChangeLanguage: (lang: string) => void
}

const Header = (props: HeaderProps) => {
  const { t } = useTranslation()

  const { currentThemeMode, onChangeThemeClick, onChangeLanguage } = props

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {t('company.title')}
          </Typography>
          <nav>
            <Link
              component={RouterLink}
              to={'/'}
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
            >
              {t('navigation.links.home')}
            </Link>
            <Link
              component={RouterLink}
              to={'/about'}
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
            >
              {t('navigation.links.about')}
            </Link>
            <ButtonGroup variant="text" color="inherit">
              <Button onClick={() => onChangeLanguage('en')}>🇺🇸</Button>
              <Button onClick={() => onChangeLanguage('pl')}>🇵🇱</Button>
            </ButtonGroup>
            <IconButton sx={{ ml: 1 }} onClick={onChangeThemeClick} color="inherit">
              {currentThemeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
