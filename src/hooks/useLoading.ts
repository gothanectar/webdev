import { useState, useEffect } from 'react';
import type { LoadingState } from '../types';

export const useLoading = (duration: number = 2000) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    progress: 0,
    error: null,
    stage: 'initializing'
  });

  useEffect(() => {
    const stages = ['initializing', 'loading-assets', 'rendering', 'complete'] as const;
    let currentStageIndex = 0;
    
    const interval = setInterval(() => {
      setLoadingState(prev => {
        const newProgress = Math.min(prev.progress + 25, 100);
        
        if (newProgress === 100) {
          clearInterval(interval);
          return {
            ...prev,
            progress: newProgress,
            stage: 'complete',
            isLoading: false
          };
        }
        
        if (newProgress > currentStageIndex * 25 && currentStageIndex < stages.length - 1) {
          currentStageIndex++;
        }
        
        return {
          ...prev,
          progress: newProgress,
          stage: stages[currentStageIndex]
        };
      });
    }, duration / 4);

    return () => clearInterval(interval);
  }, [duration]);

  return loadingState;
};