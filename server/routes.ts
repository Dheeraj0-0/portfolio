import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", { name, email, message });
      
      // You could store this in a database or send via email service
      // await storage.createContactSubmission({ name, email, message });
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      // In a real application, you would serve the actual resume file
      // For now, we'll create a simple text response
      const resumeContent = `
DHEERAJ PARIHAR
Associate Engineer & Azure Certified Professional

Contact Information:
- Location: Haldwani, Uttarakhand, India
- Phone: +91 8979082205
- Email: workwithdheeraj@outlook.com
- LinkedIn: linkedin.com/in/dheeraj-parihar
- GitHub: github.com/Dheeraj0-0

KEY SKILLS:
• Cloud & DevOps: Azure, Terraform, Ansible, Docker, Kubernetes, CI/CD (Jenkins, Azure DevOps)
• Programming & Scripting: Python, Bash, OOP, Data Structures and Algorithms
• Web & Application Development: Full-stack concepts, Git, GitHub
• Database & Networking: SQL, NoSQL, TCP/IP, Load Balancing
• Monitoring & Security: Azure Monitor, CloudWatch, Cloud Security
• Soft Skills: Problem-solving, Team Collaboration, Agile, Time Management

CERTIFICATIONS:
• Microsoft Certified: Azure Administrator Associate (AZ-104)
• Microsoft Certified: Azure Fundamentals (AZ-900)
• Google Cloud Skills Boost
• Networking Basics (Cisco Network Academy)
• AWS Fundamentals (Coursera)

PROJECTS:
1. Secure E-Commerce Platform Deployment
   - Automated deployment pipelines with CI/CD integration
   - Implemented robust security measures and network policies

2. Phishing URL Detection Project
   - Web-based application for identifying malicious URLs
   - Machine learning algorithms with high accuracy detection

3. Azure Active Directory Monitoring Projects
   - Configured Splunk for real-time Azure AD log monitoring
   - Automated reporting and compliance tracking

EDUCATION:
Bachelor of Computer Applications (August 2022 - July 2025)
Graphic Era Hill University, Uttarakhand, India
CGPA: 7.71/10
      `;

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Disposition', 'attachment; filename="Dheeraj_Parihar_Resume.txt"');
      res.send(resumeContent);
      
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error downloading resume" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
