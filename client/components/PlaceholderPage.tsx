import { motion } from 'framer-motion';
import { Construction, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

const PlaceholderPage = ({ title, description, comingSoon = true }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center shadow-2xl">
            <Construction className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
          {description}
        </p>

        {comingSoon && (
          <>
            {/* Coming Soon Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-space-light/50 border border-neon-purple/50 rounded-full mb-8"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)"
                ],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="text-neon-purple font-semibold">Coming Soon</span>
            </motion.div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-foreground/60">
                This page is currently under construction. Continue exploring our other sections or get in touch to learn more!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </Button>
                
                <Button
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
