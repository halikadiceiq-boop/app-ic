import { Link, Route, Routes } from "react-router-dom";
import { FeatureFlagProvider } from "../flags/FeatureFlagProvider";
import { Button } from "../components/Button/Button";
import { loadFakeDb } from "../data/loader";

function ExperimentIndexPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Experiment Namespace (`/exp/*`)</h2>
      <p className="text-sm text-slate-600">Use this route family to isolate UI experiments.</p>
      <Link className="text-sm font-medium text-blue-700 hover:underline" to="/exp/button-v2">
        Open button v2 experiment
      </Link>
    </section>
  );
}

function ButtonExperimentPage() {
  const data = loadFakeDb("exp_ui_button_v2");

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Experiment: DS Button Small Default</h2>
        <p className="text-sm text-slate-600">
          In `/exp/*`, the flag <code>exp_ui_button_v2</code> is explicitly enabled.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <Button onClick={() => undefined}>Experimental Button</Button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-500">Deterministic Seeded Data</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          {data.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.role})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExperimentNamespacePage() {
  return (
    <FeatureFlagProvider overrides={{ exp_ui_button_v2: true }}>
      <Routes>
        <Route index element={<ExperimentIndexPage />} />
        <Route path="button-v2" element={<ButtonExperimentPage />} />
      </Routes>
    </FeatureFlagProvider>
  );
}
