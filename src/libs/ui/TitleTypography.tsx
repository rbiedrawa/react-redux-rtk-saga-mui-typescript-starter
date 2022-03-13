import Typography from '@mui/material/Typography'
import React from 'react'

type PageTypographyProps = {
  value: string
}

const TitleTypography = (props: PageTypographyProps) => (
  <>
    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
      {props.value}
    </Typography>
  </>
)

export default TitleTypography
