import Link from 'next/link';
import { ArrowRight, Gem, PackageCheck, RotateCcw, ShieldCheck, ShoppingBag, Sparkles, Sun } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const products=[
  ["Tiger's Eye Bracelet",'Boosts confidence, protection and personal power.','₹1,499'],
  ['Green Aventurine Bracelet','Attracts luck, prosperity and emotional balance.','₹1,399'],
  ['Amethyst Bracelet','Promotes calmness, clarity and spiritual growth.','₹1,599'],
  ['Rose Quartz Bracelet','Opens the heart, brings love and inner healing.','₹1,399'],
  ['Clear Quartz Bracelet','Amplifies energy, intentions and mental clarity.','₹1,299'],
  ['Citrine Bracelet','Attracts abundance, success and positivity.','₹1,499'],
  ['Black Tourmaline Bracelet','Shields against negativity and promotes grounding.','₹1,499'],
  ['Custom Numerology Bracelet','Made especially for you based on your birth numbers.','₹2,099'],
];

const benefits=[[Gem,'Authentic Natural Stones'],[Sun,'Energized & Blessed'],[ShieldCheck,'Premium Quality Guaranteed'],[PackageCheck,'Secure Packaging']];

export default function SupportiveTools(){return <main><SiteHeader/>
  <section className="shop-hero"><div><p className="eyebrow"><Sparkles size={14}/> Supportive tools</p><h1>Wear Your Numbers.<br/><em>Carry Your Energy.</em></h1><p>Handcrafted crystal bracelets made with authentic natural stones to align your energy, attract positivity, and support your numerology journey.</p><Link className="button gold" href="#bracelet-collection">Explore the collection <ArrowRight size={16}/></Link></div><img src="/assets/bracelets-hero.jpg" alt="Tiger's eye and green aventurine crystal bracelets"/></section>
  <section className="shop-benefits">{benefits.map(([Icon,title])=>{const I=Icon as typeof Gem;return <div key={String(title)}><I/><span>{String(title)}</span></div>})}</section>
  <section className="shop-stats"><div><strong>200+</strong><span>Tools curated with care</span></div><div><strong>8+</strong><span>Options for every journey</span></div><div><strong>5,000+</strong><span>Happy customers</span></div><div><strong>7 Days</strong><span>Easy returns</span></div></section>
  <section className="shop-collection" id="bracelet-collection"><div className="section-heading"><p className="eyebrow centered"><Sparkles size={14}/> Crystal bracelets</p><h2>Tools for Your Energy</h2><p>Choose the stone and intention that feels aligned with your journey.</p></div><div className="product-grid">{products.map(([title,copy,price],i)=><article className="product-card" key={title}><div className="product-image"><img src={`/assets/bracelet-${i+1}.jpg`} alt={title}/>{i===0&&<span>Best seller</span>}{i===7&&<span>Custom</span>}</div><div className="product-details"><h3>{title}</h3><p>{copy}</p><strong>{price}</strong><Link href="/contact"><ShoppingBag size={15}/> Enquire now</Link></div></article>)}</div></section>
  <section className="shop-promise">{[[Gem,'100% Authentic Natural Stones','Sourced from trusted suppliers worldwide.'],[Sun,'Energized & Blessed','Each bracelet is cleansed and energized for you.'],[ShieldCheck,'Premium Quality','Finest grade stones with attention to detail.'],[RotateCcw,'Easy Guidance','Personal support in choosing your bracelet.']].map(([Icon,title,copy])=>{const I=Icon as typeof Gem;return <div key={String(title)}><I/><p><strong>{String(title)}</strong><span>{String(copy)}</span></p></div>})}</section>
  <section className="custom-bracelet"><div><Sparkles/><p><strong>Looking for something special?</strong><span>We also create custom numerology bracelets just for you.</span></p></div><Link className="button" href="/contact">Create your custom bracelet <ArrowRight size={16}/></Link></section>
  <SiteFooter/></main>}
