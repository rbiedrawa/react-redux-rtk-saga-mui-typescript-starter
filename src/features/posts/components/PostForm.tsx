import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { PostFormInput } from 'features/posts/types'
import { FormTextField } from 'libs/ui/components/FormTextField'

export type PostFormProps = {
  defaultValues?: PostFormInput
  onSubmitClick(data: PostFormInput): void
}

export const PostForm = (props: PostFormProps) => {
  const { t } = useTranslation()

  const {
    defaultValues = {
      title: '',
      body: '',
    },
    onSubmitClick,
  } = props

  const newPostValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required(t('home.form.validation.title-required'))
      .max(20, t('home.form.validation.title-max', { num: 20 })),
    body: Yup.string().required(t('home.form.validation.body-required')),
  })

  const methods = useForm<PostFormInput>({
    defaultValues,
    resolver: yupResolver(newPostValidationSchema),
  })
  const { handleSubmit, reset, control } = methods

  return (
    <Stack sx={{ pt: 4 }} direction="column" spacing={1} justifyContent="center">
      <FormTextField name="title" label={t('home.form.title')} control={control} />
      <FormTextField name="body" label={t('home.form.body')} control={control} />
      <Button onClick={handleSubmit(onSubmitClick)} variant={'contained'}>
        {t('home.buttons.submit')}
      </Button>
      <Button onClick={() => reset()} variant={'outlined'}>
        {t('home.buttons.reset')}
      </Button>
    </Stack>
  )
}
