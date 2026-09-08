import Link from 'next/link';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Compass,
  Flower2,
  Heart,
  Rocket,
  Sparkles,
  Target,
  UsersRound,
  UserRound,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from './site-shell';
import { TestimonialSlider } from '../components/testimonial-slider';
const coreServices = [
  [
    UserRound,
    'Personal Numerology Reading',
    'Understand your core numbers and life purpose with clarity.',
  ],
  [
    BriefcaseBusiness,
    'Career & Business Guidance',
    'Make confident career moves and smart business decisions.',
  ],
  [
    Heart,
    'Relationship Compatibility',
    'Improve understanding and build stronger, healthier relationships.',
  ],
  [
    Flower2,
    'Life Path & Personal Growth',
    'Navigate challenges and embrace growth with purpose.',
  ],
];
const patterns = [
  [UserRound, 'Personal Clarity'],
  [Compass, 'Life Direction & Decision'],
  [BriefcaseBusiness, 'Career & Professional Growth'],
  [Heart, 'Relationship & Marriage'],
  [UsersRound, 'Family & Parenting'],
  [Rocket, 'Business & Entrepreneurship'],
  [Flower2, 'Health & Lifestyle Behaviour'],
  [Target, 'Name Analysis & Correction'],
];
const journeys = [
  [
    '01',
    'Business Strategy',
    'Understand behavioural and numerical patterns that may influence leadership and business direction.',
  ],
  [
    '02',
    'Professional Growth',
    'Identify strengths and opportunities for greater clarity in your career.',
  ],
  [
    '03',
    'Business Relationships',
    'Explore communication styles and partnership dynamics.',
  ],
  [
    '04',
    'Personal Direction',
    'Gain perspective on the system influencing your current life phase.',
  ],
  [
    '05',
    'Relationships',
    'Understand compatibility and recurring dynamics in important relationships.',
  ],
  [
    '06',
    'Life Transitions',
    'Navigate periods of change with a more structured approach.',
  ],
];
const offers = [
  [
    Target,
    'Overcoming Challenges',
    'Navigate difficult situations with greater clarity and a constructive way forward.',
  ],
  [
    Flower2,
    'Mindfulness & Wellbeing',
    'Develop greater awareness, emotional balance and healthier everyday practices.',
  ],
  [
    UserRound,
    'Self Awareness',
    'Explore your strengths, tendencies and the deeper aspects of your personality.',
  ],
  [
    Heart,
    'Emotional Intelligence',
    'Understand emotions, improve self-awareness and build healthier responses to everyday situations.',
  ],
  [
    Heart,
    'Love & Compatibility',
    'Explore compatibility and gain deeper insight into relationship dynamics.',
  ],
  [
    UsersRound,
    'Youth Counselling & Guidance',
    'A supportive space to talk through concerns, challenges and questions affecting your life.',
  ],
  [
    Flower2,
    'Stress & Emotional Balance',
    'Find practical ways to manage overwhelm and restore greater balance in daily life.',
  ],
];
const clarityQuestions = [
  'Why does the same situation keep repeating in my life?',
  'Why do I feel stuck despite trying everything?',
  'Why do my relationships become complicated?',
  'Why is my career or business growing differently than expected?',
  'Why do I struggle to make confident decisions?',
  'Why do certain phases of life feel unusually difficult?',
  'What am I missing that I cannot see?',
];
const faqs = [
  'What is numerology and how does it work?',
  'What information do I need for a reading?',
  'How long does a session take?',
  'Is my information kept confidential?',
  'What can I expect in a consultation?',
  'Who can benefit from numerology?',
];
export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="pdf-hero">
        <div className="pdf-hero-copy">
          <p className="eyebrow">
            <Sparkles size={15} /> Welcome,
          </p>
          <h1>
            I’m
            <br />
            <em>Harpreet Kaur</em>
          </h1>
          <p className="hero-role">
            Researcher · Strategic Consultant · Human Behaviour Practitioner
          </p>
          <div className="ornament">
            <span />✦<span />
          </div>
          <h2>Personalised guidance for every stage of life</h2>
          <p>
            Whether you’re facing uncertainty, making an important decision, or
            seeking deeper self-understanding, my consultations help you
            recognise recurring patterns and move forward with clarity.
          </p>
          <Link className="button" href="/services">
            Explore Numerixx <ArrowUpRight size={16} />
          </Link>
          <img
            className="pdf-stilllife"
            src="/assets/numerixx-stilllife.jpg"
            alt="Numerology books, candle and crystal"
          />
        </div>
        <div className="pdf-portrait">
          <img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur" />
        </div>
        <div className="curve-divider" />
      </section>
      <section className="section pdf-services">
        <div className="section-heading">
          <p className="eyebrow centered">
            <Sparkles size={14} /> How I can help
          </p>
          <h2>Services</h2>
          <p>Insightful guidance tailored to your unique journey.</p>
        </div>
        <div className="service-grid">
          {coreServices.map(([Icon, title, copy], i) => (
            <article className="service-card" key={String(title)}>
              <span className="number">0{i + 1}</span>
              <span className="icon">
                <Icon />
              </span>
              <h3>{String(title)}</h3>
              <p>{String(copy)}</p>
              <Link href="/services">
                Learn more <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="pdf-approach">
        <img
          src="/assets/numerology-journal.jpg"
          alt="Numerology journal and crystals"
        />
        <div>
          <p className="eyebrow">
            <Sparkles size={14} /> My approach
          </p>
          <h2>Clarity. Insight. Transformation.</h2>
          <p>
            I combine ancient wisdom, numerical pattern analysis and a modern
            understanding of human behaviour to help you decode recurring
            patterns and make more informed decisions.
          </p>
          <ul>
            <li>
              <strong>In-depth Analysis</strong>
              <span>
                A deeper look at your numerical and behavioural patterns.
              </span>
            </li>
            <li>
              <strong>Personal & Empathetic Guidance</strong>
              <span>
                Thoughtful guidance that considers your unique circumstances.
              </span>
            </li>
            <li>
              <strong>Actionable Insights</strong>
              <span>
                Practical direction you can confidently apply in real life.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section explore-patterns">
        <div className="pattern-heading">
          <div>
            <p className="eyebrow">
              <Sparkles size={14} /> Personal guidance
            </p>
            <h2>
              Explore Your
              <br />
              <em>Patterns</em>
            </h2>
            <p>
              Understand yourself, navigate challenges and make decisions
              aligned with your values.
            </p>
          </div>
          <img
            src="/assets/numerixx-stilllife.jpg"
            alt="Books, candle, flowers and crystal"
          />
        </div>
        <div className="pattern-grid">
          {patterns.map(([Icon, title]) => (
            <article key={String(title)}>
              <span className="icon">
                <Icon />
              </span>
              <h3>{String(title)}</h3>
              <span className="tiny-ornament">— ✦ —</span>
              <p>
                Discover clearer perspective, meaningful insight and practical
                next steps.
              </p>
            </article>
          ))}
        </div>
        <div className="quote-strip">
          “ Every number tells a story. Together, they reveal patterns worth
          understanding. ”<small>Let’s decode yours.</small>
        </div>
      </section>
      <section className="section guidance">
        <div className="guidance-head">
          <div>
            <p className="eyebrow">Business & life intelligence</p>
            <h2>
              Insight and Guidance for Navigating the{' '}
              <em>Professional and Personal Areas of Life</em> that Matter Most.
            </h2>
          </div>
          <img
            src="/assets/business-life-intelligence.png"
            alt="A winding map path through green and golden hills toward a compass"
          />
        </div>
        <div className="guidance-grid">
          {journeys.map(([n, title, copy]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="guidance-line">
          Focused insight. Clearer decisions. Meaningful direction.
        </p>
      </section>
      <section className="bracelet-teaser-wrap">
        <Link className="bracelet-teaser" href="/bracelets">
          <div>
            <p className="eyebrow">
              <Sparkles size={14} /> Crystal bracelets
            </p>
            <h2>
              Wear Your Numbers.
              <br />
              <em>Carry Your Energy.</em>
            </h2>
            <p>
              Handcrafted crystal bracelets created with authentic natural
              stones to support your numerology journey.
            </p>
            <span className="button gold">
              Explore bracelets <ArrowUpRight size={16} />
            </span>
          </div>
          <img
            src="/assets/bracelets-hero.jpg"
            alt="Tiger's eye and green aventurine crystal bracelets"
          />
        </Link>
      </section>
      <section className="chapter">
        <div className="chapter-heading">
          <p className="eyebrow centered">
            <Sparkles size={14} /> What I offer <Sparkles size={14} />
          </p>
          <h2>
            Services for Every
            <br />
            <em>Chapter of Life</em>
          </h2>
          <span className="chapter-ornament">— ✦ —</span>
          <p>
            Guidance and insight for the challenges, decisions and transitions
            that shape different chapters of your life.
          </p>
        </div>
        <div className="offer-grid">
          {offers.map(([Icon, title, copy], i) => (
            <article
              className={`offer-card${i === 6 ? ' offer-wide' : ''}`}
              key={String(title)}
            >
              <div className="offer-image">
                <img src={`/assets/offer-${i + 1}.jpg`} alt="" />
                <span>0{i + 1}</span>
              </div>
              <div className="offer-copy">
                <span className="offer-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(copy)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="chapter-quote">
          <span>“</span>
          <p>
            Numbers are not just calculations,
            <br />
            they are the language of your life.
            <small>Let’s decode your story</small>
          </p>
        </div>
      </section>
      <section className="home-reflections">
        <div className="perspective-intro">
          <div className="perspective-stats">
            <article>
              <strong>6+</strong>
              <span>Years of Numerology Experience</span>
            </article>
            <article>
              <strong>300+</strong>
              <span>Happy Clients Guided</span>
            </article>
          </div>
          <img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur" />
          <div className="perspective-copy">
            <p className="eyebrow">
              <Sparkles size={14} /> Numbers · Insight · Perspective
            </p>
            <h2>
              Discover How Numerical Insights Can Offer a Fresh Perspective on
              Your <em>Strengths, Challenges and Life Journey.</em>
            </h2>
            <p>
              Numerology reveals patterns. Insight creates perspective.
              Perspective empowers change.
            </p>
            <strong>Real Experiences.</strong>
            <Link className="button" href="/contact">
              Book Your Numerology Session <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="reflection-heading">
          <p className="eyebrow centered">Client reflections</p>
          <h2>
            Experiences Shared by Those
            <br />
            I’ve Worked With
          </h2>
          <p>
            A glimpse into the perspectives and experiences of individuals who
            have explored their journey with Numerixx.
          </p>
        </div>
        <TestimonialSlider />
        <div className="clarity-faq-grid">
          <article className="clarity-questions">
            <p className="eyebrow">Looking for answers?</p>
            <h3>
              Sometimes life feels difficult because the patterns behind your
              experiences remain unseen.
            </h3>
            <p>If you’ve ever asked yourself...</p>
            <ul>
              {clarityQuestions.map((q) => (
                <li key={q}>✦ {q}</li>
              ))}
            </ul>
            <strong>
              You’re not just looking for answers.
              <br />
              <em>You’re looking for clarity.</em>
            </strong>
          </article>
          <article className="home-faq">
            <img
              src="/assets/faq-numerology-art.jpg"
              alt="Numerology books and quill"
            />
            <div>
              <p className="eyebrow">A little more clarity before you begin</p>
              <h3>
                Find answers to common questions about numerology, consultations
                and what to expect from your experience.
              </h3>
              <div>
                {faqs.map((q) => (
                  <details key={q}>
                    <summary>
                      {q}
                      <ChevronDown size={16} />
                    </summary>
                    <p>
                      Each Numerixx consultation is personalised around your
                      questions, circumstances and goals.
                    </p>
                  </details>
                ))}
              </div>
              <Link className="gold-button" href="/contact">
                Let’s Connect <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </div>
        <div className="story-cta">
          <img
            src="/assets/story-stilllife.jpg"
            alt="Crystals, candle and flowers"
          />
          <div>
            <h2>Ready to Explore Your Story Differently?</h2>
            <p>
              Take the first step towards greater perspective, clarity and
              meaningful direction.
            </p>
          </div>
          <Link className="button" href="/contact">
            Book Your Session Today <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
