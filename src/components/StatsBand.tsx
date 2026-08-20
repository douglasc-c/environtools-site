import type { AboutStat } from '../types/siteContent'

interface StatsBandProps {
  stats: AboutStat[]
}

function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat) => (
            <div className="col-12 col-md" key={stat.label}>
              <div className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBand
