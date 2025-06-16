import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: "LISC Digital Growth Accelerator",
    duration: "Mar 2025 - May 2025",
    organization: "Simple Coaching Inc.",
    description: "Selected for a competitive program by LISC Massachusetts and the IXL Center. Collaborated with small wellness businesses to enhance customer experience and digital strategy.",
    contributions: [
      "Conducted client assessments to identify pain points and optimize service offerings",
      "Guided digital strategy to improve user engagement and customer journeys",
      "Established intern roles for design and social media marketing",
      "Collaborated with mission-driven businesses to boost social impact",
      "Participated in workshops to refine consulting and innovation skills"
    ],
    skills: ["Client Strategy", "Digital Transformation", "Consulting", "Small Business Support"]
  },
  {
    title: "Chatter Box - Intelligent Chatbot",
    duration: "Personal Project",
    organization: "",
    description: "Built a chatbot using fuzzy string matching and JSON-based logic. Includes dynamic features like self-aware age calculation and contextual responses.",
    contributions: [
      "Designed modular architecture with fuzzy string matching",
      "Implemented JSON-based intent recognition",
      "Enabled dynamic interaction and contextual humor"
    ],
    skills: ["Python", "JSON", "UX", "Algorithm Development"]
  },
  {
    title: "Dynamic Pricing Model for ReCell",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Built a supervised learning model to predict prices for refurbished devices based on key data features.",
    contributions: [
      "Performed EDA on device resale data",
      "Built predictive regression models",
      "Delivered pricing insights to improve profitability"
    ],
    skills: ["EDA", "Linear Regression", "Data Science"]
  },
  {
    title: "E-news Express Landing Page A/B Test",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Evaluated landing page performance using A/B testing and user engagement metrics.",
    contributions: [
      "Conducted statistical comparison of conversion rates",
      "Analyzed time-on-page and language preference data",
      "Recommended optimized design changes"
    ],
    skills: ["A/B Testing", "Statistical Modeling", "Data Visualization"]
  },
  {
    title: "Extended Euclidean Algorithm",
    duration: "Course Project",
    organization: "",
    description: "Implemented an algorithm to compute GCD and coefficients with step-by-step PDF output.",
    contributions: [
      "Built a Python script for algorithm execution",
      "Generated detailed PDF reports with ReportLab"
    ],
    skills: ["Python", "Debugging", "ReportLab"]
  },
  {
    title: "Face Recognition Software",
    duration: "Personal Project",
    organization: "",
    description: "Created a facial recognition system using deep learning to identify and verify faces in real-time.",
    contributions: [
      "Built real-time detection pipeline",
      "Trained recognition model using TensorFlow"
    ],
    skills: ["Computer Vision", "TensorFlow", "Deep Learning"]
  },
  {
    title: "FoodHub Order Analysis",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Analyzed customer order data to extract trends and business recommendations.",
    contributions: [
      "Performed variable identification and bivariate analysis",
      "Identified insights to improve logistics and offerings"
    ],
    skills: ["EDA", "Business Analytics", "Python"]
  },
  {
    title: "Hotel Booking Cancellation Predictor",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Developed a classifier to predict hotel booking cancellations and suggest policy adjustments.",
    contributions: [
      "Trained model on booking data",
      "Recommended data-informed cancellation policies"
    ],
    skills: ["Predictive Analytics", "Classification", "Data Science"]
  },
  {
    title: "Visa Approval Prediction",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Built an ensemble model to forecast visa approval likelihood and optimize applicant profiles.",
    contributions: [
      "Engineered features from applicant data",
      "Applied ensemble techniques to improve accuracy"
    ],
    skills: ["Ensemble Models", "Feature Engineering", "Data Analytics"]
  },
  {
    title: "Self-Driving Game AI",
    duration: "Personal Project",
    organization: "",
    description: "Created an ML-based system to play driving games autonomously using image recognition.",
    contributions: [
      "Used PyAutoGUI to control gameplay",
      "Built vision pipeline with PIL and numpy"
    ],
    skills: ["Python", "Image Processing", "Automation"]
  },
  {
    title: "Stock Clustering Analysis",
    duration: "Course Project",
    organization: "The University of Texas at Austin",
    description: "Grouped stocks into segments using k-means and hierarchical clustering.",
    contributions: [
      "Ran unsupervised clustering on stock datasets",
      "Visualized results to understand stock behaviors"
    ],
    skills: ["Clustering", "Data Science", "Unsupervised Learning"]
  },
  {
    title: "Tic Tac Toe AI",
    duration: "Personal Project",
    organization: "",
    description: "Built a two-mode Tic Tac Toe app with Minimax AI logic.",
    contributions: [
      "Implemented PvP and PvAI game modes",
      "Coded Minimax algorithm for AI play"
    ],
    skills: ["Tkinter", "Minimax", "Game Development"]
  },
  {
    title: "Vigenère Cipher Decryption",
    duration: "Course Project",
    organization: "",
    description: "Cracked Vigenère ciphers using statistical methods and generated detailed PDF reports.",
    contributions: [
      "Applied Index of Coincidence and Chi-square tests",
      "Automated decryption and documentation"
    ],
    skills: ["Cryptography", "Data Visualization", "PDF Reporting"]
  }
]

export function Projects() {
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
            <Code className="h-12 w-12 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Projects
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Action performed as a duty, without attachment, is never lost or wasted.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-400 mb-1">{project.organization}</div>
                  <div className="text-sm text-gray-400 mb-4">{project.duration}</div>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <h4 className="text-lg font-semibold text-white mb-2">Key Contributions</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {project.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Philosophy on Communication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Work Philosophy</h3>
              <p className="text-lg text-gray-300">
                Therefore, without attachment, do your duty; by working thus, one attains fulfillment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}