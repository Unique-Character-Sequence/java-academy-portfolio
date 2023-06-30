import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`

// pre-typed useDispatch keeps you from forgetting to import AppDispatch where it's needed.
export const useAppDispatch: () => AppDispatch = useDispatch
// For useSelector, it saves you the need to type (state: RootState) every time
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector