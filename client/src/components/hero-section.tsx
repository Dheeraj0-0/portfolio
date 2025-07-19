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
    // Create a download link for the resume
    const link = document.createElement("a");
    link.href = "/api/download-resume";
    link.download = "Dheeraj_Parihar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
