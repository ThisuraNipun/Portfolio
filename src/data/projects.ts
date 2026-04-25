export interface Project
{
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  features: string[];
  role: string;
  duration: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GreenLife Wellness Center Web Application",
    description:
      "A web application for GreenLife Wellness Center, providing users with a seamless booking experience, room management, and customer support.",
    longDescription:
      "GreenLife Wellness Center is a full-stack web application built to digitize and streamline the operations of a modern wellness center. It features an intuitive client-facing booking portal, a comprehensive admin dashboard for managing appointments, room allocations, and staff schedules. The system integrates real-time availability checks, automated confirmation emails, and a customer support chat module — all packaged within a clean, responsive Bootstrap UI.",
    image: "/GreenLife.png",
    gallery: [
      "/GL-1.png",
      "/GL-2.png",
      "/GL-3.png",
      "/GL-4.png",
      "/GL-5.png",
    ],
    technologies: ["HTML", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    features: [
      "Online appointment booking with real-time availability",
      "Admin dashboard for room & staff management",
      "Customer support live chat module",
      "Automated email confirmations",
      "Responsive design for all devices",
      "Secure user authentication & role management",
    ],
    role: "Full-Stack Developer",
    duration: "3 months",
    status: "Completed",
  },
  {
    id: 2,
    title: "LuxeVista Resort Mobile Application",
    description:
      "A mobile application for LuxeVista Resort, providing users with a seamless booking experience, room management, and customer support.",
    longDescription:
      "LuxeVista Resort is a premium Android mobile application developed for a luxury resort chain. It enables guests to explore resort amenities, browse available rooms with 360° virtual tours, make direct reservations, and manage their stays — all from their smartphone. The app leverages Firebase for real-time data sync and push notifications, ensuring guests are always informed about their upcoming bookings and resort offers.",
    image: "/LuxeVista.png",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop",
    ],
    technologies: ["Java", "Kotlin", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    features: [
      "Interactive room browsing with virtual tour previews",
      "Real-time reservation & availability management",
      "Push notifications for booking confirmations & offers",
      "Firebase Firestore for real-time data synchronization",
      "Secure user authentication via Firebase Auth",
      "In-app customer support messaging",
    ],
    role: "Android Developer",
    duration: "4 months",
    status: "Completed",
  },
  {
    id: 3,
    title: "Gadget Hub",
    description:
      "A responsive e-commerce platform for tech gadgets, featuring product browsing, filtering, cart management, and checkout.",
    longDescription:
      "Gadget Hub is a modern e-commerce platform dedicated to tech enthusiasts. Built with Vue.js and powered by a JavaScript backend, it delivers a smooth shopping experience with advanced product filtering, wishlist management, and a streamlined multi-step checkout flow. Interactive charts powered by Chart.js give users insight into product ratings and sales trends.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c228f29e55?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=500&fit=crop",
    ],
    technologies: ["Vue.js", "JavaScript", "Chart.js", "Weather API"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    features: [
      "Advanced product search and filtering",
      "Wishlist and cart management",
      "Multi-step checkout flow",
      "Interactive sales & rating charts",
      "Responsive mobile-first design",
    ],
    role: "Frontend Developer",
    duration: "2 months",
    status: "Completed",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS, showcasing projects and skills with smooth animations.",
    longDescription:
      "This portfolio website is a fully custom-designed, performance-optimized showcase of my work and skills. Built with React 19 and styled using Tailwind CSS v4, it features a dark neon aesthetic with glassmorphism cards, scroll-triggered animations, a custom cursor effect, and a dynamic typewriter hero section. The site is fully responsive and achieves near-perfect Lighthouse scores.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    features: [
      "Scroll-triggered entrance animations",
      "Custom animated cursor effect",
      "Glassmorphism UI components",
      "Typewriter hero text effect",
      "Fully responsive across all devices",
      "Optimized Lighthouse performance score",
    ],
    role: "Designer & Developer",
    duration: "1 month",
    status: "Completed",
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Real-time chat application with multiple rooms, file sharing, and emoji support. Built with modern web technologies for seamless communication.",
    longDescription:
      "A real-time chat platform powered by Socket.io and Node.js, enabling instant messaging across multiple themed chat rooms. Users can share files, react with emojis, and see live typing indicators. The Material-UI frontend delivers a polished, intuitive interface, while MongoDB ensures persistent chat history with efficient querying.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=500&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    ],
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    features: [
      "Real-time bi-directional messaging via WebSockets",
      "Multiple themed chat rooms",
      "File sharing & emoji reactions",
      "Live typing indicators",
      "Persistent chat history with MongoDB",
      "User authentication & profile avatars",
    ],
    role: "Full-Stack Developer",
    duration: "2 months",
    status: "Completed",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "Personal finance management app with budget tracking, expense categorization, and detailed analytics with interactive charts.",
    longDescription:
      "Expense Tracker is a personal finance management application that empowers users to take control of their spending. It allows creating custom budget categories, logging daily transactions, and visualizing spending patterns through rich Chart.js dashboards. All data is persisted in Local Storage for a privacy-first, zero-backend experience.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=500&fit=crop",
    ],
    technologies: ["React", "Chart.js", "Local Storage", "CSS Modules"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    features: [
      "Custom budget category creation",
      "Daily transaction logging",
      "Interactive spending analytics charts",
      "Monthly budget vs. actual comparison",
      "Privacy-first: no backend, data stored locally",
      "Export transactions to CSV",
    ],
    role: "Frontend Developer",
    duration: "6 weeks",
    status: "Completed",
  },
];
