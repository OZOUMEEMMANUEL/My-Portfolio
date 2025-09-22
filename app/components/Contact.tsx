"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { submitContactForm } from "../actions/contact"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await submitContactForm(formData)
      setResult(response)
    } catch (error) {
      setResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000" />

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {"<"} Initialize Contact {"/>"}
          </h2>
          <p className="text-xl text-slate-300 font-mono">// Ready to collaborate? Let's establish a connection</p>
          <div className="mt-4 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
            <CardContent className="p-8">
              <form action={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-cyan-400 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {"> name: string"}
                  </label>
                  <div className="relative group">
                    <Input
                      name="name"
                      required
                      placeholder="// Enter your full name"
                      className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder:text-slate-500 font-mono focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-500/50"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-cyan-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {"> email: string"}
                  </label>
                  <div className="relative group">
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="// your.email@domain.com"
                      className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder:text-slate-500 font-mono focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-500/50"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-cyan-400 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {"> subject: string"}
                  </label>
                  <div className="relative group">
                    <Input
                      name="subject"
                      required
                      placeholder="// What's this about?"
                      className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder:text-slate-500 font-mono focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-500/50"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-purple-400 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {"> message: string[]"}
                  </label>
                  <div className="relative group">
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      placeholder={`// Your message here...\n// Feel free to include:\n// - Project details\n// - Collaboration ideas\n// - Questions or inquiries`}
                      className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder:text-slate-500 font-mono focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-purple-500/50 resize-none"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-mono text-lg py-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                        </div>
                        Transmitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Execute Send()
                      </div>
                    )}
                  </Button>
                </div>

                {/* Result Message */}
                {result && (
                  <div
                    className={`p-4 rounded-lg border font-mono text-sm ${
                      result.success
                        ? "bg-green-900/20 border-green-500/30 text-green-400"
                        : "bg-red-900/20 border-red-500/30 text-red-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {result.success ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      <span className="font-bold">{result.success ? "// SUCCESS:" : "// ERROR:"}</span>
                    </div>
                    <p className="mt-1 ml-6">{result.message}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-700/50">
              <p className="text-slate-300 font-mono text-sm mb-2">// Alternative contact methods:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a
                  href="mailto:emmanuelozoume18@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  emmanuelozoume18@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-slate-500 font-mono text-sm">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />
        <p>&copy; 2025 Emmanuel Brown. All rights reserved.</p>
        <p className="mt-2">// Built with Next.js, TypeScript & Tailwind CSS</p>
      </div>
    </section>
  )
}
