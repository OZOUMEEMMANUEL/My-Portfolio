"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://formspree.io/f/mdkwrlwy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setResult({
          success: true,
          message: "Message sent successfully! I'll respond within 24 hours.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        setResult({
          success: false,
          message: "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Network error. Please check your connection.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg font-mono">{"> contact_me.send_message()"}</p>
        </div>

        {/* Contact Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <h3 className="text-cyan-400 font-mono font-bold">Email</h3>
              </div>
              <p className="text-gray-300 ml-8">emmanuelozoume18@gmail.com</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <h3 className="text-purple-400 font-mono font-bold">Location</h3>
              </div>
              <p className="text-gray-300 ml-8">Nigeria</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-blue-400 font-mono font-bold">Response Time</h3>
              </div>
              <p className="text-gray-300 ml-8">Within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                {`// I'm always open to new opportunities and collaborations.\n// Whether it's a project inquiry, partnership proposal,\n// or just a friendly chat - feel free to reach out!`}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                <span className="text-cyan-500">&gt;</span> Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                <span className="text-cyan-500">&gt;</span> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-purple-400 font-mono text-sm flex items-center gap-2">
                <span className="text-purple-500">&gt;</span> Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                required
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-blue-400 font-mono text-sm flex items-center gap-2">
                <span className="text-blue-500">&gt;</span> Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={5}
                required
                disabled={isSubmitting}
                className="w-full bg-slate-800/50 border border-blue-500/30 text-white placeholder:text-gray-500 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-mono font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-bounce">.</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                    .
                  </span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                    .
                  </span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  TRANSMIT MESSAGE
                </>
              )}
            </button>

            {result && (
              <div
                className={`p-4 rounded-lg border flex items-start gap-3 ${
                  result.success
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                }`}
              >
                {result.success ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <p className="font-mono text-sm">{result.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center text-gray-500 font-mono text-sm">
          <p>
            {"</"} Response guaranteed within 24 hours {"/>"}
          </p>
        </div>
      </div>
    </section>
  )
}
