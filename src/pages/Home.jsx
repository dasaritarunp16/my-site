export default function Home() {
  const news = [
    { id: 1, title: "Horror hacks!", text: "Hackathon with a $300 prize pool for best coding projects and collaborate in teams or individually to win prizes" },
    { id: 2, title: "Raspberry Pi:", text: "ai vision projects to improve AI skills and build real-world projects." },
    { id: 3,  title: "Guest Speakers",text : "Get insight on career pathways from industry leaders."  },
  ];

  const events = [
    { id: 1, day: "28", month: "Jan", title: "NTHS General Meeting" },
    { id: 2, day: "4", month: "Mar", title: "NTHS General Meeting" },
    { id: 3, day: "22", month: "Apr", title: "NTHS General Meeting" },
  ];

  return (
    <>
      <section className="hero change">
        <div className = "overlay">
          <h1
            className = "hero-title">NTHS
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Current Initiatives</h2>
        
        </div>
        <div className="grid-3">
          {news.map(n => (
            <article key={n.id} className="card">
              <div className="eyebrow">{n.date}</div>
              <h3 style={{margin:'4px 0 8px', fontSize:'1rem'}}>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          
        </div>
        <ul className="event-list">
          {events.map(e => (
            <li key={e.id} className="event-item">
              <div className="event-date">
                <div className="event-day">{e.day}</div>
                <div className="event-month">{e.month}</div>
              </div>
              <div className="event-title">{e.title}</div>
              <a className="event-link" href="#"></a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
