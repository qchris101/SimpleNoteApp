
export default function Footer () {

    return(
        <footer className="bg-gray-800 text-white py-6 mt-10">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left: Brand or Logo */}
    <div className="text-lg font-semibold mb-4 md:mb-0">
      MyNoteApp © {new Date().getFullYear()}
    </div>

    {/* Center: Links */}
    <div className="flex space-x-4 mb-4 md:mb-0">
      {/* <a href="#" className="hover:text-gray-300">Home</a> */}
      {/* <a href="#" className="hover:text-gray-300">About</a> */}
      <a href="https://qchris101.github.io/Social-Links/" className="hover:text-gray-300">Contact</a>
    </div>

    {/* Right: Socials or Copyright */}
    <div className="text-sm text-gray-400">
      Built with 💻 by Christian
      <a href="https://www.flaticon.com/free-icons/education" title="education icons">, Education icons created by Freepik - Flaticon</a>
    </div>
  </div>
</footer>
    )
}