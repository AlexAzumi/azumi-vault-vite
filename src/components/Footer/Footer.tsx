import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
  const { t } = useTranslation()

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className='container mx-auto mt-8 mb-4 px-4 text-white shadow-2xl'>
      <p
        className='rounded bg-black p-4 text-center'
        dangerouslySetInnerHTML={{
          __html: `Azumi's code © ${currentYear} | ${t('footer.compiledBy')}`,
        }}
      />
    </div>
  )
}

export default Footer
