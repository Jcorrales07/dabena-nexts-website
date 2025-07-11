import { useState, useEffect } from 'react';
import { cache } from '../lib/cache';

export const useCacheStatus = () => {
  const [cacheStats, setCacheStats] = useState({
    hits: 0,
    misses: 0,
    totalRequests: 0
  });

  useEffect(() => {
    // Aquí podrías implementar un listener para estadísticas del cache
    // Por ahora es solo un placeholder
  }, []);

  const clearCache = () => {
    cache.clear();
  };

  return { cacheStats, clearCache };
};