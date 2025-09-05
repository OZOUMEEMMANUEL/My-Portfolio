"use client"

import { GraduationCap, Code, Heart } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import Image from "next/image"

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between hardware and software to create innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education & Experience</h3>
                <p className="text-gray-600">
                  Currently pursuing my passion in technology with hands-on experience in embedded systems, web
                  development, and teaching. I've worked on various projects ranging from IoT solutions to full-stack
                  web applications.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Journey</h3>
                <p className="text-gray-600">
                  My journey began with curiosity about how things work. From building simple circuits to developing
                  complex web applications, I've continuously expanded my skill set to solve real-world problems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What Inspires Me</h3>
                <p className="text-gray-600">
                  I'm inspired by the potential of technology to improve lives. Whether it's automating daily tasks
                  through IoT or creating user-friendly web interfaces, I believe in making technology accessible and
                  meaningful.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-400 ${
              imageVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              {/* Tech background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400 rounded rotate-45"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-indigo-400 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-400 rounded"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-green-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-300 rounded rotate-12"></div>
              </div>

              <div className="text-center relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/profile.jpg"
                    alt="Brown - Embedded Systems & Web Developer"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brown</h3>
                <p className="text-gray-600 mb-6">Embedded Systems & Web Developer</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">20+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">4+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
