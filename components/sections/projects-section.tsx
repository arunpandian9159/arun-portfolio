"use client"

import { useState } from "react"
import { ExternalLink, X, Download } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projectsData = [
  {
    id: "vehicle-detection",
    title: "Vehicle Detection and Identification",
    description:
      "A system used to detect and identify vehicles, including number plate detection for security purposes.",
    tech: ["Python"], 
    teamSize: 3,
  },
  {
    id: "nft-certification",
    title: "NFT Based Certification System for digital artwork using Polygon Blockchain",
    description:
      "A decentralized certification system for digital artwork leveraging NFT technology on the Polygon blockchain. Ensures authenticity, ownership, and provenance tracking.",
    tech: ["JavaScript", "Solidity"],
    teamSize: 3,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <>
      <section id="projects" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer aos-init aos-animate"
                data-aos="fade-up"
                onClick={() => setSelectedProject(project.id)}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300 group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-white/60">Team Size: {project.teamSize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-purple-300">Project Details</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {selectedProject === "nft-certification" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      NFT Based Certification System for Digital Artwork using Polygon Blockchain
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-4">
                      This project presents a decentralized certification system for digital artwork leveraging 
                      Non-Fungible Token (NFT) technology on the Polygon blockchain. The system ensures authenticity, 
                      ownership verification, and provenance tracking for digital art pieces, providing artists and 
                      collectors with a secure and transparent platform for digital art certification.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Conference Presentation</h5>
                      <div className="bg-white/5 rounded-lg p-4 mb-4">
                        <Image 
                          src="/SRM Conference image.jpg" 
                          alt="Conference Presentation" 
                          width={400}
                          height={300}
                          className="w-full rounded-lg mb-3"
                        />
                        <p className="text-white/80 text-sm">
                          Presented at the 2nd International Conference on Data Science and Business Systems 
                          (ICDSBS 2025) at SRM Institute of Science and Technology, Chennai.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Certificate of Presentation</h5>
                      <div className="bg-white/5 rounded-lg p-4 mb-4">
                        <Image 
                          src="/certificate of presentation.png" 
                          alt="Certificate of Presentation" 
                          width={400}
                          height={300}
                          className="w-full rounded-lg mb-3"
                        />
                        <p className="text-white/80 text-sm">
                          Official certificate recognizing the presentation of the research paper.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Publication Details</h5>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="space-y-2">
                        <p className="text-white/90"><strong>Paper ID:</strong> 622</p>
                        <p className="text-white/90"><strong>Conference:</strong> 2nd International Conference on Data Science and Business Systems (ICDSBS 2025)</p>
                        <p className="text-white/90"><strong>Venue:</strong> SRM Institute of Science and Technology, Chennai</p>
                        <p className="text-white/90"><strong>Date:</strong> 17-18 April 2025</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href="https://ieeexplore.ieee.org/document/11031552"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>View Published Paper on IEEE Xplore</span>
                          </a>
                          <a
                            href="/622_Final Camera Ready Copy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <Download className="w-5 h-5" />
                            <span>Download Research Paper PDF</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Technical Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "Solidity", "Polygon Blockchain", "NFT", "Smart Contracts", "Web3"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Key Features</h5>
                    <ul className="text-white/80 space-y-2">
                      <li>• Decentralized certification system for digital artwork</li>
                      <li>• NFT-based ownership and authenticity verification</li>
                      <li>• Polygon blockchain integration for cost-effective transactions</li>
                      <li>• Provenance tracking and history maintenance</li>
                      <li>• Smart contract automation for certification processes</li>
                    </ul>
                  </div>
                </div>
              )}

              {selectedProject === "vehicle-detection" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Vehicle Detection and Identification
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-4">
                      A comprehensive system designed to detect and identify vehicles using computer vision 
                      techniques. The system includes advanced number plate detection capabilities for 
                      enhanced security and monitoring purposes.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Technical Stack</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "OpenCV", "Machine Learning", "Computer Vision"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Key Features</h5>
                    <ul className="text-white/80 space-y-2">
                      <li>• Real-time vehicle detection and tracking</li>
                      <li>• Automatic number plate recognition (ANPR)</li>
                      <li>• Vehicle classification and identification</li>
                      <li>• Security monitoring and surveillance integration</li>
                      <li>• Data logging and reporting capabilities</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Project Details</h5>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-white/90"><strong>Team Size:</strong> 3 members</p>
                      <p className="text-white/90"><strong>Role:</strong> Developer and System Designer</p>
                      <p className="text-white/90"><strong>Duration:</strong> Academic Project</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}