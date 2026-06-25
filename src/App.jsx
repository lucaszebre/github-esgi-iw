import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Release management</p>
          <h1>Release Pilot</h1>
        </div>
        <span className="release-badge">v0.1.0 live</span>
      </header>

      <section className="hero-section">
        <div>
          <p className="section-label">Current cycle</p>
          <h2>Prepare, review, and ship releases with confidence.</h2>
        </div>
        <p className="hero-copy">
          Follow every release from feature branches to GitHub tags with clear status, quality
          checks, and deployment readiness.
        </p>
      </section>

      <section className="overview-grid" aria-label="Release overview">
        <article className="summary-card">
          <span className="card-label">Next release</span>
          <strong>v0.2.0</strong>
          <p>Documentation, CI workflow, repository hygiene, and release tracking.</p>
        </article>
        <article className="summary-card">
          <span className="card-label">Quality gate</span>
          <strong>ESLint</strong>
          <p>Every pull request runs the same lint command used locally.</p>
        </article>
        <article className="summary-card">
          <span className="card-label">Git flow</span>
          <strong>dev to main</strong>
          <p>Features land in dev before a release pull request promotes them to main.</p>
        </article>
      </section>

      <section className="release-panel" aria-label="Release readiness checklist">
        <div>
          <p className="section-label">Readiness checklist</p>
          <h2>Before tagging a release</h2>
        </div>
        <ul className="checklist">
          <li>Pull requests reviewed and merged into dev</li>
          <li>GitHub Actions lint workflow passing</li>
          <li>Signed commits visible in the history</li>
          <li>Release pull request merged into main</li>
        </ul>
      </section>
    </main>
  )
}

export default App
