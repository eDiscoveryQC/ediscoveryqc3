
export default function Dashboard() {
  const tools = [
    "DAT Summary Tool",
    "Extension Check",
    "Date Gap Analyzer",
    "Duplicate Finder",
    "Email Thread Viewer",
    "Parent-Child Checker",
    "Hash Validator",
    "Metadata Inspector",
    "Native File Checker",
    "Loadfile Validator"
  ];
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">QC Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <a key={tool} href={`/tools/${tool.toLowerCase().replace(/ /g, "-")}`} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{tool}</h2>
            <p className="text-gray-600 mt-2">Open {tool}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
