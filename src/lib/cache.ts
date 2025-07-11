interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiry: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutos por defecto

  set<T>(key: string, data: T, ttl: number = this.defaultTTL): void {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      expiry: Date.now() + ttl
    };
    this.cache.set(key, item);
    console.log(`Cache SET: ${key} (TTL: ${ttl}ms)`);
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      console.log(`Cache MISS: ${key}`);
      return null;
    }

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      console.log(`Cache EXPIRED: ${key}`);
      return null;
    }

    console.log(`Cache HIT: ${key}`);
    return item.data as T;
  }

  delete(key: string): void {
    this.cache.delete(key);
    console.log(`Cache DELETE: ${key}`);
  }

  clear(): void {
    this.cache.clear();
    console.log('Cache CLEARED');
  }

  // Limpiar cache expirado
  cleanup(): void {
    const now = Date.now();
    let cleaned = 0;
    const keysToDelete: string[] = [];
    
    // Primero, encontrar las claves que necesitan ser eliminadas
    this.cache.forEach((item, key) => {
      if (now > item.expiry) {
        keysToDelete.push(key);
      }
    });
    
    // Luego, eliminar las claves expiradas
    keysToDelete.forEach(key => {
      this.cache.delete(key);
      cleaned++;
    });
    
    if (cleaned > 0) {
      console.log(`Cache CLEANUP: ${cleaned} items removed`);
    }
  }
}

// Instancia global del cache
export const cache = new CacheManager();

// Limpiar cache expirado cada 10 minutos
if (typeof window !== 'undefined') {
  setInterval(() => cache.cleanup(), 10 * 60 * 1000);
}