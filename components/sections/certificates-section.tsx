"use client"

import Image from "next/image"

const certificates = [
  {
    src: "/Capgemini.png",
    alt: "Capgemini Fullstack Course Certificate",
    title: "Capgemini Fullstack Training"
  }, 
  {
    src: "/Learnathon.png", 
    alt: "ICT Learnathon 2023 Certificate",
    title: "ICT Learnathon 2023"
  },
  { 
    src: "/Skill la thon.png",
    alt: "Skill-a-thon 2024 Certificate", 
    title: "UiPath Skill-a-thon 2024" 
  },
  {
    src: "/python-certiport.png",
    alt: "Python Certificate",
    title: "Python Certification"
  },
  {
    src: "/tripxplo intern certificate.png",
    alt: "Tripmilestone Internship Certificate",
    title: "Frontend Development Internship"
  }
]

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificate Gallery
        </h2>
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto pb-4">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-card w-24 h-64 xs:w-28 xs:h-72 sm:w-32 sm:h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem] flex-shrink-0">
              <div className="certificate-card-inner">
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={1024}
                  height={2048}
                  quality={100}
                  priority={index < 2}
                  unoptimized={true}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  placeholder="empty"
                  className="rounded-lg w-full h-full object-cover certificate-image-hq"
                />
                <div className="certificate-overlay">
                  <p className="text-white font-semibold text-xs md:text-sm">{certificate.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
