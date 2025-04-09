import Link from "next/link";

const tools = [
  { name: "DAT Summary Tool", path: "/tools/dat-summary", emoji: "📄" },
  { name: "MD5 Hash Checker", path: "/tools/md5-checker", emoji: "🧬" },
  { name: "Near-Duplicate Highlighter", path: "/tools/near-dup-highlighter", emoji: "📝" },
  { name: "Email Thread Visualizer", path: "/tools/email-thread-visualizer", emoji: "📧" },
  { name: "Production Gap Finder", path: "/tools/production-gap-finder", emoji: "📉" },
  { name: "Extension Auditor", path: "/tools/extension-auditor", emoji: "📦" },
  { name: "Date Range Verifier", path: "/tools/date-range-verifier", emoji: "📆" },
  { name: "Privilege QC Helper", path: "/tools/privilege-qc", emoji: "🔐" },
  { name: "Parent-Child Checker", path: "/tools/parent-child-checker", emoji: "👪" },
  { name: "Load File Validator", path: "/tools/loadfile-validator", emoji: "✅" }
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">
        <img src="/logo.png" alt="eDiscoveryQC Logo" className="mx-auto mb-10 w-40" />
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">eDiscoveryQC Dashboard</h1>
        <p className="text-center text-gray-600 mb-10">Choose a tool below to begin quality control checks for your review data.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link href={tool.path} key={tool.path}>
              <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer">
                <div className="text-4xl mb-3">{tool.emoji}</div>
                <h2 className="text-lg font-semibold text-blue-800">{tool.name}</h2>
                <p className="text-sm text-gray-500 mt-1">Launch tool</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}