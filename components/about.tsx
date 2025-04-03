"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Code, LineChart } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Machine Learning",
      description:
        "Building predictive models and AI solutions using cutting-edge algorithms and techniques to solve complex problems.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Science",
      description:
        "Transforming raw data into actionable insights through statistical analysis, visualization, and data-driven storytelling.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description:
        "Creating end-to-end applications with modern frameworks and technologies, from database design to user interfaces.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Analysis",
      description:
        "Extracting meaningful patterns from complex datasets to drive business decisions and optimize processes.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            I'm a passionate data scientist and machine learning engineer with expertise in building intelligent systems
            and extracting insights from complex datasets. My background in computer science combined with specialized
            knowledge in data and computational science allows me to tackle challenging problems with innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gray-800 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
          <p className="text-gray-300 mb-4">
            My journey in data science began during my undergraduate studies at SRM Institute of Science and Technology,
            where I developed a strong foundation in computer science and engineering. My passion for data-driven
            decision making led me to specialize in machine learning and data analysis, which I've applied in various
            professional settings.
          </p>
          <p className="text-gray-300 mb-4">
            Currently, I'm working as a Data Analyst Intern at Corefield Technologies, where I analyze large datasets
            and build dashboards to drive business insights. My previous experience as a Machine Learning Intern at
            AICTE Eduskill Foundation allowed me to develop predictive models and recommendation systems that improved
            student performance.
          </p>
          <p className="text-gray-300">
            I'm pursuing a Master's in Data and Computational Science at University College Dublin to further enhance my
            expertise in advanced data science techniques and computational methods. My goal is to leverage data science
            and machine learning to create impactful solutions that address real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

