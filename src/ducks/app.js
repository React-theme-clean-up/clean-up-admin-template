// @flow
import { createAction, createReducer } from 'redux-act'
import { push } from 'react-router-redux'
import { pendingTask, begin, end } from 'react-redux-spinner'

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
export const setCommonLogin = createAction(`${NS}SET_COMMON_LOGIN`)
export const setCommonCompany = createAction(`${NS}SET_COMMON_COMPANY`)
export const setCommonAgent = createAction(`${NS}SET_COMMON_AGENT`)
export const setUpdatingCompany = createAction(`${NS}SET_UPDATING_COMPANY`)
export const setCardDetails = createAction(`${NS}SET_CARD_DETAILS`)

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

export function initAuth(dispatch) {
  let key = window.localStorage.getItem('app.Authorization')
  if (key === 'qwerty') {
    dispatch(_setHideLogin(true))
    dispatch(setCommonLogin())
    dispatch(push('/dashboard'))
    return true
  } else {
    dispatch(push('/login'))
    dispatch(_setFrom(''))
    return false
  }
}

export function login( username, password, dispatch ) {
  if ( username === "nicktabolich@live.com" && password === "123123") {
    window.localStorage.setItem('app.Authorization', "qwerty")
    dispatch(_setHideLogin(true))
    dispatch(setCommonLogin())
    dispatch(push('/dashboard'))
    return true
  } else {
    dispatch(push('/login'))
    dispatch(_setFrom(''))
    return false
  }
}

export const logout = () => (dispatch: Function, getState: Function) => {
  dispatch(
    setUserState({
      userState: {
        login: '',
      },
    }),
  )
  dispatch(push('/login'))
  window.localStorage.setItem('app.Authorization', '')
}

const initialState = {
  from: '',
  isMenuLeft:
  (window.localStorage.getItem('app.isMenuLeft') ||
    (window.localStorage.setItem('app.isMenuLeft', 'on'), 'on')) === 'on',
  isUpdatingContent: false,
  isUpdatingDashboard: false,
  commonLogin: '',
  isLoading: false,
  activeDialog: '',
  dialogForms: {},
  submitForms: {},
  isHideLogin: false,
  userState: {
    login: '',
  },
  cardDetails: {},
  commonCompany: {},
  isUpdatingCompany: false,
}

export default createReducer(
  {
    [_setFrom]: (state, from) => ({ ...state, from }),
    [_setMenuLeft]: (state, isMenuLeft) => ({ ...state, isMenuLeft }),
    [setUserState]: (state, { userState }) => ({ ...state, userState }),
    [setCardDetails]: (state, { cardDetails }) => ({ ...state, cardDetails }),
    [setUpdatingContent]: (state, isUpdatingContent) => ({ ...state, isUpdatingContent }),
    [setCommonLogin]: (state, commonLogin) => ({ ...state, commonLogin }),
    [setCommonCompany]: (state, commonCompany) => ({ ...state, commonCompany }),
    [setCommonAgent]: (state, commonAgent) => ({ ...state, commonAgent }),
    [_setLoading]: (state, isLoading) => ({ ...state, isLoading }),
    [_setHideLogin]: (state, isHideLogin) => ({ ...state, isHideLogin }),
    [setUpdatingCompany]: (state, isUpdatingCompany) => ({ ...state, isUpdatingCompany }),
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
