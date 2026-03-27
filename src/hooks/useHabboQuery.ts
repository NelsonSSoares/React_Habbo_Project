import { useState, useEffect } from 'react';

interface QueryState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useHabboQuery<T>(
  fetcher: () => Promise<T>,
  deps: unknown[]
): QueryState<T> {
  const [state, setState] = useState<QueryState<T>>({
    data: null, loading: true, error: null,
  });

  useEffect(() => {
    let cancelled = false;
    setState(prev => ({ ...prev, loading: true, error: null }));

    fetcher()
      .then(data => { if (!cancelled) setState({ data, loading: false, error: null }); })
      .catch(err  => { if (!cancelled) setState({ data: null, loading: false, error: err.message }); });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}