"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { 
  Award, 
  Briefcase, 
  User, 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Wrench, 
  Brain,
  Users,
  MessageCircle,
  Zap,
  Star,
  Trophy,
  Target,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCard {
  id: number
  title: string
  icon: React.ReactNode
  color: string
  content: React.ReactNode
  bgGradient: string
}

export function SkillsCarouselSection() {
  const stageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)
  const isHoveringRef = useRef(false)
  let xPos = 0

  const technicalSkillsContent = (
    <div className="space-y-4">
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Frontend Development
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "HTML5", icon: <Code className="w-3 h-3" />, color: "text-orange-400" },
            { name: "CSS3", icon: <Palette className="w-3 h-3" />, color: "text-blue-400" },
            { name: "JavaScript", icon: <Zap className="w-3 h-3" />, color: "text-yellow-400" },
            { name: "React.js", icon: <Globe className="w-3 h-3" />, color: "text-cyan-400" },
            { name: "Tailwind CSS", icon: <Sparkles className="w-3 h-3" />, color: "text-teal-400" },
          ].map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300"
            >
              <span className={skill.color}>{skill.icon}</span>
              <span className="ml-1 text-xs">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
          <Database className="w-5 h-5" />
          Backend Development
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Node.js", icon: <Database className="w-3 h-3" />, color: "text-green-400" },
            { name: "Express.js", icon: <Globe className="w-3 h-3" />, color: "text-gray-400" },
            { name: "Python", icon: <Code className="w-3 h-3" />, color: "text-blue-400" },
            { name: "Supabase", icon: <Database className="w-3 h-3" />, color: "text-green-400" },
            { name: "MongoDB", icon: <Database className="w-3 h-3" />, color: "text-green-600" },
          ].map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300"
            >
              <span className={skill.color}>{skill.icon}</span>
              <span className="ml-1 text-xs">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )

  const softSkillsContent = (
    <div className="space-y-4">
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
          <Brain className="w-5 h-5" />
          Soft Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Problem Solving", icon: <Brain className="w-3 h-3" />, color: "text-purple-400" },
            { name: "Communication", icon: <MessageCircle className="w-3 h-3" />, color: "text-blue-400" },
            { name: "Team Collaboration", icon: <Users className="w-3 h-3" />, color: "text-green-400" },
            { name: "Adaptability", icon: <Zap className="w-3 h-3" />, color: "text-yellow-400" },
            { name: "Leadership", icon: <Target className="w-3 h-3" />, color: "text-red-400" },
            { name: "Time Management", icon: <Star className="w-3 h-3" />, color: "text-orange-400" },
          ].map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300"
            >
              <span className={skill.color}>{skill.icon}</span>
              <span className="ml-1 text-xs">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
          <Wrench className="w-5 h-5" />
          Tools & Platforms
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Git", icon: <Code className="w-3 h-3" />, color: "text-orange-400" },
            { name: "GitHub", icon: <Globe className="w-3 h-3" />, color: "text-gray-400" },
            { name: "VS Code", icon: <Code className="w-3 h-3" />, color: "text-blue-400" },
            { name: "Postman", icon: <Wrench className="w-3 h-3" />, color: "text-orange-400" },
            { name: "Vercel", icon: <Globe className="w-3 h-3" />, color: "text-black" },
            { name: "Cursor", icon: <Zap className="w-3 h-3" />, color: "text-purple-400" },
          ].map((tool) => (
            <Badge
              key={tool.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300"
            >
              <span className={tool.color}>{tool.icon}</span>
              <span className="ml-1 text-xs">{tool.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )

  const achievementsContent = (
    <div className="space-y-4">
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Professional Experience
        </h4>
        <div className="space-y-2">
          <Badge
            variant="outline"
            className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
          >
            <Briefcase className="w-3 h-3 text-green-400" />
            <span className="ml-2 text-xs">Frontend Development Intern - Tripmilestone Tours</span>
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Academic Achievements
        </h4>
        <div className="space-y-2">
          <Badge
            variant="outline"
            className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
          >
            <Award className="w-3 h-3 text-yellow-400" />
            <span className="ml-2 text-xs">Typewriting - Distinction (Senior)</span>
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Competitions
        </h4>
        <div className="space-y-2">
          {[
            { title: "ICT Learnathon 2023", color: "text-blue-400" },
            { title: "Skill-a-thon 2024", color: "text-purple-400" },
          ].map((achievement) => (
            <Badge
              key={achievement.title}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
            >
              <Star className={`w-3 h-3 ${achievement.color}`} />
              <span className="ml-2 text-xs">{achievement.title}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )

  const certificationsContent = (
    <div className="space-y-4">
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Advanced Certifications
        </h4>
        <div className="space-y-2">
          {[
            { name: "Capgemini Fullstack Course", color: "text-blue-400" },
            { name: "Skill-a-thon 2024", color: "text-red-400" },
          ].map((cert) => (
            <Badge
              key={cert.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
            >
              <Award className={`w-3 h-3 ${cert.color}`} />
              <span className="ml-2 text-xs">{cert.name}</span>
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Intermediate Certifications
        </h4>
        <div className="space-y-2">
          {[
            { name: "ICT Learnathon 2023", color: "text-orange-400" },
            { name: "Python Certificate", color: "text-green-400" },
          ].map((cert) => (
            <Badge
              key={cert.name}
              variant="outline"
              className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
            >
              <Star className={`w-3 h-3 ${cert.color}`} />
              <span className="ml-2 text-xs">{cert.name}</span>
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Professional Certifications
        </h4>
        <div className="space-y-2">
          <Badge
            variant="outline"
            className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start"
          >
            <Briefcase className="w-3 h-3 text-cyan-400" />
            <span className="ml-2 text-xs">Frontend Development Internship</span>
          </Badge>
        </div>
      </div>
    </div>
  )

  const skillCards: SkillCard[] = [
    {
      id: 1,
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
      content: technicalSkillsContent
    },
    {
      id: 2,
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      bgGradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(219, 39, 119, 0.3) 100%)",
      content: softSkillsContent
    },
    {
      id: 3,
      title: "Achievements",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      bgGradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(190, 24, 93, 0.3) 100%)",
      content: achievementsContent
    },
    {
      id: 4,
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      bgGradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(157, 23, 77, 0.3) 100%)",
      content: certificationsContent
    }
  ]

  useEffect(() => {
    if (!containerRef.current || !ringRef.current) return

    const ring = ringRef.current
    const cards = ring.querySelectorAll('.img')

    // Function to get background position for parallax effect
    const getBgPos = (i: number) => {
      return (100 - gsap.utils.wrap(0, 360, Number(gsap.getProperty(ring, 'rotationY')) - 180 + i * 90) / 360 * 400) + 'px 0px'
    }

    // Function to update card blur based on rotation
    const updateCardBlur = () => {
      cards.forEach((card, i) => {
        const ringRotation = Number(gsap.getProperty(ring, 'rotationY'));
        const cardRotation = i * 90;
        const totalRotation = ringRotation + cardRotation;
        
        // Normalize rotation to 0-360 range
        const normalizedRotation = ((totalRotation % 360) + 360) % 360;
        
        // Calculate blur amount based on how much the card is facing away
        let blurAmount = 0;
        // Card is facing away when it's between 270-360 and 0-90 degrees (back side)
        if (normalizedRotation > 270 || normalizedRotation < 90) {
          // Card is facing away, apply blur
          let distanceFromBack;
          if (normalizedRotation > 270) {
            distanceFromBack = Math.abs(normalizedRotation - 360); // Distance from 360/0
          } else {
            distanceFromBack = normalizedRotation; // Distance from 0
          }
          blurAmount = Math.max(0, 8 - (distanceFromBack / 90) * 8); // Max 8px blur
        }
        
        gsap.set(card, { 
          filter: `blur(${blurAmount}px)`,
          opacity: blurAmount > 0 ? 0.6 : 0.9
        });
      });
    }

    // Auto rotation function
    const startAutoRotation = () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
      
      autoRotateRef.current = setInterval(() => {
        if (!isHoveringRef.current && ring) {
          gsap.to(ring, {
            rotationY: '+=90',
            duration: 0.8,
            ease: 'power2.inOut',
            onUpdate: () => {
              updateCardBlur();
              gsap.set(cards, { 
                backgroundPosition: (i) => getBgPos(i),
                visibility: 'visible'
              });
              
              // Fix text orientation for each card
              cards.forEach((card, i) => {
                const content = card.querySelector('.card-content') as HTMLElement;
                if (content) {
                  const ringRotation = Number(gsap.getProperty(ring, 'rotationY'));
                  const cardRotation = i * 90;
                  const totalRotation = ringRotation + cardRotation;
                  
                  // Normalize rotation to 0-360 range
                  const normalizedRotation = ((totalRotation % 360) + 360) % 360;
                  
                  // If card is showing its back face, flip the content
                  if (normalizedRotation > 90 && normalizedRotation < 270) {
                    gsap.set(content, { scaleX: -1 });
                  } else {
                    gsap.set(content, { scaleX: 1 });
                  }
                }
              });
            }
          });
        }
      }, 2000); // 2 second interval
    }

    const stopAutoRotation = () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    }

    // Initialize GSAP timeline with improved visibility
    const tl = gsap.timeline()
      .set(ring, { rotationY: 0, cursor: 'grab' }) // Start at 0 instead of 180
      .set(cards, {
        rotateY: (i) => i * 90, // 4 cards, 90 degrees apart (positive rotation)
        transformOrigin: '50% 50% 400px',
        z: -400,
        backfaceVisibility: 'visible',
        opacity: 0.9, // Set consistent opacity for all cards
        visibility: 'visible'
      })
      .from(cards, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo'
      })
      .add(() => {
        // Ensure all cards maintain visibility and proper text orientation
        gsap.set(cards, { 
          opacity: 0.9, 
          visibility: 'visible'
        });
        
        // Set initial text orientation for each card
        cards.forEach((card, i) => {
          const content = card.querySelector('.card-content') as HTMLElement;
          if (content) {
            const cardRotation = i * 90;
            // If card is initially showing its back face, flip the content
            if (cardRotation > 90 && cardRotation < 270) {
              gsap.set(content, { scaleX: -1 });
            } else {
              gsap.set(content, { scaleX: 1 });
            }
          }
        });
        
        cards.forEach(card => {
          card.addEventListener('mouseenter', (e) => {
            isHoveringRef.current = true;
            stopAutoRotation();
            const current = e.currentTarget
            gsap.to(cards, { 
              scale: (i, t) => (t === current) ? 1.05 : 1,
              opacity: (i, t) => (t === current) ? 1 : 0.9,
              ease: 'power3'
            })
          })
          card.addEventListener('mouseleave', () => {
            isHoveringRef.current = false;
            startAutoRotation();
            gsap.to(cards, { 
              scale: 1,
              ease: 'power2.inOut'
            })
            updateCardBlur(); // Restore blur effect
          })
        })
        
        // Start auto rotation after initial animation
        setTimeout(() => {
          updateCardBlur(); // Initial blur update
          startAutoRotation();
        }, 2000); // Wait for initial animation to complete
      }, '-=0.5')

    // Drag functionality exactly like the reference
    const dragStart = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      xPos = Math.round(clientX)
      isHoveringRef.current = true;
      stopAutoRotation();
      gsap.set(ring, { cursor: 'grabbing' })
      document.addEventListener('mousemove', drag)
      document.addEventListener('touchmove', drag)
    }

    const drag = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      gsap.to(ring, {
        rotationY: '-=' + ((Math.round(clientX) - xPos) % 360),
        onUpdate: () => { 
          updateCardBlur();
          gsap.set(cards, { 
            backgroundPosition: (i) => getBgPos(i),
            visibility: 'visible'
          });
          
          // Fix text orientation for each card
          cards.forEach((card, i) => {
            const content = card.querySelector('.card-content') as HTMLElement;
            if (content) {
              const ringRotation = Number(gsap.getProperty(ring, 'rotationY'));
              const cardRotation = i * 90;
              const totalRotation = ringRotation + cardRotation;
              
              // Normalize rotation to 0-360 range
              const normalizedRotation = ((totalRotation % 360) + 360) % 360;
              
              // If card is showing its back face (rotated 90-270 degrees), flip the content
              if (normalizedRotation > 90 && normalizedRotation < 270) {
                gsap.set(content, { scaleX: -1 });
              } else {
                gsap.set(content, { scaleX: 1 });
              }
            }
          });
        }
      })
      xPos = Math.round(clientX)
    }

    const dragEnd = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('touchmove', drag)
      gsap.set(ring, { cursor: 'grab' })
      isHoveringRef.current = false;
      startAutoRotation();
    }

    // Event listeners
    document.addEventListener('mousedown', dragStart)
    document.addEventListener('touchstart', dragStart)
    document.addEventListener('mouseup', dragEnd)
    document.addEventListener('touchend', dragEnd)

    return () => {
      stopAutoRotation();
      document.removeEventListener('mousedown', dragStart)
      document.removeEventListener('touchstart', dragStart)
      document.removeEventListener('mouseup', dragEnd)
      document.removeEventListener('touchend', dragEnd)
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('touchmove', drag)
    }
  }, [])

  return (
    <section
      id="skills"
      className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title"
      data-aos="fade-up"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore my technical skills, soft skills, achievements, and certifications in an interactive 3D carousel
          </p>
          <p className="text-purple-300/70 text-sm mt-2">
            Auto-rotates every 2 seconds • Drag to rotate manually • Hover to pause & highlight
          </p>
        </div>

        <div className="flex justify-center items-center" style={{ height: '600px' }}>
          <div 
            ref={stageRef}
            className="stage overflow-visible"
            tabIndex={-1}
            style={{ 
              width: '100%', 
              height: '100%', 
              transformStyle: 'preserve-3d',
              userSelect: 'none',
              background: 'transparent',
              position: 'relative',
              outline: 'none'
            }}
          >
            <div 
              ref={containerRef}
              className="container"
              tabIndex={-1}
              style={{ 
                perspective: '1600px', // Reduced perspective for closer appearance
                width: '350px', // Slightly smaller width
                height: '450px', // Slightly smaller height
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                overflow: 'visible',
                outline: 'none'
              }}
            >
              <div 
                ref={ringRef}
                className="ring"
                tabIndex={-1}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  transformStyle: 'preserve-3d',
                  position: 'absolute',
                  outline: 'none'
                }}
              >
                {skillCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="img skill-card"
                    tabIndex={-1}
                    style={{ 
                      position: 'absolute',
                      width: '100%', 
                      height: '100%', 
                      background: `linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%), rgba(15, 23, 42, 0.95)`,
                      backdropFilter: 'blur(16px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 25px 50px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transformStyle: 'preserve-3d',
                      outline: 'none'
                    }}
                  >
                    <div 
                      className="card-content w-full h-full p-6 text-white"
                      style={{
                        transformStyle: 'flat'
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-6">
                        {card.icon}
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                      </div>
                      <div className="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {card.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Technical</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-purple-300" />
              <span>Soft Skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-pink-400" />
              <span>Achievements</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-pink-300" />
              <span>Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}