"use client";
import { useState } from "react";
import { Arrow, Logo } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header"><div className="container nav"><Logo /><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button><nav className={open ? "nav-links open" : "nav-links"}><a href="#rankings" onClick={close}>Best VPNs</a><a href="#why" onClick={close}>How we rank</a><a href="#guides" onClick={close}>VPN guides</a><a href="#faq" onClick={close}>FAQ</a><a className="nav-cta" href="#rankings" onClick={close}>Compare VPNs <Arrow size={15} /></a></nav></div></header>;
}
