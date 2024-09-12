import { useTheme } from "../context/ThemeContext"

function ThemeChange() {
    const {theme, toggleTheme} = useTheme()
  return (
    <div style={{height:"300px" , width:'300px', backgroundColor: theme.background ,color:theme.color}}>
        <button onClick={toggleTheme}>Change</button>
      Change Theme
    </div>
  )
}

export default ThemeChange
