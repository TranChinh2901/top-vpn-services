"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FeatureBreakdown from "../components/FeatureBreakdown";

type IconProps = { size?: number };
const Arrow = ({ size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);
const Lock = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);
const Star = () => <span className="star">★</span>;

const vpns = [
  {
    rank: 1,
    name: "NordVPN",
    mark: "N",
    tone: "blue",
    score: "9.6",
    price: "$3.39",
    badge: "Best overall",
    copy: "Fast, private and packed with useful features.",
    features: ["6,400+ servers", "10 devices", "30-day guarantee"],
  },
  {
    rank: 2,
    name: "Surfshark",
    mark: "S",
    tone: "violet",
    score: "9.4",
    price: "$2.19",
    badge: "Best value",
    copy: "Unlimited devices without compromising on speed.",
    features: ["3,200+ servers", "Unlimited devices", "30-day guarantee"],
  },
  {
    rank: 3,
    name: "ExpressVPN",
    mark: "E",
    tone: "orange",
    score: "9.2",
    price: "$6.67",
    badge: "Best for beginners",
    copy: "A simple, polished VPN for everyday privacy.",
    features: ["3,000+ servers", "14 devices", "30-day guarantee"],
  },
];

const moreVpns = [
  {
    rank: 4,
    name: "Proton VPN",
    mark: "P",
    tone: "purple",
    score: "9.0",
    price: "$4.99",
    badge: "Best for privacy",
    copy: "Open-source apps and serious privacy credentials.",
    features: ["13,000+ servers", "10 devices", "30-day guarantee"],
  },
  {
    rank: 5,
    name: "Private Internet Access",
    mark: "P",
    tone: "red",
    score: "8.8",
    price: "$2.03",
    badge: "Best for power users",
    copy: "Flexible settings and a huge global network.",
    features: ["35,000+ servers", "Unlimited devices", "30-day guarantee"],
  },
  {
    rank: 6,
    name: "CyberGhost",
    mark: "C",
    tone: "yellow",
    score: "8.6",
    price: "$2.19",
    badge: "Best for streaming",
    copy: "Easy-to-use apps with streaming-friendly servers.",
    features: ["11,900+ servers", "7 devices", "45-day guarantee"],
  },
];

