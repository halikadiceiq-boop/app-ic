import { Button } from "../components/Button/Button";
import { loadFakeDb } from "../data/loader";
import { useFeatureFlag } from "../flags/FeatureFlagProvider";

export function BaselinePage() {
  const data = loadFakeDb("baseline");
  const isExperimentButtonEnabled = useFeatureFlag("exp_ui_button_v2");

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Baseline Route (`/`)</h2>
        <p className="text-sm text-slate-600">
          Feature flag <code>exp_ui_button_v2</code> controls whether the DS button is visible on this page.
        </p>
      </div>

      {isExperimentButtonEnabled ? (
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-500">Experiment Button</h3>
          <Button onClick={() => undefined}>Experimental Button</Button>
        </div>
      ) : null}

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-500">Mock Data Preview</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          {data.projects.map((project) => (
            <li key={project.id}>
              {project.name} ({project.status})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
