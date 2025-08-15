import { useState, useEffect }  from "react"



export default function ThemeToggle() {

    const [ theme, setTheme ] = useState ("lofi") 
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
    <label className="swap swap-rotate mx-2.5 mb-2">
      
      <input
  
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "lofi")}
        checked={theme === "dark"}
      />

      <svg
        className="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.657l-1.414 1.415-1.415-1.415 1.415-1.414zM12 4a1 1 0 011 1v2a1 1 0 01-2 0V5a1 1 0 011-1zM17.657 5.64l1.415-1.414 1.415 1.414-1.415 1.415zM4 12a1 1 0 011-1h2a1 1 0 010 2H5a1 1 0 01-1-1zm13 0a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zm-6.364 6.364l-1.415 1.415-1.415-1.415 1.415-1.414zM12 20a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm6.364-2.636l1.415 1.415-1.415 1.415-1.415-1.415z" />
      </svg>

      
      <svg
        className="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13.64A9 9 0 1110.36 2.36 7 7 0 0021.64 13.64z" />
      </svg>
    </label>
  );
}