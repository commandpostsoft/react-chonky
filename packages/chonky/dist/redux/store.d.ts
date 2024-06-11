import { RootState } from '../types/redux.types';
export declare const useChonkyStore: (chonkyInstanceId: string) => import("@reduxjs/toolkit").EnhancedStore<RootState, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<RootState, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
/**
 * Hook that can be used with parametrized selectors.
 */
export declare const useParamSelector: <Args extends any[], Value>(parametrizedSelector: (...args: Args) => (state: RootState) => Value, ...selectorParams: Args) => Value;
/**
 * DTE - DispatchThunkEffect. This method is used to decrease code duplication in
 * main Chonky method.
 */
export declare const useDTE: <Args extends any[]>(actionCreator: (...args: Args) => any, ...selectorParams: Args) => void;
export declare const usePropReduxUpdate: <Payload extends unknown>(actionCreator: (payload: Payload) => any, payload: Payload) => void;
