"use server"

import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    console.log("🚀 Contact form submission started")

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is not set")
      return {
        success: false,
        error: "Email service not configured",
      }
    }

    const resend = new Resend(apiKey)

    // Validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      console.log("Validation errors:", validatedFields.error.flatten().fieldErrors)
      return {
        success: false,
        error: "Please check your form data",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validatedFields.data

    console.log("📝 Sending email to ozoumeemmanuel18@gmail.com")

    // Send email
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ozoumeemmanuel18@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #e2e8f0; padding: 40px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%); padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">NEW MESSAGE RECEIVED</h1>
            <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Portfolio Contact System</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #06b6d4; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
              <span style="color: #06b6d4; font-weight: bold;">&gt; FROM:</span>
              <span style="color: #e2e8f0; margin-left: 10px;">${name} &lt;${email}&gt;</span>
            </div>
            <div style="margin-bottom: 15px;">
              <span style="color: #06b6d4; font-weight: bold;">&gt; SUBJECT:</span>
              <span style="color: #e2e8f0; margin-left: 10px;">${subject}</span>
            </div>
          </div>

          <div style="background: rgba(139, 92, 246, 0.1); border-left: 3px solid #8b5cf6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="color: #8b5cf6; margin: 0 0 10px 0; font-weight: bold;">&gt; MESSAGE:</p>
            <p style="margin: 0; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">Sent: ${new Date().toISOString()}</p>
            <p style="margin: 5px 0 0 0;">// Brown's Portfolio System</p>
          </div>
        </div>
      `,
    })

    console.log("📧 Email result:", result)

    if (result.error) {
      console.error("❌ Resend error:", result.error)
      return {
        success: false,
        error: `Email error: ${result.error.message}`,
      }
    }

    console.log("✅ Email sent successfully!")

    return {
      success: true,
      message: "Message transmitted! I'll respond within 24 hours.",
    }
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return {
      success: false,
      error: "An error occurred. Please try again.",
    }
  }
}
