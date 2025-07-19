import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Removed API dependencies for static build
import { Mail, Phone, MapPin, Linkedin, Download, Github } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // For static website, create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Dheeraj,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
    );
    const mailtoLink = `mailto:workwithdheeraj@outlook.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    form.reset();
  };

  const handleDownloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement("a");
    link.href = "/Dheeraj_Parihar_Resume.pdf";
    link.download = "Dheeraj_Parihar_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-300" />,
      label: "Email",
      value: "workwithdheeraj@outlook.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-300" />,
      label: "Phone",
      value: "+91 8979082205",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-300" />,
      label: "Location",
      value: "Haldwani, Uttarakhand, India",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-300" />,
      label: "LinkedIn",
      value: "linkedin.com/in/dheeraj-parihar",
      link: "https://www.linkedin.com/in/dheeraj-parihar",
    },
    {
      icon: <Github className="h-5 w-5 text-blue-300" />,
      label: "GitHub",
      value: "github.com/Dheeraj0-0",
      link: "https://github.com/Dheeraj0-0",
    },
  ];

  return (
    <section id="contact" className="bg-primary text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to contribute to innovative projects and grow with your team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  {info.icon}
                  <div className="ml-4">
                    <div className="font-medium">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-blue-100">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={handleDownloadResume}
                className="bg-white text-primary hover:bg-blue-50 shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-blue-100">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-white/50"
                    placeholder="Your name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-blue-100">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-white/50"
                    placeholder="your.email@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-blue-100">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-white/50 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-blue-50"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
