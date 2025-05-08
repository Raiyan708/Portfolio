"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Diabetes Prediction Model",
      description:
        "Developed a machine learning model using Random Forest & Logistic Regression to predict diabetes risk with 85% accuracy. Engineered key features from the Pima Indians Diabetes Dataset and deployed as a Flask API.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask", "Matplotlib"],
      githubUrl: "https://github.com/Raiyan708/diabetes-prediction",
      demoUrl: "#",
      highlights: [
        "85% prediction accuracy using ensemble methods",
        "Feature engineering improved classification by 10%",
        "Interactive visualizations with Matplotlib & Seaborn",
        "RESTful API for real-time predictions",
      ],
    },
    {
      title: "Expense Tracking & Analytics",
      description:
        "Full-stack expense management system using MERN Stack with interactive dashboards for visualizing spending patterns. Integrated data analytics using Python to provide personalized financial insights.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js", "Python", "PostgreSQL"],
      githubUrl: "https://github.com/Raiyan708/expense-tracker",
      demoUrl: "#",
      highlights: [
        "Real-time financial tracking and visualization",
        "Personalized spending insights with Python analytics",
        "Secure authentication and data protection",
        "Responsive design for mobile and desktop",
      ],
    },
    {
      title: "NLP-Based Sentiment Analysis",
      description:
        "Built a sentiment analysis tool that processes customer reviews and social media data to extract sentiment and key topics. Implemented using BERT and traditional NLP techniques with a Flask backend.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "BERT", "NLP", "Flask", "React", "Pandas"],
      githubUrl: "https://github.com/Raiyan708/sentiment-analysis",
      demoUrl: "#",
      highlights: [
        "BERT-based sentiment classification with 92% accuracy",
        "Topic modeling to identify key customer concerns",
        "Interactive dashboard for sentiment trends",
        "API integration with social media platforms",
      ],
    },
    {
      title: "Care IAS",
      description:
        "Developed a stock price prediction system using LSTM neural networks and technical indicators. Features real-time data fetching, backtesting capabilities, and interactive visualizations.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "LSTM", "Pandas", "Yahoo Finance API", "Plotly"],
      githubUrl: "https://github.com/Raiyan708/stock-predictor",
      demoUrl: "#",
      highlights: [
        "LSTM model with technical indicators for price prediction",
        "Backtesting framework to evaluate strategies",
        "Interactive charts with Plotly for trend analysis",
        "Automated data pipeline for real-time updates",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore my portfolio of data science, machine learning, and full-stack development projects. Each project
            demonstrates different aspects of my technical expertise and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden bg-gray-800 border-gray-700 hover:border-primary transition-colors">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 mb-4">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <ArrowRight className="h-3 w-3 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
            <a
              href="https://github.com/Raiyan708"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

