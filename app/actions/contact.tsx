"use server"

import { z } from "zod"
import { Resend } from "resend"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables")
      return {
        success: false,
        error: "Email service is not configured. Please try again later.",
      }
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    // Validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Please check your form data and try again.",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Using Resend's test domain
      to: ["ozoumeemmanuel18@gmail.com"], // Changed to your verified email
      replyTo: email, // So you can reply directly to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out through your website!</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Contact Details</h2>
              <div style="display: grid; gap: 15px;">
                <div>
                  <strong style="color: #374151;">Name:</strong>
                  <span style="color: #6b7280; margin-left: 10px;">${name}</span>
                </div>
                <div>
                  <strong style="color: #374151;">Email:</strong>
                  <span style="color: #3b82f6; margin-left: 10px;">${email}</span>
                </div>
                <div>
                  <strong style="color: #374151;">Subject:</strong>
                  <span style="color: #6b7280; margin-left: 10px;">${subject}</span>
                </div>
              </div>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Message:</h3>
              <div style="background: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                <p style="line-height: 1.6; color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                📅 Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
                Sent from your portfolio website
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    console.log("Email sent successfully:", data)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}
