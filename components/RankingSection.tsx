"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FeatureBreakdown from "./FeatureBreakdown";
import { Arrow, Check, Star } from "./ui";
import { moreVpns, planOptions, vpns, Vpn } from "./site-data";

function DealMenu({ vpnName }: { vpnName: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const old = document.body.style.overflow; document.body.style.overflow = "hidden"; const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => { document.body.style.overflow = old; window.removeEventListener("keydown", close); }; }, [open]);
  return <div className="deal-wrap"><button className="small-link deal-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>View deal <Arrow size={14} /></button>{open && createPortal(<div className="deal-overlay" onClick={() => setOpen(false)}><div className="deal-menu" role="dialog" aria-modal="true" aria-label={`${vpnName} plans`} onClick={(e) => e.stopPropagation()}><div className="deal-menu-head"><div><span className="deal-kicker">Flexible plans</span><b>Choose your {vpnName} plan</b></div><button type="button" onClick={() => setOpen(false)} aria-label="Close plans">×</button></div><p className="deal-intro">Select the level of protection that fits the way you browse.</p>{planOptions.map((plan) => <div className={`plan-option ${plan.popular ? "recommended" : ""}`} key={plan.name}><div className={`plan-icon ${plan.tone}`}>{plan.name === "Pro Max" ? "✦" : plan.name === "Pro" ? "◆" : "•"}</div><div className="plan-info"><div><b>{plan.name}</b>{plan.popular && <span className="popular-label">Most popular</span>}</div><small>{plan.feature}</small><em>{plan.devices} · 30-day guarantee</em></div><div className="plan-price"><strong>{plan.price}</strong><small>/mo</small></div><button className="plan-choose" type="button">Choose plan <Arrow size={12} /></button></div>)}<div className="deal-footnote"><span>↗</span> Cancel anytime · Prices shown are illustrative</div></div></div>, document.body)}</div>;
}

function VpnCard({ vpn }: { vpn: Vpn }) {
  return <><article className="vpn-card"><div className="rank">#{vpn.rank}</div><div className={`brand-mark ${vpn.tone}`}>{vpn.mark}</div><div className="vpn-main"><div className="vpn-title"><h3>{vpn.name}</h3><span className="pill">{vpn.badge}</span></div><p>{vpn.copy}</p><div className="feature-row">{vpn.features.map((feature) => <span key={feature}><Check /> {feature}</span>)}</div></div><div className="vpn-score"><strong>{vpn.score}</strong><span><Star /> Excellent</span></div><div className="vpn-price"><small>From</small><strong>{vpn.price}<em>/mo</em></strong><DealMenu vpnName={vpn.name} /></div></article>{vpn.rank === 3 && <details className="more-rankings"><summary><span className="plus-icon">+</span><b>Show 3 more VPNs</b><span className="summary-arrow">⌄</span></summary><div className="extra-rank-list">{moreVpns.map((extra) => <VpnCard key={extra.name} vpn={extra} />)}</div></details>}</>;
}

export default function RankingSection() {
  return <section className="section rankings" id="rankings"><div className="container"><div className="section-heading"><div><div className="eyebrow">Our top picks</div><h2>The best VPNs, <span>ranked.</span></h2></div><p>Our experts test every service for speed, security, usability and value. These are the ones worth your time in 2026.</p></div><div className="ranking-list"><VpnCard vpn={vpns[0]} /><VpnCard vpn={vpns[1]} /><VpnCard vpn={vpns[2]} /><FeatureBreakdown /></div><div className="center-link"><a href="#comparison">See full comparison <Arrow size={16} /></a></div></div></section>;
}
