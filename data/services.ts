export type StudioService = { name: string; description: string; image: string; category: string };

export const services: StudioService[] = [
  {
    name: "Automatic Backdrop Changer",
    description: "Motorised backdrop systems for switching between green, red and other background colours. Get help choosing the rollers, mounting and setup for your studio.",
    image: "/assets/services/automatic-backdrop-changer.webp",
    category: "Motorised systems",
  },
  {
    name: "Manual Backdrop Changer",
    description: "Manually operated background systems for green, red and other studio backdrops, with support for selecting and installing the right mounts and rollers.",
    image: "/assets/services/manual-backdrop-changer.webp",
    category: "Manual systems",
  },
  {
    name: "Green Screen & Chroma Setup",
    description: "Chroma backdrops and installation support for video, teaching and broadcast studios. Discuss green, blue and other background colour requirements with us.",
    image: "/assets/services/green-screen-chroma-setup.webp",
    category: "Chroma backgrounds",
  },
  {
    name: "Studio Lighting Setup",
    description: "Plan your lighting with LED studio lights, stands and overhead supports suited to your room and the content you create.",
    image: "/assets/services/studio-lighting-setup.webp",
    category: "Lighting & supports",
  },
  {
    name: "Photography Studio Setup",
    description: "Bring your photography space together with backdrops, lighting and accessories selected around your shooting needs.",
    image: "/assets/services/photography-studio-setup.webp",
    category: "Complete studios",
  },
  {
    name: "Backdrop Installation",
    description: "Choose background supports, mounting hardware and backdrops, with practical installation support for your available space.",
    image: "/assets/services/backdrop-installation.webp",
    category: "Installation support",
  },
  {
    name: "Event & Corporate Studio Setup",
    description: "Equipment supply and setup support for presentations, interviews, corporate video and event production.",
    image: "/assets/services/event-corporate-studio-setup.webp",
    category: "Business & events",
  },
  {
    name: "Institutional Media Setup",
    description: "Plan a recording environment for schools, colleges and media teams, with equipment for lectures, training and educational video.",
    image: "/assets/services/institutional-media-setup.webp",
    category: "Education & broadcast",
  },
];
