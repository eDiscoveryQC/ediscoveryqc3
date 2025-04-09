
import { useState } from "react";

export default function DatSummaryTool() {
  const [fileData, setFileData] = useState(null);
  const [selectedFields, setSelectedFields] = useState([]);
  const [summary, setSummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    const rows = text.trim().split("\n").map(line => line.split("\u00fe"));
    const headers = rows[0];
    setFileData({ headers, rows });

    // Clear summary whenever a new file is uploaded
    setSummary("");
  };

  const handleFieldToggle = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const generateSummary = () => {
    if (!fileData) return;

    const { headers, rows } = fileData;
    let summaryText = "DAT Summary:

";

    // Helper function to get column index
    const getColumnIndex = (colName) => headers.indexOf(colName);

    // Extracting necessary columns
    const begdocCol = getColumnIndex("BEGDOC");
    const enddocCol = getColumnIndex("ENDDOC");
    const custodianCol = getColumnIndex("CUSTODIAN");
    const nativeCol = getColumnIndex("NATIVELINK");
    const extCol = getColumnIndex("EXTENSION");
    const emailSubjCol = getColumnIndex("EMAIL SUBJECT");
    const parentIdCol = getColumnIndex("PARENTID");
    const createdCol = getColumnIndex("CREATED DATE");
    const modifiedCol = getColumnIndex("LAST MODIFIED DATE");
    const hashCol = getColumnIndex("MD5 HASH");

    const custodians = {};
    const extensions = new Set();
    let nativeCount = 0;
    let emailCount = 0;
    let attachmentCount = 0;
    let createdDates = [];
    let modifiedDates = [];
    let hashValues = 0;
    let docs = rows.length;

    rows.forEach(row => {
      if (row[custodianCol]) custodians[row[custodianCol]] = (custodians[row[custodianCol]] || 0) + 1;
      if (row[nativeCol]) nativeCount++;
      if (row[emailSubjCol]) emailCount++;
      if (row[parentIdCol]) attachmentCount++;
      if (row[extCol]) extensions.add(row[extCol]);
      if (row[createdCol]) createdDates.push(new Date(row[createdCol]));
      if (row[modifiedCol]) modifiedDates.push(new Date(row[modifiedCol]));
      if (row[hashCol]) hashValues++;
    });

    const formatDateRange = (dates) => {
      if (!dates.length) return "N/A";
      const sorted = dates.sort((a, b) => a - b);
      return `${sorted[0].toLocaleDateString()} – ${sorted[sorted.length - 1].toLocaleDateString()}`;
    };

    // Building the summary based on selected fields
    if (selectedFields.includes("Bates Range") && begdocCol !== -1 && enddocCol !== -1) {
      summaryText += `Bates Range: ${rows[0][begdocCol]} – ${rows[docs - 1][enddocCol]}
`;
    }
    if (selectedFields.includes("Custodian Breakdown")) {
      summaryText += `
Unique Custodians: ${Object.keys(custodians).length}`;
      summaryText += Object.entries(custodians).map(([k, v]) => `
  - ${k}: ${v} documents`).join("");
    }
    if (selectedFields.includes("Native Files")) {
      summaryText += `
Documents with Native Files: ${nativeCount}`;
    }
    if (selectedFields.includes("Emails")) {
      summaryText += `
Emails Identified: ${emailCount}`;
    }
    if (selectedFields.includes("Attachments")) {
      summaryText += `
Attachment Documents: ${attachmentCount}`;
    }
    if (selectedFields.includes("File Extensions")) {
      summaryText += `
File Extensions Present: ${Array.from(extensions).join(", ")}`;
    }
    if (selectedFields.includes("Date Range (Created)")) {
      summaryText += `
Date Range (Created): ${formatDateRange(createdDates)}`;
    }
    if (selectedFields.includes("Date Range (Modified)")) {
      summaryText += `
Date Range (Modified): ${formatDateRange(modifiedDates)}`;
    }
    if (selectedFields.includes("Hash Values")) {
      summaryText += `
Hash Values Present: ${hashValues}`;
    }

    setSummary(summaryText);
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "DAT_Summary.txt";
    link.click();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center">DAT File Summary</h1>

      <div className="space-y-4">
        <label className="font-semibold">Upload a DAT file</label>
        <input type="file" accept=".dat" onChange={handleFileUpload} />
      </div>

      {fileData && (
        <div className="space-y-2 mt-6">
          <h2 className="text-lg font-semibold">Select fields to include in your summary:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Bates Range", "Custodian Breakdown", "Native Files", "Emails", "Attachments", "File Extensions", "Date Range (Created)", "Date Range (Modified)", "Hash Values"].map((field) => (
              <div key={field} className="flex items-center space-x-2">
                <input type="checkbox" id={field} checked={selectedFields.includes(field)} onChange={() => handleFieldToggle(field)} />
                <label htmlFor={field}>{field}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {summary && (
        <div className="space-y-4 mt-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <pre className="whitespace-pre-wrap font-mono text-sm">{summary}</pre>
          </div>
          <button onClick={downloadSummary} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Download Summary
          </button>
        </div>
      )}
    </div>
  );
}
