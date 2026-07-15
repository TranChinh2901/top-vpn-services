import { Arrow } from "./icons";

const rows: Array<Array<string | boolean>> = [
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

export default function FeatureBreakdown() {
  const providers = [
    ["N", "NordVPN", "nord"],
    ["≡", "ExpressVPN", "express"],
    ["P", "PrivateVPN", "private"],
    ["▽", "ProtonVPN", "proton"],
    ["●", "purevpn", "pure"],
  ];
  return (
    <section className="feature-breakdown" id="features">
      <div className="container">
        <div className="feature-intro">
          <div>
            <div className="eyebrow">Feature breakdown</div>
            <h2>
              See what&apos;s included
              <br />
              <span>at a glance.</span>
            </h2>
          </div>
          <div>
            <p>
              Every VPN has a different toolkit. Compare the details behind our
              scores before you choose.
            </p>
            <small>
              *Illustrative test data for this design concept. Specs and prices
              should be verified before publishing.
            </small>
          </div>
        </div>
        <div className="feature-table-wrap">
          <table className="feature-table">
            <thead>
              <tr>
                <th>Security &amp; performance</th>
                {providers.map(([mark, name, tone]) => (
                  <th key={name}>
                    <span className={`provider-logo ${tone}`}>{mark}</span>
                    <b>{name}</b>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0] as string}>
                  <td>{row[0] as string}</td>
                  {row.slice(1).map((value, index) => (
                    <td key={`${row[0]}-${index}`}>
                      {typeof value === "boolean" ? (
                        <span className={value ? "check-mark" : "cross-mark"}>
                          {value ? "✓" : "×"}
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="feature-notes">
          <span>
            <b>How to read this:</b> A check means the feature is included in
            the standard plan we reviewed.
          </span>
          <a href="#why">
            See our testing methodology <Arrow size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
