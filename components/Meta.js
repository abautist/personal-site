import React from 'react'
import Head from 'next/head'

const Meta = () => {
  // TODO: UPDATE
  const metaTitle = 'Agustin Bautista - Full Stack Developer'
  const metaUrl = '/test'
  const metaImage = '/test-image'
  const metaDescription = 'Agustin Bautista\'s personal site'
  const favIconUrl = '/favicon.ico'
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:url" content={metaUrl} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content={metaDescription}
        />
        <link href={favIconUrl} rel='shortcut icon' type='image/x-icon'/>
        <link rel="canonical" href={metaUrl} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:500,700"
        />
        <title>{metaTitle}</title>
      </Head>
    </>
  )
}

export default Meta
