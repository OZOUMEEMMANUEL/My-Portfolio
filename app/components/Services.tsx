"use client"

import { Cpu, GraduationCap, Globe, FileText, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation()
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Custom Arduino Projects",
      description:
        "From home automation to industrial IoT solutions, I create custom embedded systems tailored to your needs.",
      features: [
        "Hardware design & prototyping",
        "Custom firmware development",
        "Sensor integration & calibration",
        "Mobile app connectivity",
        "Documentation & support",
      ],
      timeline: "2-6 weeks",
      color: "blue",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Robotics Tutoring",
      description:
        "One-on-one or group sessions covering Arduino, robotics fundamentals, and hands-on project development.",
      features: [
        "Beginner to advanced levels",
        "Hands-on project-based learning",
        "Custom curriculum design",
        "Take-home project kits",
        "Progress tracking & certificates",
      ],
      timeline: "Flexible scheduling",
      color: "indigo",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Design & Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: [
        "Responsive design for all devices",
        "E-commerce functionality",
        "Content management systems",
        "SEO optimization",
        "Hosting & maintenance",
      ],
      timeline: "1-4 weeks",
      color: "purple",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Technical Documentation",
      description: "Clear, comprehensive documentation for your technical projects, APIs, and user manuals.",
      features: [
        "API documentation",
        "User guides & manuals",
        "Technical specifications",
        "Code documentation",
        "Video tutorials",
      ],
      timeline: "1-2 weeks",
      color: "green",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
    }
    return colors[color as keyof typeof colors]
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 ${
                servicesVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-6 ${getColorClasses(service.color)}`}>{service.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{service.timeline}</span>
                </div>
              </div>

              <Button onClick={scrollToContact} className="w-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white transition-all duration-1000 ${
            ctaVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your needs. I offer free consultations to
            understand your requirements.
          </p>
          <Button
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
