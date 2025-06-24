"use client"

import { Code, Wrench, Cpu, Users } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Skills() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Coding Languages",
      icon: <Code className="h-6 w-6" />,
      color: "blue",
      skills: [
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      color: "indigo",
      skills: [
        { name: "Arduino", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Git", level: 85 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "Technologies",
      icon: <Cpu className="h-6 w-6" />,
      color: "purple",
      skills: [
        { name: "Robotics", level: 85 },
        { name: "Embedded Systems", level: 90 },
        { name: "IoT", level: 80 },
        { name: "Web Development", level: 90 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      color: "green",
      skills: [
        { name: "Problem-solving", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Teaching", level: 85 },
        { name: "Communication", level: 80 },
      ],
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

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600",
      indigo: "bg-indigo-600",
      purple: "bg-purple-600",
      green: "bg-green-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for bringing ideas to life through technology
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-1000 ${
                gridVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(category.color)}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                        style={{
                          width: gridVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
