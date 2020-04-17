import Meta from './Meta'
const imageUrl = '/ignasi_pattern_s.png'

function Layout({ children }) {
  return (
    <>
      <Meta />
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-image: url('${imageUrl}');
        }
      `}</style>
    </>
  )
}

export default Layout
