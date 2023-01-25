import Login from './Login'
import Signup from './Signup'
import Actions from './Actions'
import ToolForm from './ToolForm'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'

export const Panel = () => {
	const { page, dispatch } = usePanelContext()
	const { user } = useAuthContext()

	useEffect(() => {
		if (user) {
			dispatch({ type: 'ACTIONS_PANEL' })
		}
		if (!user) {
			dispatch({ type: 'LOGIN_PANEL' })
		}
	}, [dispatch, user])

	switch (page) {
		case 'Signup':
			console.log('p')
			return <Signup />
		case 'Login':
			return <Login />
		case 'Actions':
			return <Actions />
		case 'ToolForm':
			return <ToolForm />
	}
}
export default Panel
