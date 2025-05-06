
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: 'Please enter an email or phone number',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: 'Thanks for subscribing!',
        description: 'Weekend plans will be sent to you every Friday.',
      });
      setEmail('');
    } catch (error) {
      toast({
        title: 'Subscription failed',
        description: 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
        <div className="flex items-start gap-2 mb-1">
          <Bell className="h-5 w-5 text-primary mt-1" />
          <div className="text-left">
            <p className="text-primary font-medium text-base">
              Enter your email or phone to get weekend plans every Friday 🔔
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Email or phone number"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button 
            type="submit" 
            className="bg-primary text-white"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </div>
        
        <div className="flex justify-end items-center text-xs text-gray-500">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>Last updated: 06/05/2025</span>
        </div>
      </form>
    </div>
  );
};

export default SubscribeSection;
