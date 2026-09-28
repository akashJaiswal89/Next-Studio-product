"use client";

import Link from "next/link";

const projects = [
  { name: "Times Now Bharat", image: "/assets/categories/lights.jpg" },
  { name: "Ministry of Communications, Government of India", image: "/assets/categories/stands.jpg" },
  { name: "Dharwad Karnataka Arts College (KCD)", image: "/assets/categories/backdrops.jpg" },
  { name: "Central Institute of Educational Technology (NCERT), Delhi", image: "/assets/categories/studio-photography-backdrops.jpg" },
  { name: "NCA-F", image: "/assets/hero-studio.jpg" },
];

export default function ProjectsCarousel() {
  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Worked On</div>
            <h2>Projects &amp; Institutions</h2>
            <p className="muted">Selected organisations and production environments served by Tanisa Enterprises.</p>
          </div>
        </div>
        <div className="project-tape-viewport" role="region" aria-label="Projects and institutions">
          <div className="project-tape-track">
            {[false, true].map((isDuplicate) => (
              <div className="project-tape-group" aria-hidden={isDuplicate} key={String(isDuplicate)}>
                {projects.map((project) => (
                <Link
                  className="project-slide"
                  href={`https://wa.me/918076900434?text=${encodeURIComponent(`Hello Tanisa Enterprises, I would like to enquire about photography, studio, lighting or media-equipment support for ${project.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isDuplicate ? -1 : undefined}
                  key={`${isDuplicate ? "duplicate" : "original"}-${project.name}`}
                >
                  <img src={project.image} alt={`${project.name} photography and studio equipment`} />
                  <div className="project-slide-copy">
                    <h3>{project.name}</h3>
                    <p className="muted">Photography, studio, lighting or media-equipment support.</p>
                  </div>
                </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}