"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, LineChart, Server } from "lucide-react"

const Brain = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
  </svg>
)

export default function Skills() {
  const skillCategories = [
    {
      id: "ml-ds",
      name: "ML & Data Science",
      icon: <Brain className="h-4 w-4" />,
      skills: [
        { name: "Python (Pandas, NumPy)", level: 95 },
        { name: "Scikit-Learn", level: 90 },
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Statistical Analysis", level: 88 },
        { name: "Data Visualization", level: 92 },
        { name: "NLP & Computer Vision", level: 80 },
      ],
    },
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="h-4 w-4" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "C/C++", level: 82 },
        { name: "SQL", level: 90 },
        { name: "R", level: 75 },
        { name: "HTML/CSS", level: 85 },
      ],
    },
    {
      id: "web-dev",
      name: "Web Development",
      icon: <Server className="h-4 w-4" />,
      skills: [
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Redux", level: 78 },
      ],
    },
    {
      id: "data-tools",
      name: "Data Tools",
      icon: <Database className="h-4 w-4" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Docker", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            I've developed a diverse set of technical skills throughout my academic and professional journey,
            specializing in data science, machine learning, and full-stack development.
          </p>
        </motion.div>

        <Tabs defaultValue="ml-ds" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-gray-700">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-blue-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-full">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Exploratory Data Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Statistical Modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Data Cleaning & Preprocessing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Feature Engineering
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">ML & AI</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Supervised & Unsupervised Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Deep Learning & Neural Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  NLP & Computer Vision
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Model Deployment & MLOps
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Data Engineering</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Database Design & Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  ETL Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Data Warehousing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Big Data Technologies
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

