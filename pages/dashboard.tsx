
import { useState } from 'react';

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
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center mb-4">eDiscoveryQC Tool Dashboard</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full p-3 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(({ name, icon, path }) => (
          <a key={name} href={`/tools/${path}`} className="p-6 bg-blue-50 hover:bg-white rounded-xl shadow text-center border border-blue-200 transition">
            <div className="text-4xl mb-2">{icon}</div>
            <h2 className="text-lg font-semibold text-blue-800">{name}</h2>
            <p className="text-sm text-gray-600 mt-1">Open tool</p>
          </a>
        ))}
      </div>
    </main>
  );
}
