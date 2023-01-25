import { usePanelContext } from '../hooks/usePanelContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from 'react'
import Form from './ToolForm'

// import Signup from './Signup'
// import { useLogout } from '../hooks/useLogout'
const Panel = () => {
	const [panel, setPanel] = useState(<Form />)

	const { user } = useAuthContext()
	// const { panel,dispatch } = usePanelContext()

	return (
        {panel}
    )
}
export default Panel
