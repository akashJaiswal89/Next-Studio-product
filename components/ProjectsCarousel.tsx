"use client";

import { useState } from "react";
import { Lightbulb, PanelTop, ScanLine, SlidersHorizontal, Pause, Play } from "lucide-react";

const projects = [
  {
    name: "Dharwad Karnatak Arts College (KCD)",
    location: "Dharwad, Karnataka",
    image: "/assets/work/kcd.jpeg",
    description: "A studio setup for educational video production, with a green chroma backdrop, studio lighting and overhead rails with pantograph mounts to position the lights while keeping the floor clear.",
    services: ["Green chroma", "Studio lights", "Ceiling rails", "Pantograph mounts"],
  },
  {
    name: "Central Institute of Educational Technology, NCERT",
    location: "New Delhi",
    image: "/assets/work/n.png",
    description: "An educational production studio with a wide green chroma background and an overhead lighting grid. Suspended studio lights and adjustable mounts support flexible lighting for teaching and recording.",
    services: ["Green chroma", "Studio lights", "Lighting grid", "Adjustable mounts"],
  },
  {
    name: "Times Now Navbharat",
    location: "Broadcast studio",
    image: "/assets/work/t.png",
    description: "A broadcast studio setup with a green chroma curtain, LED studio lights and overhead lighting supports. Freestanding lights provide additional control for presenter and news recording setups.",
    services: ["Green chroma", "LED lighting", "Ceiling supports", "Light stands"],
  },
];

const serviceIcons = [ScanLine, Lightbulb, PanelTop, SlidersHorizontal];

export default function ProjectsCarousel() {
  const [hoverOffset, setHoverOffset] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const holdCard = (card: HTMLElement) => {
    const viewport = card.closest(".project-tape-viewport");
    const track = card.closest(".project-tape-track");
    if (!viewport || !track) return;

    const bounds = viewport.getBoundingClientRect();
    const cardBounds = card.getBoundingClientRect();
    const currentOffset = parseFloat(window.getComputedStyle(track).translate) || 0;
    // Offset the paused track separately so its animation keeps its original position.
    const adjustment = cardBounds.left < bounds.left
      ? bounds.left - cardBounds.left
      : cardBounds.right > bounds.right
        ? bounds.right - cardBounds.right
        : 0;
    setHoverOffset(currentOffset + adjustment);
  };

  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="container projects-heading">
        <div>
          <div className="eyebrow">Studios brought to life</div>
          <h2 id="projects-heading">Our Work<span>.</span></h2>
          <p>From classrooms to broadcast studios, explore our studio setups and the equipment behind them.</p>
        </div>
        <button className="project-motion-toggle" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label="Pause automatic project scrolling">
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          {paused ? "Resume" : "Pause"}
        </button>
        <span className="project-swipe-hint">Swipe to explore →</span>
      </div>
      <div className="projects-full-width">
        <div className="project-tape-viewport" role="region" aria-label="Completed studio projects">
          <div
            className={`project-tape-track${hoverOffset !== null || paused ? " is-paused" : ""}`}
            style={{
              translate: `${hoverOffset ?? 0}px 0`,
              transition: hoverOffset !== null ? "translate .3s ease" : "none",
            }}
          >
            {[false, true].map((duplicate) => (
              <div className="project-tape-group" key={String(duplicate)} aria-hidden={duplicate}>
                {projects.map((project, index) => (
                  <article
                    className="project-showcase"
                    key={project.name}
                    tabIndex={duplicate ? -1 : 0}
                    aria-label={project.name}
                    onMouseEnter={(event) => holdCard(event.currentTarget)}
                    onMouseLeave={() => setHoverOffset(null)}
                    onFocus={(event) => holdCard(event.currentTarget)}
                    onBlur={() => setHoverOffset(null)}
                  >
                    <div className="project-panel">
                      <div className="project-photo">
                        <img src={project.image} alt={`${project.name}: green chroma studio with lighting and overhead supports`} loading="lazy" />
                        <span className="project-photo-label">Studio setup <span>0{index + 1} / 03</span></span>
                      </div>
                      <div className="project-copy">
                        <div className="eyebrow">Featured project</div>
                        <h3>{project.name}</h3>
                        <p className="project-location">{project.location}</p>
                        <p className="project-description">{project.description}</p>
                        <p className="project-components-label">Equipment in this setup</p>
                        <ul className="project-services" aria-label="Studio equipment">
                          {project.services.map((service, serviceIndex) => {
                            const Icon = serviceIcons[serviceIndex];
                            return <li key={service}><Icon aria-hidden="true" size={17} strokeWidth={1.7} /><span>{service}</span></li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <aside className="project-equipment" aria-label="Studio equipment illustrations">
                      <img src="/assets/work/studio-equipment-panel.png" alt="Illustrations of a roller backdrop system, barn door studio light, light stand and pantograph mount" />
                      <span>Equipment for every setup</span>
                    </aside>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
}
