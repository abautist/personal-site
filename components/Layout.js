import Meta from './Meta'

function Layout({ children }) {
  return (
    <>
      <Meta />
      {children}
      {/* <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-image: url(/public/ignasi_pattern_s.png);
        }
      `}</style> */}
    </>
  )
}

export default Layout
