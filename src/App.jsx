import { useState } from 'react'

const C = { ink: '#0f172a', sub: '#475569', line: '#e2e8f0', bg: '#f8fafc', brand: '#4f46e5', brandSoft: '#eef2ff', ok: '#15803d', warn: '#b45309', bad: '#b91c1c' }
const statusColor = { Resolved: C.ok, Open: C.bad, 'In progress': C.warn }
const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 24px' }
const card = { background: '#fff', border: `1px solid ${C.line}`, borderRadius: 16, padding: 24 }
const btn = { padding: '12px 20px', borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: 'pointer', border: 0, textDecoration: 'none', display: 'inline-block' }
const primary = { ...btn, background: C.brand, color: '#fff' }
const ghost = { ...btn, background: '#fff', color: C.ink, border: `1px solid ${C.line}` }
const eyebrow = { color: C.brand, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }
const h2 = { fontSize: 36, margin: '8px 0 12px', letterSpacing: -0.5 }

const seed = [
  { id: 1, caller: 'Priya Sharma', issue: 'Billing charged twice', status: 'Resolved', time: '0:48', suggestion: 'Refund duplicate charge and send confirmation.' },
  { id: 2, caller: 'James Lee', issue: 'Cannot reset password', status: 'Open', time: '1:12', suggestion: 'Verify identity, then trigger a reset link.' },
  { id: 3, caller: 'Arjun Rao', issue: 'Internet keeps dropping', status: 'In progress', time: '2:05', suggestion: 'Run line diagnostics, schedule router swap.' },
]

const features = [
  ['Answers in seconds', 'Every inbound call is picked up instantly, 24/7 — no hold music, no missed customers.'],
  ['Multilingual voice', 'Natural conversations in English, Hindi, Telugu and more, switching languages mid-call.'],
  ['AI resolution', 'Understands the issue, suggests the fix and resolves common problems end-to-end.'],
  ['Perfect call notes', 'Summary, sentiment and key details logged automatically after every call.'],
  ['CRM & helpdesk sync', 'Push tickets and outcomes to your CRM, WhatsApp or Sheets the moment a call ends.'],
  ['Smart escalation', 'Hands complex cases to a human agent with full context — nobody repeats themselves.'],
]

const plans = [
  ['Starter', '₹3/min', 'For small teams getting started', ['Instant call answering', 'Call summaries', 'Email support']],
  ['Growth', '₹5/min', 'For growing support teams', ['Everything in Starter', 'Multilingual voices', 'CRM integrations'], true],
  ['Enterprise', 'Custom', 'For high-volume contact centers', ['Everything in Growth', 'Dedicated numbers', 'SLA & SSO']],
]

