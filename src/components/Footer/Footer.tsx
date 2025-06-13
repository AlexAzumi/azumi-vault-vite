import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
  const { t } = useTranslation()

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className='container mx-auto mt-8 mb-4 flex flex-col px-4 text-white shadow-2xl [&_a]:text-green-600 [&_a]:hover:underline'>
      <p
        className='rounded bg-black p-4 text-center'
        dangerouslySetInnerHTML={{
          __html: `<p>Azumi's code © ${currentYear} | ${t('footer.compiledBy')}</p>
          <hr class="border-gray-400 my-3" />
          <p class="text-sm">"Retro computer" (<a href="https://skfb.ly/6ZxUN" target="_blank">https://skfb.ly/6ZxUN</a>) by Tobalation is licensed under Creative Commons Attribution (<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">http://creativecommons.org/licenses/by/4.0/</a>).</p>`,
        }}
      />
    </div>
  )
}

export default Footer
