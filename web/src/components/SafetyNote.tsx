export default function SafetyNote() {
  return (
    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="text-red-500 mt-0.5">⚠</div>
        <div className="text-sm text-red-700">
          <strong>Educational content only.</strong> Not medical advice. Consult a qualified clinician—especially with medications, pregnancy or ongoing conditions.
        </div>
      </div>
    </div>
  );
}
