import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Clock3, HeartHandshake, Mail, MapPin, Menu, Phone, ShieldCheck } from 'lucide-react';

const links = [['/','Home'],['/about','About'],['/services','Services'],['/knowledge-center','Knowledge Center'],['/event','Events'],['/contact','Contact']];
export function SiteHeader(){return <header className="site-header"><Link className="brand" href="/" aria-label="Numerixx home"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></Link><nav aria-label="Primary navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav><Link className="button button-small" href="/contact">Book appointment <ArrowUpRight size={15}/></Link><Link className="menu" href="/contact" aria-label="Open contact page"><Menu/></Link></header>}
export function SiteFooter(){return <footer className="site-footer">
  <div className="footer-glow" aria-hidden="true"/>
  <section className="footer-main">
    <div className="footer-intro"><Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></Link><p>Research-led numerology and thoughtful guidance to help you understand your patterns, make clearer choices and move forward with confidence.</p><Link className="footer-cta" href="/contact">Book a consultation <ArrowRight size={15}/></Link></div>
    <div className="footer-column"><h3>Explore</h3><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/knowledge-center">Knowledge Center</Link><Link href="/event">Events</Link></div>
    <div className="footer-column"><h3>Consultations</h3><Link href="/services">Personal Numerology</Link><Link href="/services">Career &amp; Business</Link><Link href="/services">Relationship Guidance</Link><Link href="/services">Strategic Life Report</Link></div>
    <div className="footer-column footer-contact"><h3>Get in touch</h3><a href="tel:+919876543210"><Phone/> +91 98765 43210</a><a href="mailto:hello@numerixx.com"><Mail/> hello@numerixx.com</a><span><MapPin/> Mohali, Punjab, India</span><span><Clock3/> Mon - Sat, 10AM - 7PM</span></div>
  </section>
  <section className="footer-trust"><span><ShieldCheck/>100% Confidential</span><span><HeartHandshake/>Personalised Guidance</span><span>✦ Research-Led Approach</span><span>300+ Clients Guided</span></section>
  <section className="footer-bottom"><p>© 2026 Numerixx Consulting. All rights reserved.</p><div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link><Link href="/contact">Contact</Link></div><p>Clarity begins with understanding.</p></section>
  </footer>}
export function PageHero({eyebrow,title,children}:{eyebrow:string;title:React.ReactNode;children:React.ReactNode}){return <section className="page-hero"><div><p className="eyebrow">✦ {eyebrow}</p><h1>{title}</h1><p>{children}</p></div></section>}
