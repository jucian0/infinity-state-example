import { useState, useEffect } from 'react';
import { TState } from './state';


export function useMState<TContext extends TState, TR = TContext["state"]>(stateContext: TContext, fn?: (state: TContext['state']) => TR): [TR, TContext["mutations"]] {

  const [state, setState] = useState<TContext['state']>(stateContext.state);

  useEffect(() => {
    const subscription = stateContext.subscribe(setState)
    return () => {
      subscription()
    }
  }, []);

  const filteredState = fn ? fn(state) : state

  return [filteredState, { ...stateContext.mutations }]
}


export function useSubscribe<TContext extends TState>(context: TContext, event: keyof TContext["mutations"], fn: () => void) {

  useEffect(() => {

    const subscription = context.subscribeInAction(event as string, fn)

    return () => {
      subscription()
    }

  }, [])
}