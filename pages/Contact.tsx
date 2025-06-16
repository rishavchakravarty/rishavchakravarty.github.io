import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rishavchakravarty@gmail.com",
      href: "mailto:rishavchakravarty@gmail.com",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amherst, Massachusetts",
      href: "https://maps.app.goo.gl/C1yX9Xnun2tTqakf7",
      color: "from-orange-400 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rishavchakravarty/",
      color: "hover:text-purple-400",
      description: "Open source contributions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rishchak/",
      color: "hover:text-blue-400",
      description: "Professional network"
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
            <MessageSquare className="h-12 w-12 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Contact Me
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let us walk together, let us speak together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="mb-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 p-1"
                  >
                    <img
                      src="/self.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full border-4 border-slate-950"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Rishav Chakravarty</h3>
                  <p className="text-lg text-orange-400 mb-4">Client Experience and Digital Strategy Consultant | MS in DACSS @ UMass Amherst | UT Austin | Virginia Tech | Data | Psych</p>
                  <p className="text-gray-300">
                    Building technology that serves humanity with dharmic principles
                    and unwavering dedication to truth and justice.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <a
                        href={contact.href}
                        className="flex items-center gap-4 text-decoration-none"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-3 rounded-full bg-gradient-to-r ${contact.color} text-white`}
                        >
                          <contact.icon className="h-6 w-6" />
                        </motion.div>
                        <div>
                          <div className="text-white font-medium">{contact.label}</div>
                          <div className="text-gray-300 group-hover:text-white transition-colors">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <CardContent className="p-4">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-decoration-none"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`p-2 rounded-lg bg-white/10 text-gray-300 ${social.color} transition-colors`}
                          >
                            <social.icon className="h-5 w-5" />
                          </motion.div>
                          <div>
                            <div className="text-white font-medium">{social.name}</div>
                            <div className="text-sm text-gray-400">{social.description}</div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all resize-none"
                      placeholder="Share your thoughts, ideas, or collaboration proposals..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 py-3 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>

          </motion.div>
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
                <h3 className="text-2xl font-bold text-white mb-4">Let's Build Together</h3>
                <p className="text-lg text-gray-300">
                  For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, it remains the greatest enemy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

      </div>
    </div>
  )
}
