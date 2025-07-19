import { Button } from "@/components/ui/button";
import profileImage from "@assets/picofme_1752927334058.png";

export default function HeroSection() {
  const handleGetInTouch = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleViewResume = () => {
    // For static website, create a resume content and download as text file
    const resumeContent = `DHEERAJ PARIHAR
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
  https://learn.microsoft.com/en-us/users/dheerajparihar-2027/credentials/5642cb1f01cd074f
• Microsoft Certified: Azure Fundamentals (AZ-900)
  https://learn.microsoft.com/en-gb/users/dheerajparihar-2027/credentials/515b573f4911b0e
• Google Cloud Skills Boost
  https://www.cloudskillsboost.google/public_profiles/89643b02-2aaf-4acf-8f41-a1298a02824d
• Networking Basics (Cisco Network Academy)
  https://www.credly.com/badges/289a6bfb-e410-43e8-b4d7-929aef573400/linked_in_profile
• AWS Fundamentals (Coursera)
  https://www.coursera.org/account/accomplishments/specialization/WB2ED8EAU5DW

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
CGPA: 7.71/10`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Dheeraj_Parihar_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Dheeraj Parihar</h1>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6 drop-shadow-md">
              Associate Engineer & Azure Certified Professional
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed drop-shadow-md">
              Motivated Associate Engineer with Microsoft Azure certifications and hands-on experience in cloud technologies. 
              Skilled in Python, automation, and secure application deployment with a strong foundation in modern development practices. 
              Passionate about leveraging cloud solutions to solve real-world problems and eager to contribute fresh perspectives to innovative technology teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                onClick={handleGetInTouch}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-3 font-semibold shadow-lg"
              >
                Get in Touch
              </Button>
              <Button
                onClick={handleViewResume}
                variant="outline"
                className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-primary"
              >
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://github.com/Dheeraj0-0", "_blank")}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://www.linkedin.com/in/dheeraj-parihar", "_blank")}
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = "mailto:workwithdheeraj@outlook.com"}
              >
                Email
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={profileImage}
              alt="Dheeraj Parihar - Professional Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
