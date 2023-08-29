export const Main: React.FC = () => {
  return (
    <>
      <h1>Main</h1>
      <h2>Main</h2>
      <h3>Main</h3>
      <h4>Main</h4>
      <h5>Main</h5>
      <span>Main</span>
      <p>Main</p>
      <span
        onClick={() => {
          window.api.createPopup('0')
        }}
      >
        Click here to open new popup!
      </span>
    </>
  )
}
