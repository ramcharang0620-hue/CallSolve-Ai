import { useState } from 'react'

const initialCalls = [
  { id: 1, caller: 'Priya Sharma', issue: 'Billing charged twice', status: 'Resolved', suggestion: 'Refund duplicate charge and send confirmation email.' },
  { id: 2, caller: 'James Lee', issue: 'Cannot reset password', status: 'Open', suggestion: 'Verify identity, then trigger a password reset link.' },
  { id: 3, caller: 'Arjun Rao', issue: 'Internet keeps dropping', status: 'In progress', suggestion: 'Run line diagnostics and schedule router replacement.' },
]

const colors = { Resolved: '#15803d', Open: '#b91c1c', 'In progress': '#b45309' }

export default function App() {
  const [calls, setCalls] = useState(initialCalls)
  const [caller, setCaller] = useState('')
  const [issue, setIssue] = useState('')

  const add = (e) => {
    e.preventDefault()
    if (!caller || !issue) return
    setCalls([{ id: Date.now(), caller, issue, status: 'Open', suggestion: 'AI is analyzing this call…' }, ...calls])
    setCaller(''); setIssue('')
  }

  const card = { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f1f5f9', minHeight: '100vh', color: '#0f172a' }}>
      <header style={{ background: '#1e3a8a', color: '#fff', padding: '16px 32px' }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>CallSolve AI</h1>
        <p style={{ margin: '4px 0 0', opacity: 0.85 }}>AI-assisted call resolution for support teams</p>
      </header>
      <main style={{ maxWidth: 960, margin: '0 auto', padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {['Open', 'In progress', 'Resolved'].map((s) => (
            <div key={s} style={card}>
              <div style={{ color: '#475569', fontSize: 14 }}>{s}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: colors[s] }}>{calls.filter((c) => c.status === s).length}</div>
            </div>
          ))}
        </section>
        <form onSubmit={add} style={{ ...card, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <input placeholder="Caller name" value={caller} onChange={(e) => setCaller(e.target.value)} style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
          <input placeholder="Describe the issue" value={issue} onChange={(e) => setIssue(e.target.value)} style={{ flex: 2, padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
          <button style={{ padding: '10px 18px', background: '#1e3a8a', color: '#fff', border: 0, borderRadius: 8, cursor: 'pointer' }}>Log call</button>
        </form>
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {calls.map((c) => (
            <div key={c.id} style={card}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{c.caller}</strong>
                <span style={{ color: colors[c.status], fontWeight: 600 }}>{c.status}</span>
              </div>
              <div style={{ marginTop: 4 }}>{c.issue}</div>
              <div style={{ marginTop: 8, color: '#475569', fontSize: 14 }}>AI suggestion: {c.suggestion}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
