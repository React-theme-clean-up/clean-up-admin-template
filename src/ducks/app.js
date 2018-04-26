import { createAction, createReducer } from 'redux-act'
import { push } from 'react-router-redux'
import { pendingTask, begin, end } from 'react-redux-spinner'
import axios from 'axios'

const REDUCER = 'app'
const NS = `@@${REDUCER}/`

const _setFrom = createAction(`${NS}SET_FROM`)
const _setLoading = createAction(`${NS}SET_LOADING`)
const _setMenuLeft = createAction(`${NS}SET_MENU_LEFT`)
const _setHideLogin = createAction(`${NS}SET_HIDE_LOGIN`)

export const setUserState = createAction(`${NS}SET_USER_STATE`)
export const setUpdatingContent = createAction(`${NS}SET_UPDATING_CONTENT`)
export const setActiveDialog = createAction(`${NS}SET_ACTIVE_DIALOG`)
export const deleteDialogForm = createAction(`${NS}DELETE_DIALOG_FORM`)
export const addSubmitForm = createAction(`${NS}ADD_SUBMIT_FORM`)
export const deleteSubmitForm = createAction(`${NS}DELETE_SUBMIT_FORM`)

export const setLoading = (isLoading: boolean) => {
  const action = _setLoading(isLoading)
  action[pendingTask] = isLoading ? begin : end
  return action
}

export const resetHideLogin = () => (dispatch: Function, getState: Function) => {
  const state = getState()
  if (state.pendingTasks === 0 && state.app.isHideLogin) {
    dispatch(_setHideLogin(false))
  }
  return Promise.resolve()
}

export const toggleMenuLeft = () => (dispatch: Function, getState: Function) => {
  const state = getState()
  const isMenuLeft = !state.app.isMenuLeft
  window.localStorage.setItem('app.isMenuLeft', isMenuLeft ? 'on' : 'off')
  dispatch(_setMenuLeft(isMenuLeft))
  return Promise.resolve()
}

export const initAuth = (roles: Array<string>) => (dispatch: Function, getState: Function) => {
  // Use Axios there to get User Data by Auth Token with Bearer Method Authentication

  const role = window.localStorage.getItem('app.Role')
  const state = getState()
  let data = null

  console.log(role)

  if (role === 'administrator') {
    data = {
      email: 'admin@mediatec.org',
      role: 'administrator',
    }
    dispatch(
      setUserState({
        userState: {
          ...data,
        },
      }),
    )
    if (!roles.find(role => role === 'administrator')) {
      if (!(state.routing.location.pathname === '/dashboard/alpha')) {
        dispatch(push('/dashboard/alpha'))
      }
      return Promise.resolve(false)
    }
    return Promise.resolve(true)
  } else if (role === 'agent') {
    data = {
      email: 'agent@mediatec.org',
      role: 'agent',
    }
    dispatch(
      setUserState({
        userState: {
          ...data,
        },
      }),
    )
    if (!roles.find(role => role === 'agent')) {
      if (!(state.routing.location.pathname === '/dashboard/alpha')) {
        dispatch(push('/dashboard/alpha'))
      }
      return Promise.resolve(false)
    }
    return Promise.resolve(true)
  } else {
    const state = getState()
    const location = state.routing.location
    const from = location.pathname + location.search
    dispatch(_setFrom(from))
    dispatch(push('/login'))
    return Promise.reject()
  }
}

export function login(username, password, dispatch) {
  // Use Axios there to get User Auth Token with Basic Method Authentication

  if (username === 'admin@mediatec.org' && password === '123123') {
    window.localStorage.setItem('app.Authorization', '')
    window.localStorage.setItem('app.Role', 'administrator')
    dispatch(_setHideLogin(true))
    dispatch(push('/dashboard/alpha'))
    return true
  }

  if (username === 'agent@mediatec.org' && password === '123123') {
    window.localStorage.setItem('app.Authorization', '')
    window.localStorage.setItem('app.Role', 'agent')
    dispatch(_setHideLogin(true))
    dispatch(push('/dashboard/alpha'))
    return true
  }

  dispatch(push('/login'))
  dispatch(_setFrom(''))

  return false
}

export const logout = () => (dispatch: Function, getState: Function) => {
  dispatch(
    setUserState({
      userState: {
        email: '',
        role: '',
      },
    }),
  )
  dispatch(push('/login'))
  window.localStorage.setItem('app.Authorization', '')
  window.localStorage.setItem('app.Role', '')
}

const initialState = {
  // APP PARAMETERS
  from: '',
  isMenuLeft:
    (window.localStorage.getItem('app.isMenuLeft') ||
      (window.localStorage.setItem('app.isMenuLeft', 'on'), 'on')) === 'on',
  isUpdatingContent: false,
  isLoading: false,
  activeDialog: '',
  dialogForms: {},
  submitForms: {},
  isHideLogin: false,

  // USER PARAMETERS
  userState: {
    email: '',
    role: '',
  },
}

export default createReducer(
  {
    [_setFrom]: (state, from) => ({ ...state, from }),
    [_setLoading]: (state, isLoading) => ({ ...state, isLoading }),
    [_setMenuLeft]: (state, isMenuLeft) => ({ ...state, isMenuLeft }),
    [_setHideLogin]: (state, isHideLogin) => ({ ...state, isHideLogin }),
    [setUpdatingContent]: (state, isUpdatingContent) => ({ ...state, isUpdatingContent }),
    [setUserState]: (state, { userState }) => ({ ...state, userState }),
    [setActiveDialog]: (state, activeDialog) => {
      const result = { ...state, activeDialog }
      if (activeDialog !== '') {
        const id = activeDialog
        result.dialogForms = { ...state.dialogForms, [id]: true }
      }
      return result
    },
    [deleteDialogForm]: (state, id) => {
      const dialogForms = { ...state.dialogForms }
      delete dialogForms[id]
      return { ...state, dialogForms }
    },
    [addSubmitForm]: (state, id) => {
      const submitForms = { ...state.submitForms, [id]: true }
      return { ...state, submitForms }
    },
    [deleteSubmitForm]: (state, id) => {
      const submitForms = { ...state.submitForms }
      delete submitForms[id]
      return { ...state, submitForms }
    },
  },
  initialState,
)
