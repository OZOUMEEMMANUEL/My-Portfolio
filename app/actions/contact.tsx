"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
})

export async function submitContactForm(formData: FormData) {
  try {
    console.log("🚀 Contact form submission started")

    // Validate environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service not configured. Please contact the administrator.",
      }
    }

    console.log("✅ API Key found, length:", process.env.RESEND_API_KEY.length)

    // Extract and validate form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    console.log("📝 Form data extracted:", {
      name: rawData.name,
      email: rawData.email,
      subject: rawData.subject,
      messageLength: rawData.message?.length || 0,
    })

    // Validate the data
    const validatedData = contactSchema.parse(rawData)
    console.log("✅ Data validation passed")

    // Create the email content with techy styling
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: 'Courier New', monospace;
              background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
              color: #e2e8f0;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: rgba(15, 23, 42, 0.9);
              border: 1px solid #06b6d4;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 1px solid #334155;
            }
            .title {
              color: #06b6d4;
              font-size: 24px;
              font-weight: bold;
              margin: 0;
            }
            .subtitle {
              color: #64748b;
              font-size: 14px;
              margin: 5px 0 0 0;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: rgba(30, 41, 59, 0.5);
              border-left: 3px solid #06b6d4;
              border-radius: 6px;
            }
            .field-label {
              color: #06b6d4;
              font-size: 12px;
              font-weight: bold;
              text-transform: uppercase;
              margin-bottom: 8px;
              display: block;
            }
            .field-value {
              color: #e2e8f0;
              font-size: 14px;
              line-height: 1.6;
              word-wrap: break-word;
            }
            .message-field {
              background: rgba(30, 41, 59, 0.7);
              border-left: 3px solid #8b5cf6;
            }
            .message-field .field-label {
              color: #8b5cf6;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #334155;
              text-align: center;
              color: #64748b;
              font-size: 12px;
            }
            .timestamp {
              color: #06b6d4;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="title">&lt; New Contact Form Submission /&gt;</h1>
              <p class="subtitle">// Incoming transmission from portfolio website</p>
            </div>
            
            <div class="field">
              <span class="field-label">&gt; sender.name:</span>
              <div class="field-value">${validatedData.name}</div>
            </div>
            
            <div class="field">
              <span class="field-label">&gt; sender.email:</span>
              <div class="field-value">${validatedData.email}</div>
            </div>
            
            <div class="field">
              <span class="field-label">&gt; message.subject:</span>
              <div class="field-value">${validatedData.subject}</div>
            </div>
            
            <div class="field message-field">
              <span class="field-label">&gt; message.body:</span>
              <div class="field-value">${validatedData.message.replace(/\n/g, "<br>")}</div>
            </div>
            
            <div class="footer">
              <p>Timestamp: <span class="timestamp">${new Date().toISOString()}</span></p>
              <p>// Sent via Brown's Portfolio Contact System</p>
              <p style="margin-top: 15px; padding: 10px; background: rgba(6, 182, 212, 0.1); border-radius: 6px; border: 1px solid #06b6d4;">
                <strong style="color: #06b6d4;">Reply directly to this email</strong> to respond to ${validatedData.name}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send the email
    console.log("📧 Attempting to send email...")

    const emailResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ozoumeemmanuel18@gmail.com"], // Using the verified email address from Resend
      replyTo: validatedData.email,
      subject: `[Portfolio] ${validatedData.subject}`,
      html: emailHtml,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Sent at: ${new Date().toISOString()}
Reply directly to this email to respond to the sender.
      `,
    })

    console.log("📧 Email send result:", emailResult)

    if (emailResult.error) {
      console.error("❌ Resend API error:", emailResult.error)
      return {
        success: false,
        error: `Email service error: ${emailResult.error.message}`,
      }
    }

    console.log("✅ Email sent successfully! ID:", emailResult.data?.id)

    return {
      success: true,
      message: "Message transmitted successfully! I'll respond within 24 hours.",
    }
  } catch (error) {
    console.error("❌ Contact form error:", error)

    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(", ")
      return {
        success: false,
        error: `Validation error: ${errorMessages}`,
      }
    }

    return {
      success: false,
      error: "System error occurred. Please try again or contact directly via email.",
    }
  }
}
