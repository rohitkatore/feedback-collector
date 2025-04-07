import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Footer from "./components/Footer"

function App() {
  const [showAdmin, setShowAdmin] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-6 shadow-lg relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.div 
              whileHover={{ rotate: 5 }}
              className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </motion.div>
            <motion.h1 
              className="text-3xl font-bold tracking-tight"
              whileHover={{ scale: 1.03 }}
            >
              Feedback Collector
            </motion.h1>
          </motion.div>
          
          <motion.button 
            onClick={() => setShowAdmin(!showAdmin)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-indigo-600 rounded-full font-medium shadow-md
              hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {showAdmin ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              )}
            </svg>
            {showAdmin ? "Submit Feedback" : "View Submissions"}
          </motion.button>
        </div>
      </motion.header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAdmin ? "admin" : "form"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="max-w-6xl mx-auto"
          >
            {mounted && (showAdmin ? <FeedbackList /> : <FeedbackForm />)}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App