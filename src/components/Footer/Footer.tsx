import { FC, useMemo } from 'react'
import { Trans } from 'react-i18next'

const Footer: FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className='container mx-auto mt-8 mb-4 flex flex-col px-4 text-white shadow-2xl [&_a]:text-green-600 [&_a]:hover:underline'>
      <div className='rounded bg-black p-4 text-center'>
        <Trans
          i18nKey='footer.data'
          components={{
            netlifyLink: (
              <a
                href='https://netlify.com'
                target='_blank'
                className='text-green-600 hover:underline'
              />
            ),
            divider: <hr className='my-3 border-gray-400' />,
            modelCopyright: (
              <p className='text-sm'>
                "Retro computer" (
                <a href='https://skfb.ly/6ZxUN' target='_blank'>
                  https://skfb.ly/6ZxUN
                </a>
                ) by Tobalation is licensed under Creative Commons Attribution (
                <a
                  href='http://creativecommons.org/licenses/by/4.0/'
                  target='_blank'
                >
                  http://creativecommons.org/licenses/by/4.0/
                </a>
                )
              </p>
            ),
          }}
          values={{ currentYear: currentYear }}
        />
      </div>
    </div>
  )
}

export default Footer
