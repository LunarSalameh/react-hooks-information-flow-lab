
export default function Header({mode, onDarkModeClick}) {

  return (
    <header >
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
    </button>
    </header>
  )
}
