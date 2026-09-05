import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';

const links = [['/','Home'],['/about','About'],['/event','Event'],['/services','Services'],['/approach','My approach'],['/contact','Contact']];
export function SiteHeader(){return <header className="site-header"><Link className="brand" href="/" aria-label="Numerixx home"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></Link><nav aria-label="Primary navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav><Link className="button button-small" href="/contact">Book appointment <ArrowUpRight size={15}/></Link><Link className="menu" href="/contact" aria-label="Open contact page"><Menu/></Link></header>}
export function SiteFooter(){return <footer><Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></Link><p>Thoughtful guidance for clearer choices and a more aligned life.</p><p>© 2026 Numerixx</p></footer>}
export function PageHero({eyebrow,title,children}:{eyebrow:string;title:React.ReactNode;children:React.ReactNode}){return <section className="page-hero"><div><p className="eyebrow">✦ {eyebrow}</p><h1>{title}</h1><p>{children}</p></div></section>}
