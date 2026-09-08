'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
  {
    image: '/assets/client-reflection.jpg',
    name: 'Deepika Sharma',
    role: 'Entrepreneur',
    initials: 'DS',
    quote:
      'My numerology reading with Harpreet Kaur was truly eye-opening. It helped me understand my strengths, weaknesses, and purpose with such clarity. The guidance brought direction to my career, improved my relationships, and boosted my confidence.',
    note: 'It’s not just about numbers—it’s about real transformation.',
  },
  {
    image: '/assets/offer-3.jpg',
    name: 'Riya Mehta',
    role: 'Creative Professional',
    initials: 'RM',
    quote:
      'The consultation gave me a fresh perspective on patterns I had repeated for years. I left the session feeling calmer, clearer and more confident about the choices ahead.',
    note: 'A thoughtful and deeply personal experience.',
  },
  {
    image: '/assets/offer-7.jpg',
    name: 'Arjun Malhotra',
    role: 'Business Owner',
    initials: 'AM',
    quote:
      'The business guidance helped me understand my decision-making style and approach an important transition with greater structure. The insights were practical and easy to apply.',
    note: 'I now move forward with much more clarity.',
  },
];

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % items.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const move = (step: number) =>
    setActive((value) => (value + step + items.length) % items.length);
  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {items.map((item) => (
          <article className="testimonial-feature" key={item.name}>
            <img
              src={item.image}
              alt="Calm visual representing the client journey"
            />
            <div>
              <span className="quote-symbol">“</span>
              <blockquote>{item.quote}</blockquote>
              <p>{item.note}</p>
              <div className="testimonial-person">
                <b>{item.initials}</b>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
                <i>★★★★★</i>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button
        className="testimonial-arrow previous"
        type="button"
        aria-label="Previous testimonial"
        onClick={() => move(-1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="testimonial-arrow next"
        type="button"
        aria-label="Next testimonial"
        onClick={() => move(1)}
      >
        <ChevronRight />
      </button>
      <div className="testimonial-dots">
        {items.map((item, index) => (
          <button
            type="button"
            className={index === active ? 'active' : ''}
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActive(index)}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}
