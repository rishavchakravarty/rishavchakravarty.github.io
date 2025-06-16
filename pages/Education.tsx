import { motion } from 'framer-motion'
import { GraduationCap, Download, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Education() {
  const educationData = [
    {
      degree: "Master of Data Analytics and Computational Social Science",
      institution: "University of Massachusetts - Amherst",
      location: "Amherst, Massachusetts",
      duration: "Sep 2025 - Present",
      gpa: "4.0",
      description: "Specialized in Data, AI, and ML",
      achievements: ["Cont. Field Experience"]
    },
    {
      degree: "Post Graduate Diploma in Data Science and Business Analytics",
      institution: "University of Texas at Austin",
      location: "Austin, Texas",
      duration: "Jan 2024 - Aug 2024",
      gpa: "3.71",
      description: "A hands-on program building expertise in machine learning, statistical modeling, and data visualization for business impact.",
      achievements: ["Designed and deployed predictive models for market analysis and customer segmentation", "Developed interactive dashboards to forecast revenue and track KPIs", "Led a capstone engagement with a real-world business partner, delivering actionable insights"]
    },
    {
      degree: "Bachelor of Science in Psychology",
      institution: "Virginia Tech",
      location: "Blacksburg, VA",
      duration: "Aug 2021 - May 2024",
      gpa: "3.1",
      description: "A foundation in human behavior and cognitive science, enriched by practical programming and data-driven inquiry.",
      achievements: ["Awarded the KickStart VT Seed Grant", "Conducted interdisciplinary research", "Built data-driven experiments in Python and R that informed cross-departmental UI/UX improvements"]
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-slate-950 via-blue-950 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-12 w-12 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Education
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the truth by approaching a teacher, inquiring of him submissively and attentively, and serving him. The self-realized teacher imparts knowledge because he has seen the truth.
          </p>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 max-w-md mx-auto shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
              <p className="text-gray-300 mb-6">Download my complete academic and professional resume</p>
              <a
                href="/resume.pdf" 
                download
              >
                <Button
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-400 hidden md:block" />
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-16'}`}
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-4 border-slate-950 hidden md:block" />

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-xl text-orange-400 mb-2">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-300 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.span
                            key={achievement}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gray-700/60 rounded-lg p-8 max-w-4xl mx-auto">
            <Card className="bg-transparent border-none">
              <CardContent className="p-0">
                <blockquote className="text-2xl italic text-white mb-4">
                </blockquote>
                <p className="text-lg text-gray-300 mb-6">
                  Those of steady wisdom, resolute in purpose and free from doubt, stand at the summit of understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
