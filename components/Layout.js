function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-image: url(/public/ignasi_pattern_s.png);
        }
      `}</style>
    </div>
  )
}

export default Layout
