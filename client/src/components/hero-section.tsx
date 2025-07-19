import { Button } from "@/components/ui/button";

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
    <section id="home" className="bg-gradient-to-br from-primary/90 via-primary/80 to-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dheeraj Parihar</h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-6">
              Associate Engineer & Azure Certified Professional
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Motivated Associate Engineer with Microsoft Azure certifications and hands-on experience in cloud technologies. 
              Skilled in Python, automation, and secure application deployment with a strong foundation in modern development practices. 
              Passionate about leveraging cloud solutions to solve real-world problems and eager to contribute fresh perspectives to innovative technology teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                View Resume
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Professional developer"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
