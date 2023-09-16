import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export const fetchTranslations = (files, ns) => {

  const promises = []
  Object.entries(files).forEach((file) => {
    promises.push(file[1]().then(({ default: res }) => {
      const en = file[0].split('/')[2]
      i18next.addResourceBundle(en, ns, {
        ...res
      })
    }))
  })
  let status = 'pending'
  let result
  const suspender = Promise.all(promises).then(res => {
    status = 'success',
      result = res
  }).catch(err => {
    status = 'error'
    result = err
  })

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw new Error('Error loading translations')
      default:
        return result
    }
  }
  return { read }
}



const useTranslationFile = (resource, ns) => {
  resource.read()
  return useTranslation(ns)
}

export default useTranslationFile