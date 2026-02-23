import { Link, Navigate, Route, Routes } from "react-router-dom";
import { BaselinePage } from "../routes/BaselinePage";
import { ExperimentNamespacePage } from "../routes/ExperimentNamespacePage";

export function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-8 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-semibold">Simulation App</h1>
          <nav className="flex gap-4 text-sm">
            <Link className="hover:underline" to="/">
              Baseline
            </Link>
            <Link className="hover:underline" to="/exp">
              Experiments
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-8 py-8">
        <Routes>
          <Route path="/" element={<BaselinePage />} />
          <Route path="/exp/*" element={<ExperimentNamespacePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  );
}
