import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const tools = [
    { name: "DAT Summary Tool", icon: "📄", path: "dat-summary" },
    { name: "Extension Check", icon: "🧩", path: "extension-check" },
    { name: "Date Gap Analyzer", icon: "📆", path: "date-gap-analyzer" },
    { name: "Duplicate Finder", icon: "🔁", path: "duplicate-finder" },
    { name: "Email Thread Viewer", icon: "✉️", path: "email-thread-viewer" },
    { name: "Parent-Child Checker", icon: "👪", path: "parent-child-checker" },
    { name: "Hash Validator", icon: "🔐", path: "hash-validator" },
    { name: "Metadata Inspector", icon: "🔎", path: "metadata-inspector" },
    { name: "Native File Checker", icon: "🗃️", path: "native-file-checker" },
    { name: "Loadfile Validator", icon: "📑", path: "loadfile-validator" }
  ];

  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 shadow-lg">
          <div className="text-center">
            <img src="/ediscoveryqclogo.svg" alt="eDiscoveryQC Logo" className="h-16 mx-auto" />
            <h2 className="text-xl font-bold text-blue-900 mt-2">Dashboard</h2>
          </div>
          <nav className="mt-8">
            <ul>
              <li><Link href="/dashboard"><a className="block py-2 text-blue-700">Home</a></Link></li>
              <li><Link href="/profile"><a className="block py-2 text-blue-700">Profile</a></Link></li>
              <li><Link href="/settings"><a className="block py-2 text-blue-700">Settings</a></Link></li>
              <li><Link href="/logout"><a className="block py-2 text-blue-700">Logout</a></Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-bold text-blue-900">Welcome back, Joseph 👋</h1>
                <p className="text-gray-600 mt-2">What would you like to QC today?</p>
              </div>
              <div>
                {/* Profile Settings */}
                <Link href="/profile">
                  <a className="bg-blue-700 text-white px-4 py-2 rounded-lg">Profile</a>
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-10">
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(({ name, icon, path }) => (
                <div key={name} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Link href={`/tools/${path}`}>
                    <a className="text-center block">
                      <div className="text-4xl mb-2">{icon}</div>
                      <h2 className="text-lg font-semibold text-blue-800">{name}</h2>
                      <p className="text-sm text-gray-600 mt-1">Open tool</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
