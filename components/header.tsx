// components/Header.tsx
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* Logo in the header */}
        <Link href="/" passHref>
          <a className="flex items-center">
            <img 
              src="/ediscoveryqc.svg"  // This points to the logo in the public folder
              alt="eDiscoveryQC Logo" 
              className="h-20"  // Adjust the size of the logo
            />
          </a>
        </Link>
        <nav className="space-x-6">
          {/* Menu Items */}
          <Link href="/" passHref>
            <a className="text-blue-700 hover:text-blue-900 transition">Home</a>
          </Link>
          <Link href="/qc-tools" passHref>
            <a className="text-blue-700 hover:text-blue-900 transition">QC Tools</a>
          </Link>
          <Link href="#pricing" passHref>
            <a className="text-blue-700 hover:text-blue-900 transition">Pricing</a>
          </Link>
          <Link href="#contact" passHref>
            <a className="text-blue-700 hover:text-blue-900 transition">Contact</a>
          </Link>
          <Link href="/signup" passHref>
            <a className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">Start Free Trial</a>
          </Link>
          <Link href="/login" passHref>
            <a className="text-blue-700 font-medium hover:underline transition-all duration-200">Sign In</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
