import { Testimonial } from "@/types/testimonialsType";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CTO",
    company: "Tech Innovations Ltd",
    content: "Very user-friendly interface with a variety of features in the heart of a thriving tech community.",
    avatar: "/testimonials/12.jpg", // Replace with your image path
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    company: "Digital Solutions Inc",
    content: "Their software development team delivered beyond our expectations with excellent communication throughout the project.",
    avatar: "/testimonials/31.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "CEO",
    company: "StartUp Ventures",
    content: "The custom solution they built for us has transformed our business operations and improved efficiency by 40%.",
    avatar: "/testimonials/42.jpg", // Replace with your image path
  },
];

export default testimonials;