"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Quantum ArXiv Topic Trend Analysis",
      description:
        "Analyzes arXiv papers to uncover topic trends in quantum machine learning using NLP and LDA. Built with Python, NLTK, Gensim, and Matplotlib.",
      image: "/DemoPhoto.png",
      tags: ["Python", "NLTK", "Pandas", "Gensim", "NLP", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Raiyan708/Quantum-Arxiv-Topic-Modeling",
      demoUrl: "https://quantum-arxiv-demo.vercel.app/",
      highlights: [
        "Built a topic modeling pipeline to analyze 2,000+ arXiv abstracts on quantum machine learning.",
        "Utilized Natural Language Processing (NLP) and Latent Dirichlet Allocation (LDA) to identify research trends.",
        "Designed custom visualizations to illustrate topic distributions and evolution.",
        "Identified emerging research areas, providing insights into quantum machine learning advancements.",
      ],
    },
    {
      title: "Expense Tracking & Analytics",
      description:
        "Full-stack expense management system using MERN Stack with interactive dashboards for visualizing spending patterns. Integrated data analytics using Python to provide personalized financial insights.",
      image: "/ExpenseDemophotofinal.png",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js", "Python", "PostgreSQL"],
      githubUrl: "https://github.com/Raiyan708/expense-tracker",
      demoUrl: "https://expendixpert.vercel.app/",
      highlights: [
        "Real-time financial tracking and visualization",
        "Personalized spending insights with Python analytics",
        "Secure authentication and data protection",
        "Responsive design for mobile and desktop",
      ],
    },
    {
      title: "BlockAuth",
      description:
        "BlockCheck is a fake product identification system built using Blockchain Technology. The project leverages Solidity, Ethereum, Truffle, and Ganache to provide a secure and transparent method for verifying product authenticity, ensuring that users can easily identify counterfeit products.",
      image: "/BlockAuthdemo2.png",
      tags: ["Javascript", "React.js", "MongoDB", "Chart.js", "Node.js", "Epress", "Truffle", "Ganache"],
      githubUrl: "https://github.com/Raiyan708/BlockAuth",
      demoUrl: "https://v0-blockchain-ui-design-kappa.vercel.app/",
      highlights: [
        "Developed a decentralized fake product identification system using Ethereum blockchain, ensuring product authenticity.",
        "Designed and deployed smart contracts in Solidity to securely store and verify product provenance.",
        "Built a React.js frontend for real-time product verification using unique blockchain-based identifiers.",
        "Utilized Truffle & Ganache for smart contract development, testing, and local blockchain simulation.",
      ],
    },
    {
      title: "Care IAS",
      description:
        "Care IAS is a UPSC coaching institute based in Aligarh. This is the official website, built using Next.js and Tailwind CSS. I manage the complete technical stack and deployment.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.jS", "TailwindCSS", "ReactJS", "Typescript", "MySql"],
      githubUrl: "https://github.com/Raiyan708/CareIAS",
      demoUrl: "https://www.careias.com/",
      highlights: [
        "Developed a responsive and SEO-optimized frontend using Next.js and Tailwind CSS to showcase institute services and updates.",
        "Integrated dynamic routes and reusable components for streamlined content management and future scalability.",
        "Deployed on Vercel with a custom domain and secure HTTPS configuration for fast global access.",
        "Designed intuitive navigation and call-to-actions for enrollment, login, and contact workflows, ready for backend integration.",
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

