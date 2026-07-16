export type Vpn = {
  rank: number;
  name: string;
  mark: string;
  tone: string;
  score: string;
  price: string;
  badge: string;
  copy: string;
  features: string[];
};

export const vpns: Vpn[] = [
  { rank: 1, name: "NordVPN", mark: "N", tone: "blue", score: "9.6", price: "$3.39", badge: "Best overall", copy: "Fast, private and packed with useful features.", features: ["6,400+ servers", "10 devices", "30-day guarantee"] },
  { rank: 2, name: "Surfshark", mark: "S", tone: "violet", score: "9.4", price: "$2.19", badge: "Best value", copy: "Unlimited devices without compromising on speed.", features: ["3,200+ servers", "Unlimited devices", "30-day guarantee"] },
  { rank: 3, name: "ExpressVPN", mark: "E", tone: "orange", score: "9.2", price: "$6.67", badge: "Best for beginners", copy: "A simple, polished VPN for everyday privacy.", features: ["3,000+ servers", "14 devices", "30-day guarantee"] },
];

export const moreVpns: Vpn[] = [
  { rank: 4, name: "Proton VPN", mark: "P", tone: "purple", score: "9.0", price: "$4.99", badge: "Best for privacy", copy: "Open-source apps and serious privacy credentials.", features: ["13,000+ servers", "10 devices", "30-day guarantee"] },
  { rank: 5, name: "Private Internet Access", mark: "P", tone: "red", score: "8.8", price: "$2.03", badge: "Best for power users", copy: "Flexible settings and a huge global network.", features: ["35,000+ servers", "Unlimited devices", "30-day guarantee"] },
  { rank: 6, name: "CyberGhost", mark: "C", tone: "yellow", score: "8.6", price: "$2.19", badge: "Best for streaming", copy: "Easy-to-use apps with streaming-friendly servers.", features: ["11,900+ servers", "7 devices", "45-day guarantee"] },
];

export const planOptions = [
  { name: "Basic", price: "$3.39", devices: "6 devices", feature: "Private browsing + ad blocker", tone: "basic" },
  { name: "Pro", price: "$4.99", devices: "10 devices", feature: "Streaming + threat protection", tone: "pro", popular: true },
  { name: "Pro Max", price: "$7.49", devices: "Unlimited devices", feature: "Dedicated IP + identity alerts", tone: "max" },
];
