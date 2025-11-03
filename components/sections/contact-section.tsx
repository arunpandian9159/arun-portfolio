"use client"

import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/ui/contact-form"

const contactData = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8072396488",
    href: "tel:+918072396488",
    color: "text-green-400",
    bgColor: "hover:shadow-green-500/20",
  },
  {
    icon: Mail, 
    label: "Email",
    value: "arunpandiancse25@gmail.com",
    href: "mailto:arunpandiancse25@gmail.com",
    color: "text-blue-400",
    bgColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Arunpandian-C",
    href: "https://www.linkedin.com/in/Arunpandian-C",
    color: "text-blue-500",
    bgColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "arunpandian9159",
    href: "https://github.com/arunpandian9159",
    color: "text-purple-400",
    bgColor: "hover:shadow-purple-500/20",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-16">
          {contactData.map((contact, index) => (
            <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card
                className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl ${contact.bgColor} cursor-pointer h-full`}
              >
                <CardContent className="p-4 sm:p-6 text-center flex flex-col items-center justify-center h-36 sm:h-48">
                  <contact.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 ${contact.color} group-hover:scale-125 transition-transform duration-300`}
                  />
                  <h3 className="text-white/90 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{contact.label}</h3>
                  <p className="text-white/70 text-xs sm:text-sm break-all leading-relaxed">{contact.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
              Ready to collaborate on your next project? Let's create something amazing together!
            </p>
            <Button
              onClick={() => window.open("mailto:arunpandiancse25@gmail.com", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Quick Email
            </Button>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Let's Connect</h3>
              <p className="text-white/70 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and development.
              </p>
              <p className="text-white/70 leading-relaxed">
                Feel free to reach out through any of the channels above, or use the contact form to send me a detailed message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}