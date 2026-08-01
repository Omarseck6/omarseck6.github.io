"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useCallback, useEffect } from "react";
import { testimonials } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = window.setInterval(() => emblaApi.scrollNext(), 6500);
    return () => window.clearInterval(timer);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="testimonials section-light">
      <div className="testimonial-word" aria-hidden="true">TESTIMONIALS</div>
      <div className="container-shell testimonial-content">
        <Reveal><p className="eyebrow centered-eyebrow">06 · Trusted collaboration</p></Reveal>
        <div className="testimonial-viewport" ref={emblaRef}>
          <div className="testimonial-track">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={testimonial.name}>
                <article className={`testimonial-card testimonial-${index + 1}`}>
                  <Quote size={26} />
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <div className="testimonial-author"><span>{testimonial.initials}</span><p><strong>{testimonial.name}</strong>{testimonial.role}</p></div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={previous} aria-label="Previous testimonial"><ArrowLeft /></button>
          <span>Drag or explore</span>
          <button type="button" onClick={next} aria-label="Next testimonial"><ArrowRight /></button>
        </div>
      </div>
    </section>
  );
}
