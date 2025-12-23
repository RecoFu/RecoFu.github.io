import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function RecoFuGithub() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const projects = [
    {
      name: 'autonomous-trading-resilience',
      desc: 'Black Swan Proof | 9-year unsupervised system | 97% drawdown verification | Perfect log integrity',
      url: '#'
    },
    {
      name: 'guardian-distributed-intelligence',
      desc: 'GDI | Personal environment real-time monitoring | AI-powered anomaly detection | GDPR compliant',
      url: '#'
    },
    {
      name: 'root-cause-methodology',
      desc: 'Philosophy & Frameworks | INT 21h debugging | Hardware diagnostics | Incident response patterns',
      url: '#'
    }
  ];

  return (
    <div style={{ background: '#0d1117', color: '#c9d1d9', minHeight: '100vh', fontFamily: "'Segoe UI', 'Microsoft JhengHei', sans-serif" }}>
      
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)', borderBottom: '1px solid #30363d', padding: '60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '14px', color: '#8b949e', marginBottom: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>
            🖥️ RECO FU | SYSTEM GUARDIAN ARCHIVE
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '15px', color: '#58a6ff' }}>
            RecoFu
          </h1>
          <p style={{ fontSize: '20px', color: '#79c0ff', marginBottom: '25px', fontWeight: '600' }}>
            When Everything Breaks, I Fix What Others Can't See
          </p>
          <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: '1.8', maxWidth: '700px' }}>
            40 years spanning FidoNet protocols to AI security governance. 
            Zero data loss. Zero breaches. Zero excuses. 
            This is the archive of systems that survived—and what you can learn from them.
          </p>
        </div>
      </div>

      {/* NAV TABS */}
      <div style={{ background: '#161b22', borderBottom: '1px solid #30363d', padding: '0 40px', display: 'flex', gap: '30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {[
            { id: 'philosophy', label: '💡 Philosophy' },
            { id: 'projects', label: '📦 Projects' },
            { id: 'proof', label: '✓ Proof' },
            { id: 'contact', label: '📧 Contact' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === tab.id ? '#58a6ff' : '#8b949e',
                padding: '15px 0',
                borderBottom: activeTab === tab.id ? '3px solid #58a6ff' : 'none',
                fontWeight: activeTab === tab.id ? '600' : '400',
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '-1px'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: '50px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* PHILOSOPHY TAB */}
          {activeTab === 'philosophy' && (
            <div>
              <h2 style={{ color: '#79c0ff', fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>
                System Guardian Philosophy
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '25px', borderRadius: '6px' }}>
                  <h3 style={{ color: '#79c0ff', marginBottom: '12px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>
                    Layer 1: Physical Sovereignty
                  </h3>
                  <p style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                    Debug at the INT 21h register level. Trace oscilloscope waveforms. Reverse-engineer PCI protocols. When mainstream tools fail, this is where real diagnosis begins.
                  </p>
                </div>

                <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '25px', borderRadius: '6px' }}>
                  <h3 style={{ color: '#79c0ff', marginBottom: '12px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>
                    Layer 2: Infrastructure Truth
                  </h3>
                  <p style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                    Designed Taiwan's national financial backbone (Stock Exchange, Futures Exchange, ATM networks). 40 years: zero breaches, zero data loss. That's the standard.
                  </p>
                </div>

                <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '25px', borderRadius: '6px' }}>
                  <h3 style={{ color: '#79c0ff', marginBottom: '12px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>
                    Layer 3: Data Sovereignty
                  </h3>
                  <p style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                    9 years unsupervised. March 18, 2020: auto-liquidated at 97% drawdown with perfect log integrity. Black swans aren't disasters—they're verification.
                  </p>
                </div>
              </div>

              <div style={{ background: '#0d1117', border: '1px solid #30363d', padding: '25px', borderRadius: '6px', marginBottom: '30px' }}>
                <div style={{ fontFamily: 'monospace', color: '#79c0ff', fontSize: '12px', lineHeight: '1.8' }}>
                  <div>> WHEN TO CALL RECO</div>
                  <div style={{ color: '#8b949e' }}>
                    ✗ Your system is slow<br/>
                    ✓ Your system is DEAD and Splunk failed<br/><br/>
                    ✗ You want management advice<br/>
                    ✓ You need register-level diagnostics<br/><br/>
                    ✗ You want optimistic predictions<br/>
                    ✓ You need root causes
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div>
              <h2 style={{ color: '#79c0ff', fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>
                Key Projects
              </h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                {projects.map((proj, i) => (
                  <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', padding: '20px', borderRadius: '6px', transition: 'border-color 0.3s' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h3 style={{ color: '#58a6ff', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                          📦 {proj.name}
                        </h3>
                        <p style={{ color: '#8b949e', fontSize: '13px' }}>
                          {proj.desc}
                        </p>
                      </div>
                      <ExternalLink size={18} color="#8b949e" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '30px', padding: '15px', background: '#161b22', borderRadius: '6px', color: '#8b949e', fontSize: '12px' }}>
                💡 More repos in development: AI security frameworks, root cause methodologies, GDI documentation
              </div>
            </div>
          )}

          {/* PROOF TAB */}
          {activeTab === 'proof' && (
            <div>
              <h2 style={{ color: '#79c0ff', fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>
                Verifiable Proof
              </h2>

              <div style={{ background: '#161b22', border: '2px solid #1f6feb', padding: '25px', borderRadius: '6px', marginBottom: '25px' }}>
                <h3 style={{ color: '#79c0ff', marginBottom: '15px', fontSize: '16px', fontWeight: '700' }}>
                  Black Swan Trading Resilience (2012-2020)
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <div style={{ color: '#8b949e', fontSize: '11px', textTransform: 'uppercase' }}>Initial Capital</div>
                    <div style={{ color: '#58a6ff', fontSize: '18px', fontWeight: '700' }}>$50,000</div>
                  </div>
                  <div>
                    <div style={{ color: '#8b949e', fontSize: '11px', textTransform: 'uppercase' }}>Peak Equity</div>
                    <div style={{ color: '#85e89d', fontSize: '18px', fontWeight: '700' }}>$1,350,000</div>
                  </div>
                  <div>
                    <div style={{ color: '#8b949e', fontSize: '11px', textTransform: 'uppercase' }}>Duration</div>
                    <div style={{ color: '#79c0ff', fontSize: '18px', fontWeight: '700' }}>9 Years</div>
                  </div>
                  <div>
                    <div style={{ color: '#8b949e', fontSize: '11px', textTransform: 'uppercase' }}>Log Integrity</div>
                    <div style={{ color: '#85e89d', fontSize: '18px', fontWeight: '700' }}>100%</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #30363d', paddingTop: '15px', color: '#8b949e', fontSize: '12px', lineHeight: '1.7' }}>
                  <strong>Status:</strong> Zero data loss. Perfect log traceability. Auto-liquidated at 97% drawdown (March 18, 2020) with complete circuit breaker execution. 
                  <br/><strong>Verification:</strong> Gmail-based transaction logs (GAS-extracted CSV) + Merkle tree root hash available on GitHub.
                </div>
              </div>

              <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '25px', borderRadius: '6px', marginBottom: '25px' }}>
                <h3 style={{ color: '#79c0ff', marginBottom: '15px', fontSize: '16px', fontWeight: '700' }}>
                  National Infrastructure Record
                </h3>
                <div style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                  • Taiwan Stock Exchange ATM backbone: 40+ years operational<br/>
                  • Taiwan Futures Exchange core systems: Zero failures in 25 years<br/>
                  • 3G Core center (central region): Deployed 1999, still in service<br/>
                  • 40-year operational history: Zero breaches, zero data loss<br/><br/>
                  <strong>Verification:</strong> Confidential due to operational sensitivity. Available for C-suite verification with appropriate NDA.
                </div>
              </div>

              <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '25px', borderRadius: '6px' }}>
                <h3 style={{ color: '#79c0ff', marginBottom: '15px', fontSize: '16px', fontWeight: '700' }}>
                  Incident Response Cases
                </h3>
                <div style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                  • <strong>Ransomware Defense (2015):</strong> 8-hour recovery, 100% data restore, zero ransom<br/>
                  • <strong>Broadcom NIC Crisis (2016):</strong> Register-level diagnosis, 85%→99.9% availability improvement<br/>
                  • <strong>AI Security Framework (2022+):</strong> 75% vulnerability risk reduction<br/><br/>
                  <strong>Verification:</strong> References available from previous employers and affected organizations.
                </div>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div>
              <h2 style={{ color: '#79c0ff', fontSize: '28px', marginBottom: '30px', fontWeight: '700' }}>
                How to Reach Reco
              </h2>

              <div style={{ background: '#161b22', border: '1px solid #30363d', padding: '30px', borderRadius: '6px', marginBottom: '25px' }}>
                <h3 style={{ color: '#79c0ff', marginBottom: '20px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase' }}>
                  Direct Contact
                </h3>
                <div style={{ fontSize: '14px', lineHeight: '2' }}>
                  <div>
                    <strong style={{ color: '#79c0ff' }}>Email:</strong><br/>
                    <a href="mailto:reco@outlook.com" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                      reco@outlook.com
                    </a>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <strong style={{ color: '#79c0ff' }}>LinkedIn:</strong><br/>
                    <a href="https://www.linkedin.com/in/recofu/" style={{ color: '#58a6ff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/recofu
                    </a>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <strong style={{ color: '#79c0ff' }}>GitHub:</strong><br/>
                    <a href="https://github.com/RecoFu" style={{ color: '#58a6ff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                      github.com/RecoFu
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ background: '#161b22', border: '2px dashed #f85149', padding: '25px', borderRadius: '6px', marginBottom: '25px' }}>
                <h3 style={{ color: '#f85149', marginBottom: '15px', fontSize: '16px', fontWeight: '700' }}>
                  ⚡ Quick Screening
                </h3>
                <div style={{ color: '#8b949e', fontSize: '13px', lineHeight: '1.8' }}>
                  Before reaching out, ask yourself:<br/><br/>
                  ✓ Is my system dead?<br/>
                  ✓ Have my best engineers failed?<br/>
                  ✓ Has Splunk/monitoring tools failed?<br/>
                  ✓ Does this problem need root cause, not surface fix?<br/><br/>
                  If all are YES → Reco is your call.<br/>
                  If any is NO → Save your time and mine.
                </div>
              </div>

              <div style={{ background: '#0d1117', border: '1px solid #30363d', padding: '20px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '12px', color: '#79c0ff' }}>
                <div>> Expected Response Time</div>
                <div style={{ color: '#8b949e' }}>
                  Emergency (system down): 1 hour<br/>
                  Standard inquiry: 24 hours<br/>
                  Reconnaissance call: 48 hours<br/>
                  Non-technical inquiries: No response
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#161b22', borderTop: '1px solid #30363d', padding: '40px', textAlign: 'center', color: '#8b949e', fontSize: '12px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            40 years | Zero breaches • Zero data loss • Zero excuses
          </div>
          <div style={{ color: '#6e7681' }}>
            RecoFu © 2025 | Not a job board profile. This is the archive of systems that survived.
          </div>
        </div>
      </div>
    </div>
  );
}