const featureRows = [
  [
    "Connection speed*",
    "6730+ Mbps",
    "2220+ Mbps",
    "3320+ Mbps",
    "1600+ Mbps",
    "2320+ Mbps",
  ],
  ["Covered locations", "224", "105**", "63**", "122**", "96+"],
  ["Specialty servers", true, false, false, true, true],
  ["Dedicated IP", true, true, false, false, true],
  ["Malware scan for downloads", true, false, false, false, false],
  ["Certified phishing protection", true, false, false, false, false],
  ["Alerts about leaked credentials", true, true, false, true, true],
  ["Tracker and ad blocker", true, true, false, true, true],
  ["Malicious site detection", true, true, false, true, false],
  ["App vulnerability scanner", true, false, false, false, false],
  ["AI-powered threat detection", true, false, false, true, false],
  ["24/7 customer support", true, true, true, false, true],
  ["Password manager", true, true, false, true, true],
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="VPNly home">
      <span className="logo-mark">
        <Lock />
      </span>
      <span>
        VPN<span className="logo-dot">LY</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <Logo />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#rankings" onClick={() => setOpen(false)}>
            Best VPNs
          </a>
          <a href="#why" onClick={() => setOpen(false)}>
            How we rank
          </a>
          <a href="#guides" onClick={() => setOpen(false)}>
            VPN guides
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <a
            className="nav-cta"
            href="#rankings"
            onClick={() => setOpen(false)}
          >
            Compare VPNs <Arrow size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

const planOptions = [
  {
    name: "Basic",
    price: "$3.39",
    devices: "6 devices",
    feature: "Private browsing + ad blocker",
    tone: "basic",
  },
  {
    name: "Pro",
    price: "$4.99",
    devices: "10 devices",
    feature: "Streaming + threat protection",
    tone: "pro",
    popular: true,
  },
  {
    name: "Pro Max",
    price: "$7.49",
    devices: "Unlimited devices",
    feature: "Dedicated IP + identity alerts",
    tone: "max",
  },
];

function DealMenu({ vpnName }: { vpnName: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <div className="deal-wrap">
      <button
        className="small-link deal-trigger"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        View deal <Arrow size={14} />
      </button>
      {open &&
        createPortal(
          <div className="deal-overlay" onClick={() => setOpen(false)}>
            <div
              className="deal-menu"
              role="dialog"
              aria-modal="true"
              aria-label={`${vpnName} plans`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="deal-menu-head">
                <div>
                  <span className="deal-kicker">Flexible plans</span>
                  <b>Choose your {vpnName} plan</b>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close plans"
                >
                  ×
                </button>
              </div>
              <p className="deal-intro">
                Select the level of protection that fits the way you browse.
              </p>
              {planOptions.map((plan) => (
                <div
                  className={`plan-option ${plan.popular ? "recommended" : ""}`}
                  key={plan.name}
                >
                  <div className={`plan-icon ${plan.tone}`}>
                    {plan.name === "Pro Max"
                      ? "✦"
                      : plan.name === "Pro"
                        ? "◆"
                        : "•"}
                  </div>
                  <div className="plan-info">
                    <div>
                      <b>{plan.name}</b>
                      {plan.popular && (
                        <span className="popular-label">Most popular</span>
                      )}
                    </div>
                    <small>{plan.feature}</small>
                    <em>{plan.devices} · 30-day guarantee</em>
                  </div>
                  <div className="plan-price">
                    <strong>{plan.price}</strong>
                    <small>/mo</small>
                  </div>
                  <button className="plan-choose" type="button">
                    Choose plan <Arrow size={12} />
                  </button>
                </div>
              ))}
              <div className="deal-footnote">
                <span>↗</span> Cancel anytime · Prices shown are illustrative
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

function VpnCard({
  vpn,
}: {
  vpn: (typeof vpns)[number] | (typeof moreVpns)[number];
}) {
  return (
    <>
      {vpn.rank === 1 && <FeatureBreakdown />}
      <article className="vpn-card">
        <div className="rank">#{vpn.rank}</div>
        <div className={`brand-mark ${vpn.tone}`}>{vpn.mark}</div>
        <div className="vpn-main">
          <div className="vpn-title">
            <h3>{vpn.name}</h3>
            <span className="pill">{vpn.badge}</span>
          </div>
          <p>{vpn.copy}</p>
          <div className="feature-row">
            {vpn.features.map((feature) => (
              <span key={feature}>
                <Check /> {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="vpn-score">
          <strong>{vpn.score}</strong>
          <span>
            <Star /> Excellent
          </span>
        </div>
        <div className="vpn-price">
          <small>From</small>
          <strong>
            {vpn.price}
            <em>/mo</em>
          </strong>
          <DealMenu vpnName={vpn.name} />
        </div>
      </article>
      {vpn.rank === 3 && (
        <details className="more-rankings">
          <summary>
            <span className="plus-icon">+</span>
            <b>Show 3 more VPNs</b>
            <span className="summary-arrow">⌄</span>
          </summary>
          <div className="extra-rank-list">
            {moreVpns.map((extra) => (
              <VpnCard key={extra.name} vpn={extra} />
            ))}
          </div>
        </details>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" /> Updated for June 2026
            </div>
            <h1>
              Privacy that
              <br />
              <span>moves with you.</span>
            </h1>
            <p className="hero-lede">
              We test, compare and rank the world&apos;s best VPNs so you can
              browse freely, stream more and stay one step ahead.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#rankings">
                See the top VPNs <Arrow />
              </a>
              <a className="text-button" href="#why">
                How we rank <span>↗</span>
              </a>
            </div>
            <div className="trust-line">
              <div className="avatar-stack">
                <i>JM</i>
                <i>AK</i>
                <i>TS</i>
              </div>
              <span>
                <b>Trusted by 2.4m+</b>
                <br />
                privacy-conscious readers
              </span>
            </div>
          </div>
          <div className="hero-art" aria-label="Privacy illustration">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="globe">
              <div className="globe-lat lat-one" />
              <div className="globe-lat lat-two" />
              <div className="globe-long long-one" />
              <div className="globe-long long-two" />
              <div className="globe-core">
                <Lock />
              </div>
            </div>
            <div className="float-card card-top">
              <span className="secure-icon">
                <Check />
              </span>
              <span>
                <b>Connection secure</b>
                <small>Protected in 42 ms</small>
              </span>
            </div>
            <div className="float-card card-bottom">
              <span className="mini-flag">US</span>
              <span>
                <small>Virtual location</small>
                <b>New York, US</b>
              </span>
              <span className="signal">•••</span>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker">
        <div className="container ticker-inner">
          <span>
            <Lock /> Independent reviews
          </span>
          <span>
            <Check /> 100% reader-focused
          </span>
          <span>
            <span className="tiny-star">★</span> 4.9/5 average rating
          </span>
          <span className="desktop-only">No pay-to-rank placements</span>
        </div>
      </div>
      <section className="stats-strip">
        <div className="container stats-grid">
          <div>
            <strong>47</strong>
            <span>VPNs tested</span>
          </div>
          <div>
            <strong>
              812<span>k</span>
            </strong>
            <span>Speed tests run</span>
          </div>
          <div>
            <strong>18</strong>
            <span>Countries tested</span>
          </div>
          <div>
            <strong>
              4.9<span>/5</span>
            </strong>
            <span>Reader rating</span>
          </div>
        </div>
      </section>
      <section className="section rankings" id="rankings">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Our top picks</div>
              <h2>
                The best VPNs, <span>ranked.</span>
              </h2>
            </div>
            <p>
              Our experts test every service for speed, security, usability and
              value. These are the ones worth your time in 2026.
            </p>
          </div>
          <div className="ranking-list">
            {vpns.map((vpn) => (
              <VpnCard key={vpn.name} vpn={vpn} />
            ))}
          </div>
          <div className="center-link">
            <a href="#comparison">
              See full comparison <Arrow size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="editorial">
        <div className="container editorial-grid">
          <div className="editorial-visual">
            <span className="visual-label">EDITOR&apos;S NOTE</span>
            <div className="visual-lock">
              <Lock />
            </div>
            <span className="visual-caption">
              Your digital
              <br />
              <b>front door.</b>
            </span>
          </div>
          <div className="editorial-copy">
            <div className="eyebrow">The short answer</div>
            <h2>
              Why do you need a <span>VPN?</span>
            </h2>
            <p>
              A VPN is a simple privacy layer between you and the internet. It
              encrypts your connection, masks your IP address and gives you more
              control over where your data travels.
            </p>
            <div className="editorial-points">
              <span>
                <Check /> Encrypts your connection
              </span>
              <span>
                <Check /> Hides your IP address
              </span>
              <span>
                <Check /> Safer public Wi-Fi
              </span>
              <span>
                <Check /> Access your usual services
              </span>
            </div>
            <a className="button outline" href="#guides">
              Read our beginner&apos;s guide <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="section why" id="why">
        <div className="container why-grid">
          <div className="why-intro">
            <div className="eyebrow">Our methodology</div>
            <h2>
              Good privacy advice starts with <span>good testing.</span>
            </h2>
            <p>
              VPN marketing can be noisy. We cut through it with hands-on
              testing and a clear scoring system you can trust.
            </p>
            <a className="text-button" href="#faq">
              Learn more about our process <span>↗</span>
            </a>
          </div>
          <div className="method-cards">
            <div className="method-card">
              <span className="method-number">01</span>
              <h3>We test the basics</h3>
              <p>
                Speed, security, server coverage and device support across
                real-world scenarios.
              </p>
            </div>
            <div className="method-card active">
              <span className="method-number">02</span>
              <h3>We use it like you do</h3>
              <p>
                Streaming, travel, remote work and everyday browsing—not just a
                lab checklist.
              </p>
            </div>
            <div className="method-card">
              <span className="method-number">03</span>
              <h3>We keep it current</h3>
              <p>
                Plans, features and performance are checked regularly as
                services evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section comparison" id="comparison">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">Side-by-side</div>
              <h2>Compare at a glance.</h2>
            </div>
            <p>Everything you need to find your fit.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>VPN service</th>
                  <th>Our score</th>
                  <th>Best for</th>
                  <th>Servers</th>
                  <th>Devices</th>
                  <th>Starting price</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {vpns.map((vpn) => (
                  <tr key={vpn.name}>
                    <td>
                      <span className={`table-mark ${vpn.tone}`}>
                        {vpn.mark}
                      </span>
                      <b>{vpn.name}</b>
                    </td>
                    <td>
                      <strong className="table-score">{vpn.score}</strong>{" "}
                      <Star />
                    </td>
                    <td>{vpn.badge}</td>
                    <td>{vpn.features[0].replace(" servers", "")}</td>
                    <td>{vpn.features[1].replace(" devices", "")}</td>
                    <td>
                      <b>{vpn.price}</b>/mo
                    </td>
                    <td>
                      <a href="#" className="arrow-link">
                        <Arrow size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section guides" id="guides">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">Find your match</div>
              <h2>
                A VPN for every <span>kind of online.</span>
              </h2>
            </div>
            <p>Start with what matters most to you.</p>
          </div>
          <div className="guide-grid">
            <a href="#rankings" className="guide-card guide-blue">
              <span className="guide-icon">◉</span>
              <h3>For streaming</h3>
              <p>Watch more of your favorite shows, wherever you are.</p>
              <span className="guide-arrow">
                <Arrow />
              </span>
            </a>
            <a href="#rankings" className="guide-card guide-dark">
              <span className="guide-icon">◒</span>
              <h3>For privacy</h3>
              <p>Keep your online activity private and your data yours.</p>
              <span className="guide-arrow">
                <Arrow />
              </span>
            </a>
            <a href="#rankings" className="guide-card guide-sand">
              <span className="guide-icon">⌁</span>
              <h3>For travel</h3>
              <p>Stay connected safely on every unfamiliar network.</p>
              <span className="guide-arrow">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="section stories">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">From the guide</div>
              <h2>
                Useful, not <span>noisy.</span>
              </h2>
            </div>
            <a className="text-button" href="#guides">
              View all guides <span>↗</span>
            </a>
          </div>
          <div className="story-grid">
            <a className="story-card featured-story" href="#guides">
              <div className="story-art art-one">
                <span>01</span>
              </div>
              <div className="story-meta">
                VPN BASICS <span>6 min read</span>
              </div>
              <h3>VPNs explained: what they do and when you need one</h3>
              <p>
                A clear, jargon-free guide to getting started with online
                privacy.
              </p>
            </a>
            <a className="story-card" href="#guides">
              <div className="story-art art-two">
                <span>02</span>
              </div>
              <div className="story-meta">
                STREAMING <span>8 min read</span>
              </div>
              <h3>How to choose a VPN for streaming in 2026</h3>
              <p>Speed, location and the features that actually matter.</p>
            </a>
            <a className="story-card" href="#guides">
              <div className="story-art art-three">
                <span>03</span>
              </div>
              <div className="story-meta">
                TRAVEL <span>5 min read</span>
              </div>
              <h3>Public Wi-Fi: five simple ways to stay safer</h3>
              <p>Practical habits for coffee shops, airports and hotels.</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section voices">
        <div className="container">
          <div className="eyebrow">Reader voices</div>
          <div className="voice-grid">
            <blockquote>
              <div className="quote-stars">★★★★★</div>
              <p>
                “Finally, a VPN comparison that explains the trade-offs without
                trying to sell me everything.”
              </p>
              <footer>
                — Marcus T. <span>Verified reader</span>
              </footer>
            </blockquote>
            <blockquote>
              <div className="quote-stars">★★★★★</div>
              <p>
                “The shortlist made choosing a VPN feel simple. I had mine set
                up in ten minutes.”
              </p>
              <footer>
                — Aisha K. <span>Verified reader</span>
              </footer>
            </blockquote>
            <blockquote>
              <div className="quote-stars">★★★★★</div>
              <p>
                “Clear, useful and up to date. The comparison table is exactly
                what I needed.”
              </p>
              <footer>
                — Julia M. <span>Verified reader</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">Still curious?</div>
            <h2>
              Questions, <span>answered.</span>
            </h2>
            <p>We believe privacy tools should be easy to understand.</p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>
                What is a VPN? <span>+</span>
              </summary>
              <p>
                A VPN creates a secure connection between your device and the
                internet, helping keep your browsing private and protecting you
                on public Wi-Fi.
              </p>
            </details>
            <details>
              <summary>
                How do you rank VPN services? <span>+</span>
              </summary>
              <p>
                We combine hands-on testing with research into security,
                performance, ease of use, support and overall value.
              </p>
            </details>
            <details>
              <summary>
                Are VPNs legal to use? <span>+</span>
              </summary>
              <p>
                VPNs are legal in most countries. Local rules can vary, so
                always check the regulations where you live or travel.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="final-cta">
        <div className="container final-inner">
          <div>
            <div className="eyebrow light">Your privacy, your choice.</div>
            <h2>Ready to find your VPN?</h2>
          </div>
          <a className="button light-button" href="#rankings">
            Explore the rankings <Arrow />
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>
              Independent VPN reviews
              <br />
              for a more private internet.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#rankings">Best VPNs</a>
            <a href="#guides">VPN guides</a>
            <a href="#why">Our methodology</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#faq">About VPNly</a>
            <a href="#faq">Contact</a>
            <a href="#faq">Privacy policy</a>
          </div>
          <div>
            <h4>Stay in the know</h4>
            <p className="newsletter-copy">
              The occasional privacy tip. No noise.
            </p>
            <div className="newsletter">
              <input
                placeholder="Your email address"
                aria-label="Email address"
              />
              <button aria-label="Subscribe">
                <Arrow size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 VPNly. Built for a more open web.</span>
          <span>We may earn a commission from links on this page.</span>
        </div>
      </footer>
    </main>
  );
}
