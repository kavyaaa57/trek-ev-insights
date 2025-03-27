
import React from 'react';
import Header from '@/components/layout/Header';
import SmartTips from '@/components/recommendations/SmartTips';
import { MapPin, MessageSquare } from 'lucide-react';
import { brakingZonesData } from '@/utils/dummyData';

const Recommendations = () => {
  const [query, setQuery] = React.useState('');
  const [showVoiceInterface, setShowVoiceInterface] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Smart Recommendations</h1>
          <p className="text-muted-foreground">
            AI-driven insights to improve your driving efficiency
          </p>
        </div>
        
        {/* Smart Tips Section */}
        <SmartTips />
        
        {/* Geo-tagged Braking Zones */}
        <div className="glass-panel p-6 mt-8 animate-fade-in">
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-eco-blue mr-2" />
            <h2 className="text-2xl font-semibold">Optimal Braking Zones</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Locations where maximum energy recovery is possible
          </p>
          
          <div className="space-y-4">
            {brakingZonesData.map((zone) => (
              <div 
                key={zone.id}
                className="bg-white/40 dark:bg-white/5 rounded-xl p-4 border border-white/30 dark:border-white/10"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{zone.description}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Potential recovery: <span className="text-eco-green font-medium">{zone.potentialRecovery}</span>
                    </p>
                  </div>
                  <button className="text-sm text-primary hover:underline">View on map</button>
                </div>
                <p className="text-sm mt-3">
                  <span className="font-medium">Tip:</span> {zone.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Voice Assistant Interface */}
        <div className="glass-panel p-6 mt-8 animate-fade-in relative">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-eco-yellow mr-2" />
            <h2 className="text-2xl font-semibold">Voice Assistant</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Ask questions about your vehicle's performance or receive personalized tips
          </p>
          
          <div className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 rounded-l-lg py-3 px-4 bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => setShowVoiceInterface(!showVoiceInterface)}
              className="bg-primary text-white rounded-r-lg py-3 px-4 hover:bg-primary/90 transition-colors"
            >
              {showVoiceInterface ? 'Type' : 'Voice'}
            </button>
          </div>
          
          {showVoiceInterface && (
            <div className="mt-6 p-8 bg-white/60 dark:bg-white/5 rounded-xl border border-white/30 dark:border-white/10 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-eco-blue rounded-full opacity-20 animate-pulse"></div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-eco-blue rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium mb-2">Listening...</p>
              <p className="text-muted-foreground">
                Ask something like "How much energy did I save today?" or "Suggest ways to improve recovery"
              </p>
            </div>
          )}
          
          {/* Sample Responses (In a real app, these would be dynamically generated) */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-secondary/60 dark:bg-muted/60 rounded-xl">
              <p className="font-medium mb-1">How much energy did I save today?</p>
              <p className="text-muted-foreground">
                Today, you've saved 4.2 kWh through regenerative braking, which is equivalent to extending your range by approximately 14 km.
              </p>
            </div>
            
            <div className="p-4 bg-secondary/60 dark:bg-muted/60 rounded-xl">
              <p className="font-medium mb-1">What's my efficiency score?</p>
              <p className="text-muted-foreground">
                Your current eco-driving score is 87/100, which is 5 points higher than last week. Great improvement!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EcoTreck. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed for optimal EV energy management
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;
