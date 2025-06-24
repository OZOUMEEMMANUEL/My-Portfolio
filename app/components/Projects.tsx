"use client"

import { ExternalLink, Github, Zap, Globe, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useRef } from "react"
import ImageCarousel from "./ImageCarousel"

export default function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  // Refs for per-category animation
  const categoryRefs = useRef<(HTMLElement | null)[]>([])

  const projects = [
    {
      category: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      color: "blue",
      items: [
        {
          title: "Kalebstore E-commerce",
          description: "Full-stack e-commerce platform with payment integration and admin dashboard",
          image: "/placeholder.svg?height=200&width=300",
          skills: ["JavaScript", "React", "Node.js", "MongoDB"],
          liveDemo: "#",
          github: "#",
          testimonial: "Increased sales by 40% within first month",
        },
        {
          title: "ESUT Chat App",
          description:
            "Real-time messaging application for university students with group chat features (Currently under development)",
          image: "/placeholder.svg?height=200&width=300",
          skills: ["React", "Socket.io", "Express", "PostgreSQL"],
          liveDemo: "#",
          github: "#",
          testimonial: "In active development - targeting 500+ students for beta testing",
        },
        {
          title: "Emason-Hub Interior Décor Store",
          description:
            "Elegant online store for purchasing curtains, window blinds, and wallpapers with seamless shopping experience",
          image: "/images/emasonhub-website.png",
          skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
          liveDemo: "https://emasonhub.vercel.app/",
          github: "#",
          testimonial: "Streamlined home décor shopping with mobile-friendly design",
        },
        {
          title: "EmbedIQ Arduino Tech School Website",
          description:
            "Official website for EmbedIQ Arduino-based tech and robotics school with course information and tech-focused branding",
          image: "/images/embediq-website.png",
          skills: ["HTML", "CSS", "JavaScript", "Web Design"],
          liveDemo: "https://embed-iq.vercel.app/",
          github: "#",
          testimonial: "Attracted 200+ students and potential collaborators",
        },
        {
          title: "Digital School Intern Platform",
          description:
            "Internal web platform for managing 6-month coding and robotics internship program with efficient onboarding system",
          image: "/images/digital-school-platform.png",
          skills: ["HTML", "CSS", "JavaScript", "Form Management"],
          github: "#",
          testimonial: "Successfully managed 50+ interns with streamlined registration and tracking",
        },
        {
          title: "Curriculum & Notes Portal",
          description:
            "Content delivery platform for coding and robotics lessons with course breakdown, downloadable notes, and project guides",
          image: "/placeholder.svg?height=200&width=300",
          skills: ["HTML", "CSS", "Content Management", "Educational Design"],
          github: "#",
          testimonial: "Enhanced learning experience for 300+ students across multiple courses",
        },
      ],
    },
    {
      category: "Robotics & IoT",
      icon: <Cpu className="h-5 w-5" />,
      color: "indigo",
      items: [
        {
          title: "Smart Elevator with RFID",
          description: "Arduino-based elevator control system with RFID access control and floor selection",
          image: "/images/elevator-project.jpg",
          skills: ["Arduino", "C++", "RFID", "Servo Motors"],
          github: "#",
          testimonial: "Improved building security by 60%",
        },
        {
          title: "Motion Sensor Alarm System",
          description: "PIR sensor-based security system with SMS notifications and mobile app control",
          image: "/images/motion-sensor-project.jpg",
          skills: ["Arduino", "PIR Sensor", "GSM Module", "Mobile App"],
          github: "#",
          testimonial: "Zero false alarms in 6 months of operation",
        },
        {
          title: "Fire Alarm System",
          description:
            "Advanced fire detection system with smoke sensors, temperature monitoring, and automatic emergency response",
          image: "/images/fire-alarm-project.jpg",
          skills: ["Arduino", "Smoke Sensor", "Temperature Sensor", "Buzzer", "LED Display"],
          github: "#",
          testimonial: "Reduced fire response time by 75% with zero false positives",
        },
        {
          title: "EV3 Robot",
          description:
            "Three different LEGO Mindstorms EV3 robot configurations: robotic arm manipulator, mobile rover, and walking quadruped - showcasing versatile robotics design and programming",
          images: ["/images/ev3-robot-1.jpg", "/images/ev3-robot-2.jpg", "/images/ev3-robot-3.jpg"],
          skills: ["LEGO Mindstorms", "EV3-G", "Sensors", "Motors", "Programming"],
          github: "#",
          testimonial:
            "Successfully built 3 different robot types, each completing specialized tasks and navigation challenges",
        },
        {
          title: "Automatic Car Parking System",
          description:
            "Smart parking solution with ultrasonic sensors, servo motors, and automated barrier control for efficient vehicle management",
          image: "/images/car-parking-system.jpg",
          skills: ["Arduino", "Ultrasonic Sensor", "Servo Motors", "LCD Display", "C++"],
          github: "#",
          testimonial: "Increased parking efficiency by 85% and reduced wait times",
        },
        {
          title: "Two Traffic Light Prototype",
          description:
            "Intelligent traffic management system with synchronized dual traffic lights, pedestrian crossing, and timer displays",
          image: "/placeholder.svg?height=200&width=300",
          skills: ["Arduino", "LED Arrays", "Timer Circuits", "Traffic Logic", "Electronics"],
          github: "#",
          testimonial: "Improved traffic flow simulation with 90% accuracy",
        },
      ],
    },
    {
      category: "Teaching & Workshops",
      icon: <Zap className="h-5 w-5" />,
      color: "purple",
      items: [
        {
          title: "Scratch Programming Classes",
          description: "Interactive coding workshops for kids aged 8-14 using Scratch visual programming",
          image: "/images/scratch-programming.png",
          skills: ["Scratch", "Teaching", "Curriculum Design", "Child Psychology"],
          testimonial: "95% of students continued with advanced programming",
        },
        {
          title: "Arduino Internship Program",
          description: "Comprehensive 8-week internship program covering embedded systems fundamentals",
          image: "/images/arduino-internship.png",
          skills: ["Arduino", "Electronics", "Project Management", "Mentoring"],
          testimonial: "20+ interns successfully placed in tech companies",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      indigo: "bg-indigo-100 text-indigo-600",
      purple: "bg-purple-100 text-purple-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work across web development, embedded systems, and education
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => {
            return (
              <div key={categoryIndex} ref={(el) => (categoryRefs.current[categoryIndex] = el)}>
                <div className={`flex items-center mb-8 transition-all duration-1000`}>
                  <div className={`inline-flex p-2 rounded-lg mr-3 ${getColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 overflow-hidden border border-gray-100`}
                      style={{ transitionDelay: `${projectIndex * 200}ms` }}
                    >
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        {project.images ? (
                          <ImageCarousel images={project.images} alt={project.title} />
                        ) : (
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {project.testimonial && (
                          <div className="bg-gray-50 p-3 rounded-lg mb-4">
                            <p className="text-sm text-gray-600 italic">"{project.testimonial}"</p>
                          </div>
                        )}

                        <div className="flex gap-3">
                          {project.liveDemo && (
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => window.open(project.liveDemo, "_blank")}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                          {project.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => window.open(project.github, "_blank")}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
