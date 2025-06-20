"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Resume() {
  const experience = [
    {
      title: "Data Analyst Intern",
      company: "Corefield Technologies",
      location: "Gurugram, Haryana",
      period: "Jan 2025 - Present",
      description: "Working with large datasets to extract insights and enhance decision-making efficiency.",
      responsibilities: [
        "Analyzing large datasets using SQL, Python (Pandas, NumPy) to extract insights, enhancing decision-making efficiency.",
        "Contributing to building dashboards in Tableau/Power BI, reducing manual reporting time by 30%.",
        "Assisting in developing machine learning models for predictive analytics, improving trend forecasting accuracy by 20%.",
        "Contributing to data preprocessing and feature engineering using Scikit-Learn, improving model accuracy.",
        "Conducting exploratory data analysis (EDA) on sales trends, identifying key patterns that supported pricing strategies.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "AICTE Eduskill Foundation",
      location: "Remote, India",
      period: "Sep 2023 - Nov 2023",
      description:
        "Developed predictive models and recommendation systems to improve student performance and engagement.",
      responsibilities: [
        "Developed a student performance prediction model using Python, Scikit-learn, and NLP, achieving 80% prediction accuracy on test data.",
        "Developed a recommendation system for personalized learning paths, improving student engagement by 20%.",
        "Preprocessed 500K+ data points, handling missing values and normalizing datasets, leading to a 15% improvement in model accuracy.",
        "Applied basic Natural Language Processing (NLP) techniques to optimize text-based interactions on the platform.",
        "Collaborated with senior engineers to test and refine models, gaining hands-on experience in real-world machine learning applications.",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Data and Computational Science",
      institution: "University College Dublin",
      location: "Dublin, Ireland",
      period: "Sep 2025 - Aug 2026",
      description: "Advanced studies in data science, machine learning, and computational methods.",
      courses: [
        "Advanced Machine Learning",
        "Big Data Analytics",
        "Statistical Computing",
        "Deep Learning",
        "Natural Language Processing",
        "Data Visualization",
      ],
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "June 2021 - May 2025",
      gpa: "8.7/10",
      description: "Comprehensive education in computer science fundamentals, algorithms, and software development.",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Machine Learning",
        "Artificial Intelligence",
        "Web Development",
        "Computer Networks",
      ],
    },
  ]

  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera (Stanford University)",
      date: "2024",
      description:
        "Comprehensive training in machine learning algorithms, neural networks, and practical applications.",
    },
    {
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      description: "Mastery of data science methodologies, tools, and real-world applications across multiple domains.",
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      description: "Demonstrated proficiency in building and deploying machine learning models using TensorFlow.",
    },
    {
      name: "SQL Advanced Certification",
      issuer: "HackerRank",
      date: "2022",
      description: "Advanced SQL skills including complex queries, database optimization, and data manipulation.",
    },
  ]

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            My professional journey, education, and certifications that have shaped my career in data science and
            machine learning.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://drive.google.com/file/d/1ZEcTEU7Nw-BLljrBYC7ZNVLcnUk_dhCN/view?usp=sharing" className="flex items-center gap-2" target="_blank" 
    rel="noopener noreferrer" >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-700">
            <TabsTrigger
              value="experience"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-700 border-gray-600 overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                          <p className="text-primary">
                            {job.company} | {job.location}
                          </p>
                        </div>
                        <span className="text-gray-400 mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full text-sm">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div>
                        <h4 className="font-medium mb-2 text-white">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-gray-300">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-700 border-gray-600 overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {edu.degree} {edu.gpa && `- GPA: ${edu.gpa}`}
                          </h3>
                          <p className="text-primary">
                            {edu.institution} | {edu.location}
                          </p>
                        </div>
                        <span className="text-gray-400 mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full text-sm">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                      <div>
                        <h4 className="font-medium mb-2 text-white">Key Courses:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.courses.map((course, i) => (
                            <div key={i} className="flex items-center text-gray-300">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-gray-700 border-gray-600 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-primary mr-2" />
                          <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                        </div>
                        <span className="text-gray-400 text-sm bg-gray-800 px-2 py-0.5 rounded">{cert.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-300">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-primary">Programming Languages</h4>
                  <p className="text-gray-300">JavaScript, Python, C/C++, SQL (PostgreSQL), HTML/CSS, R</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Data Science & Machine Learning</h4>
                  <p className="text-gray-300">Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch, Matplotlib, Seaborn</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Databases & Big Data</h4>
                  <p className="text-gray-300">PostgreSQL, MongoDB, MySQL, Firebase</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Cloud & Deployment</h4>
                  <p className="text-gray-300">Google Cloud, Docker, Flask, FastAPI</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Data Visualization & BI Tools</h4>
                  <p className="text-gray-300">Power BI, Tableau, Plotly, Chart.js</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Web & Software Development</h4>
                  <p className="text-gray-300">React.js, Next.js, Node.js, Redux, Express.js, REST APIs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

