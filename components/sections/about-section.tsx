"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center max-w-4xl mx-auto px-4">
            I am an Frontend Developer with a strong foundation in effective communication principles and a
            passion for creating intuitive, user-centered designs. My goal is to enhance user understanding and
            interaction with digital products through clear, accessible, and engaging experiences that support
            usability and drive user satisfaction.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <OptimizedImage
                  src="/images/profile.jpg"
                  alt="Arunpandian C"
                  width={256}
                  height={320}
                  className="w-32 h-40 sm:w-48 sm:h-60 md:w-64 md:h-80 object-cover rounded-lg border-2 border-white/20 shadow-lg"
                  priority
                />
              </div>

              {/* Personal Information */}
              <div className="flex-1 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">Frontend Developer</h3>
                <p className="text-white/80 mb-8 italic">
                  Passionate about creating seamless digital experiences through thoughtful design and clean code.
                  Dedicated to continuous learning and staying updated with the latest industry trends.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Left Column */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-24 mb-1 xs:mb-0">Birthday:</span>
                      <span className="text-white/90 text-sm sm:text-base">25 September 2003</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-24 mb-1 xs:mb-0">Phone:</span>
                      <a href="tel:+918072396488" className="text-white/90 hover:text-purple-300 transition-colors text-sm sm:text-base">+91 8072396488</a>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-24 mb-1 xs:mb-0">City:</span>
                      <span className="text-white/90 text-sm sm:text-base">Puducherry, India</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-start">
                      <span className="text-purple-300 font-semibold w-full xs:w-24 mb-1 xs:mb-0">College:</span>
                      <span className="text-white/90 text-sm sm:text-base">Manakula vinayagar Institute of technology</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-20 mb-1 xs:mb-0">Age:</span>
                      <span className="text-white/90 text-sm sm:text-base">21</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-20 mb-1 xs:mb-0">Degree:</span>
                      <span className="text-white/90 text-sm sm:text-base">B.Tech in CSE</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-start">
                      <span className="text-purple-300 font-semibold w-full xs:w-20 mb-1 xs:mb-0">Email:</span>
                      <a href="mailto:arunpandiancse25@gmail.com" className="text-white/90 hover:text-purple-300 transition-colors text-sm sm:text-base break-all">arunpandiancse25@gmail.com</a>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center">
                      <span className="text-purple-300 font-semibold w-full xs:w-20 mb-1 xs:mb-0">Job:</span>
                      <span className="text-green-400 font-semibold text-sm sm:text-base">Open to Work</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-white/80 leading-relaxed">
                    Completed my B.Tech Computer Science Engineering course at Manakula Vinayagar Institute
                    of Technology. I specialize in frontend development with expertise in React, JavaScript, and
                    modern UI frameworks. My experience includes working as a Frontend Development Intern 
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}