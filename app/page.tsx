import { ArrowUpRight, BriefcaseBusiness, Flower2, Heart, Menu, Sparkles, Star, UserRound } from 'lucide-react';

const services = [
  { icon: UserRound, title: 'Personal Numerology Reading', copy: 'Understand your core numbers, recurring patterns and life purpose with clarity.' },
  { icon: BriefcaseBusiness, title: 'Career & Business Guidance', copy: 'Make confident career moves and thoughtful business decisions.' },
  { icon: Heart, title: 'Relationship Compatibility', copy: 'Improve understanding and build stronger, healthier relationships.' },
  { icon: Flower2, title: 'Life Path & Personal Growth', copy: 'Navigate change and embrace growth with a clearer sense of purpose.' },
];

const steps = [
  ['01', 'Reach Out', 'Tell us what you would like guidance or support with.'],
  ['02', 'Initial Consultation', 'A short introductory call to understand your requirements.'],
  ['03', 'Begin Your Journey', 'Choose the consultation that feels right for you.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Numerixx home"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></a>
      <nav aria-label="Primary navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#approach">My approach</a><a href="#contact">Contact</a></nav>
      <a className="button button-small" href="#contact">Book appointment <ArrowUpRight size={15}/></a><button className="menu" aria-label="Open menu"><Menu/></button>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> Welcome,</p><h1>I’m <em>Harpreet Kaur</em></h1><p className="hero-role">Researcher · Strategic Consultant · Human Behaviour Practitioner</p><div className="ornament"><span/>✦<span/></div><h2>Personalised guidance for every stage of life</h2><p className="lead">Whether you’re facing uncertainty, making an important decision, or seeking deeper self-understanding, my consultations help you recognise recurring patterns and move forward with clarity.</p><a className="button" href="#services">Explore Numerixx <ArrowUpRight size={16}/></a></div>
      <div className="hero-portrait"><img src="/assets/reference-home.png" alt="Harpreet Kaur seated in her consultation space"/><div className="portrait-badge"><Star size={16} fill="currentColor"/><span><strong>300+</strong> lives guided</span></div></div><div className="hero-wave"/>
    </section>

    <section className="section services" id="services"><div className="section-heading"><p className="eyebrow centered"><Sparkles size={14}/> How I can help</p><h2>Services shaped around <em>your journey.</em></h2><p>Insightful guidance for the questions, choices and transitions that matter to you.</p></div><div className="service-grid">{services.map(({icon:Icon,title,copy},index)=><article className="service-card" key={title}><span className="number">0{index+1}</span><span className="icon"><Icon/></span><h3>{title}</h3><p>{copy}</p><a href="#contact">Learn more <ArrowUpRight size={14}/></a></article>)}</div></section>

    <section className="approach" id="approach"><div className="approach-image"><img src="/assets/reference-home.png" alt="Numerology journal, crystals and candle"/></div><div className="approach-copy"><p className="eyebrow"><Sparkles size={14}/> My approach</p><h2>Clarity. Insight. <em>Transformation.</em></h2><p>I combine ancient wisdom, numerical pattern analysis and a modern understanding of human behaviour to help you decode recurring patterns and make more informed choices.</p><ul><li><strong>In-depth analysis</strong><span>A deeper look at the patterns behind your strengths and challenges.</span></li><li><strong>Personal & empathetic guidance</strong><span>Thoughtful support shaped around your unique circumstances.</span></li><li><strong>Actionable insights</strong><span>Practical direction you can confidently apply in real life.</span></li></ul></div></section>

    <section className="section about" id="about"><div className="quote-mark">“</div><div><p className="eyebrow"><Sparkles size={14}/> About Numerixx</p><h2>Guided by numbers.<br/><em>Driven by purpose.</em></h2></div><div className="about-text"><p>Life doesn’t become confusing because we don’t have enough answers. It becomes confusing because we don’t yet understand the patterns behind our experiences.</p><p>At Numerixx, numbers are not predictions. They are a language for insight—a way to understand yourself better and make decisions with greater confidence and purpose.</p><p className="signature">Harpreet Kaur</p></div></section>

    <section className="journey section" id="contact"><div className="section-heading light"><p className="eyebrow centered"><Sparkles size={14}/> How we connect</p><h2>A simple way to find <em>your next step.</em></h2></div><div className="steps">{steps.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="cta"><div><small>Ready when you are</small><h2>Let’s decode your story.</h2></div><a className="button gold" href="mailto:hello@numerixx.in">Book your consultation <ArrowUpRight size={16}/></a></div></section>

    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">N</span><span><strong>NUMERIXX</strong><small>Decode · Understand · Transform</small></span></a><p>Thoughtful guidance for clearer choices and a more aligned life.</p><p>© 2026 Numerixx</p></footer>
  </main>;
}
