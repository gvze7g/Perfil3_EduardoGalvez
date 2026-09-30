import { useEffect, useState } from 'react';

const API_URL = 'https://dragonball-api.com/api/planets';

export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('No se pudieron obtener los planetas');
      }

      const data = await response.json();

      setPlanets(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return {
    planets,
    loading,
    error,
    fetchPlanets,
  };
}