import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('http://stream.zeno.fm/eezdhp4yx1zuv');
        
        audioRef.current.addEventListener('canplay', () => {
        setIsLoading(false);
        });

        audioRef.current.addEventListener('error', () => {
        setIsLoading(false);
        console.error('Error loading audio stream');
        });

        return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
        audioRef.current.pause();
        } else {
        audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-dark-bg border-t border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <button
                onClick={togglePlay}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 transition-colors disabled:opacity-50"
            >
                {isPlaying ? <FaPause className="h-5 w-5" /> : <FaPlay className="h-5 w-5" />}
            </button>
            <div>
                <h3 className="text-dark-text font-medium">Mindanao Radio</h3>
                <p className="text-dark-text-secondary text-sm">Live Stream</p>
            </div>
            </div>
            
            <div className="flex items-center space-x-2">
            {isPlaying && (
                <span className="flex items-center text-secondary">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="ml-2 text-sm font-medium">LIVE</span>
                </span>
            )}
            </div>
        </div>
        </div>
    );
} 