import React, { useState } from 'react'
import UserOptions from './OptionsUser'
import Panel from './Panel'

const HomeInterface = ({ user, tools, isLoading }) => {
	return (
		<div>
			<UserOptions user={user}  />
			{/* <Panel data={tools} isLoading={isLoading}/> */}
			<Panel/>
		</div>
	)
}

export default HomeInterface
