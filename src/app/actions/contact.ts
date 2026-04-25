"use server";

import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Extract data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const program = formData.get("program") as string;
  const message = formData.get("message") as string;

  // 2. Validate data
  if (!name || !email || !message) {
    return { error: "Name, email, and message fields are required." };
  }
  
  if (!email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  // 3. Simulate network delay (gives a realistic UI loading state)
  await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    // 4. Save to a mock database (local JSON file)
    const lead = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "Not provided",
      program: program || "Not selected",
      message,
      date: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), 'leads.json');
    
    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      leads = JSON.parse(fileData);
    }
    
    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // 5. Send Email via Nodemailer (if configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // You can change this to your provider
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'info@strikava.com', // Where you want to receive the leads
        subject: `New Lead from ${name}: ${program || 'General Inquiry'}`,
        text: `
          New Contact Form Submission!
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "Not provided"}
          Program of Interest: ${program || "Not selected"}
          
          Message:
          ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // 6. Return success
    return { success: true, message: "Thank you! Your message has been sent successfully. Our team will contact you shortly." };
  } catch (error) {
    console.error("Error saving lead or sending email:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}

