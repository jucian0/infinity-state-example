import { useState, useEffect } from 'react';
import { ObjectContext, State } from './state';

// /**
//  * @param  {TContext} stateContext StateContext.
//  * @param  {(state:TContext['state'])=>TR} fn Function callback to change state value.
//  */
// export const useIState = <TContext extends any, TR>(
//   stateContext: TContext,
//   fn: (state: TContext['state']) => TR
// ) => {
//   const [state, setState] = useState<TContext['state']>(stateContext.state);

//   useEffect(() => stateContext.subscribe(setState), []);

//   return fn(state);
// };


export function useMState<TContext extends State<ObjectContext<TContext>>, TR>(stateContext: TContext, fn?: (state: TContext['state']) => TR): [typeof fn extends Function ? TR : TContext['state'], TContext["mutations"]] {

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
