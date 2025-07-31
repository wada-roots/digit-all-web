import { useState } from 'react';
import Modal from '@/components/Modal';
import SocialMediaPopup from '@/components/popups/SocialMediaPopup';
import { Button } from '@/components/ui/button';

const PopupDemo = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Thank you for your Social Media Marketing inquiry! We\'ll get back to you within 24 hours.');
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
          Popup Demo
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          This demonstrates how the service popup forms look when a user clicks "Order Now"
        </p>
        
        {!showPopup && (
          <Button 
            onClick={() => setShowPopup(true)}
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Show Social Media Popup
          </Button>
        )}
      </div>

      <Modal isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <SocialMediaPopup onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default PopupDemo;
