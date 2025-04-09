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
  const filteredTools = tools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-900">Welcome back, Joseph 👋</h1>
          <p className="text-gray-600 mt-1">What would you like to QC today?</p>
        </div>
        <div className="max-w-lg mx-auto mb-10">
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(({ name, icon, path }) => (
            <a key={name} href={`/tools/${path}`} className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow hover:shadow-md border border-blue-200 transition text-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h2 className="text-lg font-semibold text-blue-800">{name}</h2>
              <p className="text-sm text-gray-600 mt-1">Open tool</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}