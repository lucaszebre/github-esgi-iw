function SummaryCard({ label, title, description }) {
  return (
    <article className="summary-card">
      <span className="card-label">{label}</span>
      <strong>{title}</strong>
      <p>{description}</p>
    </article>
  )
}

export default SummaryCard
