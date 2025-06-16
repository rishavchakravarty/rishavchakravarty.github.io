import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        <div className="absolute inset-0 bg-gray-900/20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                <span className="block">Hey There,</span>
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  I'm Rishav Chakravarty
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-4"
              >
                Data Analyst | Client Experience and Digital Strategy Consultant
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-400 mb-8 max-w-2xl"
              >
                I’m a graduate student in Data Analytics & Computational Social Science at UMass Amherst. I lead digital strategy for a wellness startup, build AI-powered calendar features, and co-head an ML platform for neurodivergent support. With a background in data-driven healthcare interventions and a KickStart VT Seed Grant win, I’m passionate about turning data into meaningful user experiences.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex gap-4 mb-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/rishavchakravarty/', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/rishchak/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:kinjalpandey@umass.edu', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.button
                  onClick={() => navigate("/Experience")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore My Journey
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Graphics/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Om Symbol with Animation */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }}
                  className="text-8xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                >
                  🐦‍🔥
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 10 + index * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                    style={{
                      transformOrigin: `${80 + index * 20}px 0px`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What I Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Like a digital alchemist, I blend journey analytics, SEO, and content strategy with AI-driven modeling and human-centered design to craft tools that captivate and empower. From A/B-tested smart-calendar features to ML-powered therapy insights, I transform data into intuitive experiences that engage users and spark positive change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Client Experience and Digital Strategy Consultant",
                description: "Serving as a Client Experience and Digital Strategy Consultant, I work with clients to map user journeys, optimize UX/UI, and implement targeted SEO, content, and paid-media campaigns that drive engagement and ROI. I provide analytics insights, and translate them into actionable recommendations to continuously refine digital initiatives and boost conversions",
                icon: "📈",
                color: "from-blue-400 to-purple-500"
              },
              {
                title: "Behavioral Health Technician",
                description: "BI deliver evidence-based ABA interventions for individuals with developmental disorders—using reinforcement scheduling, prompt fading, and task analysis to build skills and reduce challenging behaviors. I collect and analyze real-time client data to refine treatment plans, partner with caregivers for consistent implementation, and apply de-escalation and crisis-management techniques within HIPAA-compliant standards.",
                icon: "👨🏻‍⚕️",
                color: "from-green-400 to-blue-500"
              },
              {
                title: "Data Analyst",
                description: "Designed end-to-end data pipelines, cleaning, transforming, and loading large datasets with SQL and Python. Built interactive Power BI dashboards to highlight key performance metrics. Developed predictive models and perform statistical analyses to forecast demand and optimize resources. Automated reporting processes, cutting manual workload by over 30%. Conducted cost–benefit analyses to inform strategic decisions. Collaborated with cross-functional teams to turn insights into actions, boosting adoption and efficiency.",
                icon: "👨🏻‍💻",
                color: "from-green-400 to-blue-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
