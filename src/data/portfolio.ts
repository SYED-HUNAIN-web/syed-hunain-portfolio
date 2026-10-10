export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  category: "Website" | "Web App" | "E-commerce";
}

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Design" | "3D & Animation";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const SKILLS_DATA: Skill[] = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 92, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 82, category: "Frontend" },
  { name: "UI/UX Design", level: 88, category: "Design" },
  { name: "Figma", level: 85, category: "Design" },
  { name: "Three.js", level: 78, category: "3D & Animation" },
  { name: "GSAP", level: 80, category: "3D & Animation" },
  { name: "Framer Motion", level: 85, category: "3D & Animation" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Élysée",
    description: "Luxury restaurant website showcasing fine dining experience with elegant animations.",
    image: "/Elysee.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://elysee-restaurant.vercel.app/",
    category: "Website",
  },
  {
    id: 2,
    title: "Hyder Traders",
    description: "Solar & Electrical E-commerce store with modern shopping experience.",
    image: "/assets/hyder.png",
    tags: ["React", "E-commerce", "Tailwind"],
    liveUrl: "https://www.hydertraders.com/",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "SmileCraft",
    description: "Modern dental clinic website featuring appointment booking and service info.",
    image: "/SmileCraft.png",
    tags: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://smile-craftkarachi.vercel.app/",
    category: "Website",
  },
  {
    id: 4,
    title: "Iconic Advertising",
    description: "Printing & Advertising agency platform with comprehensive service details.",
    image: "/assets/iconic.png",
    tags: ["React", "UI/UX", "Tailwind"],
    liveUrl: "https://iconic-advertising.vercel.app/",
    category: "Website",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Syed Hunain delivered an amazing interactive website that exceeded all our expectations. His attention to detail and creative approach transformed our vision into reality.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartupLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Very professional, modern and creative developer. The 3D animations and smooth transitions he implemented made our platform stand out from competitors.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, DesignCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Working with Syed was a fantastic experience. He understood our brand perfectly and created a website that truly represents our creative agency's vision.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Exceptional technical skills combined with great design sense. Syed's interactive 3D elements brought our tech brand to life with flawless performance.",
    rating: 5,
  },
];
