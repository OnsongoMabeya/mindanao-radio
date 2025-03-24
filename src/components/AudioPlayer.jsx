import { useState, useRef, useEffect } from 'react';
import {
  Paper,
  IconButton,
  Slider,
  Box,
  Typography,
  useTheme,
  styled,
  CircularProgress,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(8px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  zIndex: 1000,
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
    },
    '&.Mui-active': {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
    },
  },
}));

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('waiting', () => setIsLoading(true));
      audio.addEventListener('playing', () => setIsLoading(false));
      
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('waiting', () => setIsLoading(true));
        audio.removeEventListener('playing', () => setIsLoading(false));
      };
    }
  }, []);

  const handleCanPlay = () => {
    setError(null);
    setIsLoading(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleError = (e) => {
    console.error('Audio Error:', e);
    setError('Unable to play audio stream. Please try again later.');
    setIsPlaying(false);
    setIsLoading(false);
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        setIsLoading(true);
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Playback error:', err);
        setError('Unable to play audio. Please try again.');
        setIsPlaying(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleTimeChange = (event, newValue) => {
    setCurrentTime(newValue);
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="http://stream.zeno.fm/eezdhp4yx1zuv"
        preload="metadata"
      />
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={togglePlay} 
            color="primary"
            disabled={!!error || isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              isPlaying ? <PauseIcon /> : <PlayArrowIcon />
            )}
          </IconButton>
          
          <Box sx={{ flex: 1 }}>
            {error ? (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            ) : (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {isLoading ? 'Loading...' : 'Live'}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" noWrap>
                  Now Playing: Mindanao Radio Live Stream
                </Typography>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton 
              onClick={toggleMute} 
              color="primary"
              disabled={!!error}
            >
              {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
            <StyledSlider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.01}
              aria-label="volume-slider"
              size="small"
              sx={{ width: 100 }}
              disabled={!!error}
            />
          </Box>
        </Box>
      </StyledPaper>
    </>
  );
}

export default AudioPlayer; 