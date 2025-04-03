"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Database, Brain } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Muhammad Raiyan
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              <TypeAnimation
                sequence={["Data Scientist", 2000, "Machine Learning Engineer", 2000, "Full Stack Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transforming complex data into actionable insights and building intelligent systems that solve real-world
              problems. Specializing in machine learning, data analysis, and full-stack development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                <a href="#resume">View Resume</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <a href="https://github.com/Raiyan708" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <a
                  href="https://linkedin.com/in/raiyan7080"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <a href="mailto:raiyan7080@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Floating Icons Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-1/4 left-1/4"
            >
              <Terminal className="h-8 w-8 text-primary/30" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
              className="absolute top-1/3 right-1/4"
            >
              <Database className="h-10 w-10 text-blue-400/30" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 2,
              }}
              className="absolute bottom-1/3 right-1/3"
            >
              <Brain className="h-12 w-12 text-purple-400/30" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

