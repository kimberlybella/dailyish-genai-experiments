'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Volume2 } from 'lucide-react';

// Typewriter animation component
const TypewriterText = ({ text, className = "", onStart }: { text: string; className?: string; onStart?: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0 && text && onStart) {
      onStart();
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, onStart]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export default function JuicyWordFinder() {
  const [adjective, setAdjective] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const [previousSuggestions, setPreviousSuggestions] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getSuggestion = async (refresh = false) => {
    if (!adjective.trim() || isLoading) return;

    setIsLoading(true);
    setFade(true);
    setError(false);

    try {
      const response = await fetch('/api/juicy-word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adjective,
          previousSuggestions: refresh ? previousSuggestions : []
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get suggestion');
      }

      const result = await response.json();

      setSuggestion(result.suggestion);
      setDefinition(result.definition);
      setPreviousSuggestions(prev => [...prev, result.suggestion]);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      setError(true);
      setSuggestion('');
      setDefinition('');
    } finally {
      setIsLoading(false);
      setFade(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdjective(e.target.value);
    setSuggestion('');
    setDefinition('');
    setPreviousSuggestions([]);
    setError(false);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getSuggestion();
    }
  };

  const handleRefresh = () => {
    if (suggestion && !isLoading) {
      setIsTyping(false);
      getSuggestion(true);
    }
  };

  const handleSpeak = () => {
    if (suggestion && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(suggestion);
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      <div
        className="min-h-screen transition-colors duration-300"
        style={{
          background: 'linear-gradient(135deg, #FEF3C7 0%, #BFDBFE 50%, #DDD6FE 100%)',
          color: '#1F2937'
        }}
      >
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 flex justify-center items-center p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <h1
              className="text-4xl font-bold"
              style={{
                color: '#7C3AED',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Juicy Word Finder! 🍊
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
        </header>

        {/* Main content - centered on page */}
        <main className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-3xl px-6 space-y-12">
            {/* Input section */}
            <div
              className={`flex flex-col items-center gap-6 transition-transform duration-500 ease-out ${
                isTyping ? '-translate-y-8' : 'translate-y-0'
              }`}
            >
              <div className="text-2xl font-bold text-purple-800 text-center">
                Type a word you want to make more juicy! ✨
              </div>
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={adjective}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="happy"
                  className="border-4 rounded-2xl bg-white outline-none text-center text-4xl font-bold py-4 px-8 shadow-lg transition-all focus:scale-105"
                  style={{
                    borderColor: '#A78BFA',
                    color: '#1F2937',
                    width: '20rem'
                  }}
                />
                <button
                  onClick={() => adjective && getSuggestion()}
                  className={`p-4 rounded-full bg-purple-500 hover:bg-purple-600 transition-all shadow-lg ${
                    !adjective ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                  }`}
                  disabled={!adjective}
                  aria-label="Find juicy word"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Result section */}
            {suggestion && (
              <div
                className={`transition-opacity duration-300 ${
                  fade ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="text-2xl font-bold text-pink-600">
                    Your juicy word is...
                  </div>
                  <div
                    className="flex flex-col items-center gap-6 bg-white rounded-3xl px-12 py-8 shadow-2xl border-4"
                    style={{ borderColor: '#F472B6' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        <TypewriterText
                          text={suggestion}
                          onStart={() => setIsTyping(true)}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSpeak}
                          className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:scale-110"
                          aria-label="Hear the word"
                          title="Click to hear how to say it!"
                        >
                          <Volume2 className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={handleRefresh}
                          disabled={isLoading}
                          className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg ${
                            isLoading ? 'animate-spin opacity-50' : 'hover:scale-110'
                          }`}
                          aria-label="Get another juicy word"
                          title="Get a different juicy word!"
                        >
                          <RefreshCw className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>
                    {definition && (
                      <div className="text-xl text-gray-700 text-center max-w-lg border-t-2 border-purple-200 pt-4">
                        <span className="font-bold text-purple-600">What it means:</span> {definition}
                      </div>
                    )}
                  </div>
                  <div className="text-xl font-semibold text-green-700">
                    Great job! That&apos;s a super juicy word! 🎉
                  </div>
                </div>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="flex justify-center">
                <div
                  className="text-2xl font-bold bg-white rounded-2xl px-8 py-4 shadow-lg"
                  style={{ color: '#EF4444' }}
                >
                  Oops! Let&apos;s try again! 🔄
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Encouraging footer message */}
        <footer className="absolute bottom-0 left-0 right-0 text-center p-6">
          <div className="text-lg font-semibold text-purple-700">
            Keep writing amazing stories! 📚✏️
          </div>
        </footer>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');

        body, input, button {
          font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        input::placeholder {
          color: #A78BFA;
          opacity: 0.6;
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
