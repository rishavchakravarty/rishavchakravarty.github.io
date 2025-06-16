import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  const experienceData = [
    {
      position: "Client Experience and Digital Strategy Consultant",
      company: "Simple Coaching Inc.",
      location: "Boston, Massachusetts",
      duration: "Mar 2025 - June 2025",
      type: "Contract",
      description: "As a Digital Strategy Consultant for Simple Coaching Inc., I analyze client journeys, optimize content and UX, and collaborate on new wellness service models—leveraging SEO, performance analytics, and website enhancements to strengthen engagement and drive growth.",
      achievements: [
        "Conducted client behavior",
        "Spearheaded a website redesign",
        "Implemented SEO and analytics measures",
        "Co-designed and launched new mental-health workshop models",
        "Established an intern program"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "AWS", "Docker", "Kubernetes"],
      website: "https://simplecoachinginc.com/"
    },
    {
      position: "Behavioral Data Analyst",
      company: "CalendAI",
      location: "Blacksburg, VA",
      duration: "May 2024 - Current",
      type: "Part-time",
      description: "As a Behavioral Data Analyst at CalendAI, I merge computer science and psychology to build and A/B-test smart scheduling features. I design predictive models, analyze user behaviors, and work with cross-functional teams to personalize calendar recommendations while ensuring ethical data practices.",
      achievements: [
        "Developed and deployed A/B tests that increased feature adoption and user engagement",
        "Built predictive scheduling algorithms tailored to individual behavior patterns",
        "Collaborated with product and UX teams to translate behavioral insights into high-impact features",
        "Established data pipelines on AWS and MongoDB for reliable, privacy-first analytics",
        "Optimized smart-calendar performance through iterative behavioral analysis and model refinement"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "AWS", "Docker", "Kubernetes"],
      website: "https://github.com/rishavchakravarty/"
    },
    {
      position: "Cognitive Systems Engineer",
      company: "MeAsmi",
      location: "Gurgaon, India",
      duration: "Mar 2024 - Present",
      type: "Part-time",
      description: "As a Cognitive Systems Engineer at MeAsmi, I lead ML-powered research and platform development to support neurodivergent individuals. I design data pipelines, integrate unsupervised and supervised learning models, and collaborate with psychologists and therapists to turn raw data into actionable insights.",
      achievements: [
        "Built end-to-end data workflows collecting and processing diagnosis, symptom, and therapy-efficacy records",
        "Developed clustering algorithms that group similar cases and predictive models that forecast therapy outcomes",
        "Led a multidisciplinary team of professors and therapists to align domain expertise with ML results",
        "Designed and launched the interactive MeAsmi platform, delivering community-driven, data-backed therapy insights",
        "Established a continuous research cycle, updating models with new data to ensure ongoing accuracy and relevance"
      ],
      technologies: ["HTML5", "CSS", "JavaScript", "MySQL", "MongoDB"],
      website: "https://github.com/rishavchakravarty/"
    },
    {
      position: "Behavioral Health Technician",
      company: "Intercare Therapy",
      location: "San Diego, CA",
      duration: "Jan 2025 - Jun 2025",
      type: "Full-time",
      description: "As a Behavioral Health Technician at Intercare Therapy, I delivered evidence-based ABA interventions for clients with developmental disorders. I used reinforcement scheduling, prompt fading, and task analysis to build skills and reduce challenging behaviors, while partnering with caregivers and maintaining HIPAA-compliant, data-driven treatment plans.",
      achievements: [
        "Collected and analyzed real-time client data to continuously refine and personalize intervention strategies",
        "Collaborated with Board Certified Behavior Analysts to implement high-impact behavior plans",
        "Trained caregivers in applying ABA techniques consistently across home and community settings",
        "Employed de-escalation and crisis-management tactics to ensure safe, supportive learning environments",
        "Upheld HIPAA and organizational standards while pursuing ongoing professional development in best practices"
      ],
      technologies: ["CentralReach", "Microsoft Excel", "Zoom", "Digital incident-reporting systems"],
      website: "https://intercaretherapy.com/"
    },
    {
      position: "Student Manager",
      company: "Virginia Tech",
      location: "Blacksburg, VA",
      duration: "Aug 2018 - Apr 2024",
      type: "Full-time/ Part-time",
      description: "As Student Manager at Dietrick’s D2/DX dining hall, I oversaw daily operations, led and mentored a diverse team, and ensured seamless service delivery while upholding food safety and customer service standards.",
      achievements: [
        "Trained and coached over 100+ student staff, improving service efficiency and teamwork",
        "Streamlined shift workflows, reducing average customer wait times by 30%",
        "Maintained 100% compliance on all health and safety inspections",
        "Implemented performance feedback processes that boosted team morale and service quality",
        "Established service protocols that increased positive customer feedback scores by 20%"
      ],
      technologies: ["WhenToWork", "Microsoft Excel", "Zoom"],
      website: "https://dining.vt.edu/"
    },
    {
      position: "Featured Presenter",
      company: "Google Developer Student Club",
      location: "Blacksburg, VA",
      duration: "Aug 2023 - Nov 2023",
      type: "Presenter",
      description: "As a Featured Presenter for Google Developer Student Clubs, I shared how combining machine learning and behavioral science can personalize mental-health interventions for neurodivergent users, highlighting interdisciplinary collaboration in AI-driven healthcare.",
      achievements: [
        "Developed and delivered a 45-minute talk on ML-powered therapeutic solutions, demystifying complex algorithms for a broad audience",
        "Sparked cross-campus interest in AI ethics and mental-health tech, leading to two follow-up workshops",
        "Created and shared slide deck and code examples, which have been viewed over 200 times on the GDSC platform",
        "Fostered collaboration between CS and psychology students, laying groundwork for future hackathons on health-tech innovation"
      ],
      technologies: ["Zoom"],
      website: "https://www.linkedin.com/company/gdsc-vt/"
    },
    {
      position: "Data Analytics Intern",
      company: "ZAD Holding Company",
      location: "Doha, Qatar",
      duration: "Mar 2021, Aug 2021",
      type: "Intern",
      description: "As a Data Analytics Intern at Zad Holding and Ooredoo Qatar, I built and optimized datasets, dashboards, and predictive models using Power BI and statistical analysis to streamline operations and tailor customer solutions.",
      achievements: [
        "Designed and implemented end-to-end data pipelines and databases for Zad Holding, reducing manual workload by 30%",
        "Developed interactive Power BI dashboards that visualized key metrics and supported data-driven decision-making",
        "Conducted cost–benefit analyses to identify optimal scenarios, improving project efficiency and ROI",
        "Created customer-usage models at Ooredoo Qatar to recommend personalized data plans, boosting plan uptake by 25%",
        "Applied statistical inference and data modeling to refine business processes and enhance strategic insights"
      ],
      technologies: ["PowerBI"],
      website: "https://www.linkedin.com/company/zad-holding-company-qpsc/"
    }
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
            <Briefcase className="h-12 w-12 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Experience
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You have a right to perform your prescribed duties, but you do not have a right to the fruits of your actions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-400 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-16'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-4 border-slate-950 hidden md:block" />

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-black-300 border-orange-500/30"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-xl text-orange-400">{exp.company}</p>
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>

                      <div className="text-left md:text-right mt-4 md:mt-0">
                        <div className="flex items-center text-gray-300 mb-1 md:justify-end">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-gray-300 md:justify-end">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-300"
                          >
                            <span className="text-orange-400 mr-3 mt-1">▹</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.2) + (idx * 0.05) }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                          >
                            {tech}
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

        {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Work Philosophy</h3>
                <p className="text-lg text-gray-300">
                  Perform your work with evenness of mind, abandoning attachment to success or failure.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-700 max-w-2xl mx-auto shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Currently Exploring</h3>
                <p className="text-lg text-gray-300">
                  Behavioral-informed AI and human-centered design, Ethical frameworks for machine learning and data privacy, Sustainable tech solutions rooted in justice and compassion
                </p>
              </CardContent>
            </Card>
          </motion.div>
      </div>
    </div>
  )
}
