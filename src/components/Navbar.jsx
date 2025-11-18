import logo from "../assets/logo.png"; // make sure logo.png exists in src/assets

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-bold text-white">Basil.</h1>
        </div>
        <div className="space-x-6 hidden md:flex text-white">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
