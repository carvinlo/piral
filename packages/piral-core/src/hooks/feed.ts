import { useEffect } from 'react';
import { useAction } from './action';
import { useGlobalState } from './globalState';
import { ConnectorDetails } from '../types';

/**
 * Hook that returns the connected feed.
 * @param options The options for retrieving the feed.
 */
export function useFeed<TData, TItem>(options: ConnectorDetails<TData, TItem>): [boolean, TData, any] {
  const { loaded, loading, error, data } = useGlobalState(s => s.feeds[options.id]);
  const load = useAction('loadFeed');

  useEffect(() => {
    if (!loaded && !loading) {
      load(options);
    }
  }, []);

  return [loaded, data, error];
}
