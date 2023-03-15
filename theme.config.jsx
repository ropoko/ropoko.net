/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: 'linear-gradient(78deg, rgba(215,229,18,1) 0%, rgba(229,149,18,1) 16%)',
      }}
      >
        {children}
      </h1>
    )
  },
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '6rem' }}>
      {new Date().getFullYear()} © Ropoko.
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  readMore: '[ Read More ]'
}
