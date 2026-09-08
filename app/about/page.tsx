import { BarChart3, BookOpen, GraduationCap, Lightbulb, MonitorUp, Sparkles, Users } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const clarity = ['Clarity about themselves', 'Their business', 'Their relationships', 'Their emotions', 'Their career', 'Their decisions'];
const pillars = [
  [BarChart3, 'Behavioural Research', 'An evolving research initiative dedicated to advancing behavioural understanding through numerical patterns.'],
  [BookOpen, 'Knowledge & Education', 'Ongoing research, case studies, educational programmes and the development of innovative frameworks.'],
  [Lightbulb, 'An Evolving Vision', 'Our approach continues to grow as new research, insights and real-world experiences emerge.'],
  [MonitorUp, 'Research-led Innovation', 'Expanding beyond consultations into thoughtful innovations and technology-driven tools.'],
  [Users, 'Practical Understanding', 'Making self-understanding more accessible, measurable and useful in everyday life.'],
];

export default function About() {
  return <main><SiteHeader/>
    <section className="about-reference-hero">
      <div className="about-reference-copy">
        <p className="eyebrow"><Sparkles size={14}/> About us <span className="eyebrow-rule"/></p>
        <h1>Guided by <em>Numbers.</em><br/>Driven by <em>Purpose.</em></h1><div className="gold-rule"/>
        <p>Life doesn&apos;t become confusing because we don&apos;t have enough answers. It becomes confusing because we don&apos;t understand the patterns behind our experiences.</p>
        <p>People don&apos;t come to Numerixx because they&apos;re interested in numbers. They come because they are looking for clarity.</p>
        <ul className="clarity-grid">{clarity.map(item => <li key={item}>✦ <span>{item}</span></li>)}</ul>
        <p>And the recurring patterns that seem impossible to explain. This is where we begin our work.</p>
        <div className="founder-card"><span className="founder-icon"><GraduationCap/></span><div><strong>I&apos;m Harpreet Kaur</strong><small>Research Scholar, Karnataka Sanskrit University<br/>Founder, Numerixx</small></div></div>
      </div>
      <div className="about-reference-photo"><img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur, founder of Numerixx"/><div className="about-stat stat-one"><b>6+</b><span>Years of Numerology Experience</span></div><div className="about-stat stat-two"><b>300+</b><span>Happy Clients Guided</span></div></div>
    </section>
    <section className="journey-reference"><div className="journey-copy"><p className="eyebrow"><Sparkles size={14}/> The story behind Numerixx</p><h2>My Journey.<br/><em>My Purpose.</em></h2><div className="journey-prose"><p>I&apos;m Harpreet Kaur, a Research Scholar at Karnataka Sanskrit University and the founder of Numerixx, a research-based consultation firm dedicated to helping people gain clarity, understand themselves better, and make informed life decisions through structured numerical analysis.</p><p>My research focuses on Numerical Human Behaviour, an evolving framework that explores the relationship between numerical patterns, human behaviour, emotional responses, communication styles, decision-making, and life experiences.</p><p>Through ongoing research and in-person consultations, I study how recurring numerical patterns may reflect behavioural tendencies and influence how individuals think, respond, communicate, and navigate through different phases of life.</p><p className="journey-highlight">Not because numbers control their lives, but because they reveal consistent behavioural patterns that can be understood, interpreted, and worked with.</p><p>These insights form the foundation of every consultation at Numerixx. The goal is not simply to interpret numbers, but to help people understand the patterns behind their experiences, gain meaningful clarity, and move forward with more confidence.</p><p className="journey-closing">Because clarity changes the quality of every decision we make.</p></div></div><div className="journey-visual"><img src="/assets/numerology-journal.jpg" alt="Numerology research journal"/><blockquote>“ Numbers are not just calculations,<br/>they are the language of your life. ”</blockquote></div></section>
    <section className="research-practice"><div className="research-heading"><p className="eyebrow centered"><Sparkles size={14}/> Research. Insight. Innovation.</p><h2>Numerixx is More Than<br/><em>a Consultation Practice</em></h2><p>We bring together structured research, practical guidance and an evolving understanding of human behaviour.</p></div><div className="research-grid">{pillars.map(([Icon, title, copy], i) => { const I = Icon as typeof BarChart3; return <article key={String(title)}><div className="research-icon"><I/></div><span>0{i+1}</span><h3>{String(title)}</h3><p>{String(copy)}</p></article>})}</div></section>
    <section className="mission-reference"><div className="mission-mark">✦</div><div><p className="eyebrow centered">Our mission</p><h2>Every consultation, every case study, every framework, and every innovation contribute to one larger mission:</h2><p>Helping people understand themselves better so they can make better decisions, build healthier relationships, and live with greater clarity, confidence, and purpose.</p></div></section><SiteFooter/>
  </main>;
}