function Nav() {
  return (
    <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.line}`, zIndex: 10 }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: C.ink, fontWeight: 800, fontSize: 20 }}>
          <span style={{ width: 32, height: 32, borderRadius: 8, background: C.brand, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 16 }}>C</span>
          CallSolve AI
        </a>
        <nav style={{ display: 'flex', gap: 28, fontSize: 15 }}>
          {[['Features', '#features'], ['How it works', '#how'], ['Dashboard', '#dashboard'], ['Pricing', '#pricing']].map(([l, h]) => (
            <a key={h} href={h} style={{ color: C.sub, textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href="#dashboard" style={{ ...ghost, padding: '9px 16px' }}>Sign in</a>
          <a href="#cta" style={{ ...primary, padding: '9px 16px' }}>Start free</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" style={{ background: `linear-gradient(180deg, ${C.brandSoft}, #fff)`, padding: '80px 0' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span style={{ ...eyebrow, background: '#fff', border: `1px solid ${C.line}`, padding: '6px 12px', borderRadius: 999 }}>AI voice support agent</span>
          <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: '20px 0', letterSpacing: -1.5 }}>Resolve every customer call with AI.</h1>
          <p style={{ fontSize: 19, color: C.sub, lineHeight: 1.6, margin: 0 }}>
            CallSolve AI answers your support line in <strong style={{ color: C.ink }}>under 5 seconds</strong>, understands the problem, fixes it — and logs perfect notes every time.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <a href="#cta" style={primary}>Try a free AI call</a>
            <a href="#pricing" style={ghost}>View pricing</a>
          </div>
          <p style={{ color: C.sub, fontSize: 14, marginTop: 16 }}>50 free minutes · No credit card required · Live in 5 minutes</p>
        </div>
        <div style={{ ...card, boxShadow: '0 20px 50px rgba(79,70,229,0.15)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 44, height: 44, borderRadius: '50%', background: C.brand, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700 }}>A</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>Aria · AI agent</div>
              <div style={{ fontSize: 13, color: C.sub }}>On call with Rahul · 0:42</div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.ok, background: '#dcfce7', padding: '4px 10px', borderRadius: 999 }}>● LIVE</span>
          </div>
          <div style={{ background: C.bg, borderRadius: 12, padding: 14, fontSize: 14 }}><strong>Rahul:</strong> My internet has been dropping since morning.</div>
          <div style={{ background: C.brandSoft, borderRadius: 12, padding: 14, fontSize: 14 }}><strong>Aria:</strong> Sorry about that! I've run a line check — I'm resetting your connection now.</div>
          <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13 }}>
            <span style={{ color: C.sub }}>Issue</span><strong>Connectivity</strong>
            <span style={{ color: C.sub }}>Sentiment</span><strong style={{ color: C.ok }}>Positive</strong>
            <span style={{ color: C.sub }}>Ticket</span><strong>Auto-created #4821</strong>
          </div>
        </div>
      </div>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 64 }}>
        {[['< 5s', 'Average answer time'], ['78%', 'Calls resolved by AI'], ['10+', 'Languages spoken'], ['99.9%', 'Uptime SLA']].map(([v, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 800 }}>{v}</div>
            <div style={{ color: C.sub, fontSize: 14 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" style={{ padding: '96px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <div style={eyebrow}>Why CallSolve AI</div>
          <h2 style={h2}>A support agent that never sleeps.</h2>
          <p style={{ color: C.sub, fontSize: 17 }}>Everything you need to handle customer calls faster, cheaper and better.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {features.map(([t, d], i) => (
            <div key={t} style={card}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.brandSoft, color: C.brand, display: 'grid', placeItems: 'center', fontWeight: 800 }}>{i + 1}</div>
              <h3 style={{ margin: '16px 0 8px', fontSize: 18 }}>{t}</h3>
              <p style={{ margin: 0, color: C.sub, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function How() {
  const steps = [['Connect your number', 'Forward your support line or get a new number in minutes.'], ['Train your agent', 'Upload FAQs and policies — the AI learns your business.'], ['Go live', 'Calls are answered, resolved and logged automatically.']]
  return (
    <section id="how" style={{ padding: '96px 0', background: C.bg }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={eyebrow}>How it works</div>
          <h2 style={h2}>Live in three simple steps.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {steps.map(([t, d], i) => (
            <div key={t} style={card}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.brand }}>STEP {i + 1}</div>
              <h3 style={{ margin: '8px 0', fontSize: 20 }}>{t}</h3>
              <p style={{ margin: 0, color: C.sub, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const [calls, setCalls] = useState(seed)
  const [caller, setCaller] = useState('')
  const [issue, setIssue] = useState('')
  const input = { flex: 1, padding: 12, borderRadius: 10, border: `1px solid ${C.line}`, fontSize: 15 }
  const add = (e) => {
    e.preventDefault()
    if (!caller.trim() || !issue.trim()) return
    setCalls([{ id: Date.now(), caller, issue, status: 'Open', time: '0:00', suggestion: 'AI is analyzing this call…' }, ...calls])
    setCaller(''); setIssue('')
  }
  return (
    <section id="dashboard" style={{ padding: '96px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={eyebrow}>The dashboard</div>
          <h2 style={h2}>Your whole support line, at a glance.</h2>
        </div>
        <div style={{ ...card, padding: 0, overflow: 'hidden', boxShadow: '0 20px 50px rgba(15,23,42,0.08)' }}>
          <div style={{ background: C.bg, borderBottom: `1px solid ${C.line}`, padding: '10px 16px', fontSize: 13, color: C.sub }}>app.callsolve.ai</div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {['Open', 'In progress', 'Resolved'].map((s) => (
                <div key={s} style={{ border: `1px solid ${C.line}`, borderRadius: 12, padding: 16 }}>
                  <div style={{ color: C.sub, fontSize: 14 }}>{s}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: statusColor[s] }}>{calls.filter((c) => c.status === s).length}</div>
                </div>
              ))}
            </div>
            <form onSubmit={add} style={{ display: 'flex', gap: 8 }}>
              <input aria-label="Caller name" placeholder="Caller name" value={caller} onChange={(e) => setCaller(e.target.value)} style={input} />
              <input aria-label="Issue" placeholder="Describe the issue" value={issue} onChange={(e) => setIssue(e.target.value)} style={{ ...input, flex: 2 }} />
              <button style={primary}>Log call</button>
            </form>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ textAlign: 'left', color: C.sub }}>
                  {['Caller', 'Issue', 'AI suggestion', 'Duration', 'Status'].map((h) => <th key={h} style={{ padding: '10px 8px', borderBottom: `1px solid ${C.line}`, fontWeight: 600 }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {calls.map((c) => (
                  <tr key={c.id}>
                    <td style={{ padding: '14px 8px', borderBottom: `1px solid ${C.line}`, fontWeight: 600 }}>{c.caller}</td>
                    <td style={{ padding: '14px 8px', borderBottom: `1px solid ${C.line}` }}>{c.issue}</td>
                    <td style={{ padding: '14px 8px', borderBottom: `1px solid ${C.line}`, color: C.sub }}>{c.suggestion}</td>
                    <td style={{ padding: '14px 8px', borderBottom: `1px solid ${C.line}` }}>{c.time}</td>
                    <td style={{ padding: '14px 8px', borderBottom: `1px solid ${C.line}` }}>
                      <span style={{ color: statusColor[c.status], fontWeight: 700 }}>● {c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" style={{ padding: '96px 0', background: C.bg }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={eyebrow}>Pricing</div>
          <h2 style={h2}>Pay only for talk-time.</h2>
          <p style={{ color: C.sub, fontSize: 17 }}>No setup fees. No lock-in. Credits never expire.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {plans.map(([n, p, d, items, pop]) => (
            <div key={n} style={{ ...card, border: pop ? `2px solid ${C.brand}` : card.border, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{n}</h3>
                {pop && <span style={{ fontSize: 12, fontWeight: 700, color: C.brand, background: C.brandSoft, padding: '4px 10px', borderRadius: 999 }}>Most popular</span>}
              </div>
              <div style={{ fontSize: 36, fontWeight: 800 }}>{p}</div>
              <div style={{ color: C.sub }}>{d}</div>
              <ul style={{ padding: 0, margin: '8px 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((i) => <li key={i}><span style={{ color: C.ok, fontWeight: 700 }}>✓</span> {i}</li>)}
              </ul>
              <a href="#cta" style={{ ...(pop ? primary : ghost), textAlign: 'center', marginTop: 'auto' }}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" style={{ padding: '96px 0' }}>
      <div style={{ ...wrap }}>
        <div style={{ background: C.ink, color: '#fff', borderRadius: 24, padding: 56, textAlign: 'center' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Never miss another customer call.</h2>
          <p style={{ color: '#cbd5e1', fontSize: 17 }}>Get 50 free minutes on signup. Live in 5 minutes.</p>
          <a href="#dashboard" style={{ ...primary, marginTop: 16 }}>Start free</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', color: C.ink, background: '#fff' }}>
      <Nav />
      <Hero />
      <Features />
      <How />
      <Dashboard />
      <Pricing />
      <CTA />
      <footer style={{ borderTop: `1px solid ${C.line}`, padding: '24px 0', color: C.sub, fontSize: 14 }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 CallSolve AI. All rights reserved.</span>
          <span>support@callsolve.ai</span>
        </div>
      </footer>
    </div>
  )
}
