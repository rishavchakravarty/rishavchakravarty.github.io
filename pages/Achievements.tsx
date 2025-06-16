import { motion } from 'framer-motion'
import { Trophy, Award, Star, Medal, Target, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Achievements() {
  const achievementsData = [
    {
      title: "The Action Taker",
      organization: "LISC Massachusetts & the IXL Center",
      year: "May 2025",
      description: "Recognized as one of the standout participants in the competitive LISC Digital Growth Accelerator, hosted by LISC Massachusetts in collaboration with the IXL Center.",
      icon: Trophy,
      category: "Leadership",
      impact: "Exceptional initiative, execution, and impact in digitally transforming Simple Coaching",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "yellow-500/20"
    },
    {
      title: "KickStart VT Seed Grant Winner – CalendAI",
      organization: "Apex Systems Center for Innovation and Entrepreneurship",
      year: "Nov 2024",
      description: "Honored to be selected as a KickStart VT Seed Grant Winner for CalendAI, an AI-powered calendar app designed to transform productivity through intelligent scheduling.",
      icon: Trophy,
      category: "Innovation",
      impact: "Recognized for promising student-led venture in the early stages.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "yellow-500/20"
    }
  ]

  const certifications = [
    { name: "IBM Z Xplore Course: Expanding Knowledge of Mainframes and Exploring Machine Learning", year: "2025" }
  ]

  const recognitions = [
    { title: "Seed Grant Winner", org: "Apex Systems Center for Innovation and Entrepreneurship", year: "2024" }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Medal className="h-12 w-12 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Achievements
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            It is better to do one’s own duty imperfectly than to do another’s duty well; performing one’s natural work, one does not incur sin.
          </p>
        </motion.div>

        {/* Major Achievements */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Major Awards & Recognition
          </motion.h2>

          <div className="space-y-8">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 hover:border-white/20 transition-all duration-300 overflow-hidden group shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}
                      >
                        <achievement.icon className="h-8 w-8" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-lg text-orange-400">{achievement.organization}</p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <Badge variant="secondary" className="mb-2">
                              {achievement.year}
                            </Badge>
                            <div className="text-sm text-gray-400">{achievement.category}</div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {achievement.description}
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-sm text-gray-400">
                            <Target className="h-4 w-4 mr-2" />
                            Impact: {achievement.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Additional Recognition */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="h-6 w-6 text-orange-400 mr-3" />
              Certifications
            </h3>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-gray-300">{cert.name}</span>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-300">
                        {cert.year}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Recognition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="h-6 w-6 text-orange-400 mr-3" />
              Recognition
            </h3>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recognitions.map((recognition, index) => (
                    <motion.div
                      key={recognition.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-medium">{recognition.title}</h4>
                        <span className="text-xs text-gray-400">{recognition.year}</span>
                      </div>
                      <p className="text-sm text-gray-400">{recognition.org}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Philosophy on Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">True Achievement</h3>
                <p className="text-lg text-gray-300">
                  People devoted to selfless action attain perfection in their activities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { number: "5+", label: "Awards Received" },
              { number: "100+", label: "Lives Impacted" },
              { number: "50+", label: "Open Source Projects" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
