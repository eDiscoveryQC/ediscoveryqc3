
export default function Dashboard() {
  const tools = [
    { name: "DAT Summary Tool", path: "dat-summary" },
    { name: "Extension Check", path: "extension-check" },
    { name: "Date Gap Analyzer", path: "date-gap-analyzer" },
    { name: "Duplicate Finder", path: "duplicate-finder" },
    { name: "Email Thread Viewer", path: "email-thread-viewer" },
    { name: "Parent-Child Checker", path: "parent-child-checker" },
    { name: "Hash Validator", path: "hash-validator" },
    { name: "Metadata Inspector", path: "metadata-inspector" },
    { name: "Native File Checker", path: "native-file-checker" },
    { name: "Loadfile Validator", path: "loadfile-validator" }
  ];

  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center mb-6">eDiscoveryQC Tool Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(({ name, path }) => (
          <a key={name} href={`/tools/${path}`} className="p-6 bg-blue-50 hover:bg-white rounded-xl shadow text-center border border-blue-200 transition">
            <h2 className="text-lg font-semibold text-blue-800">{name}</h2>
            <p className="text-sm text-gray-600 mt-2">Open tool</p>
          </a>
        ))}
      </div>
    </main>
  );
}
