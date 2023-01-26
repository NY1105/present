import React, { useCallback, useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table'
import {
	Box,
	Typography,
	MenuItem,
} from '@mui/material'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ToolsTable = ({ data }) => {
	const [tableData, setTableData] = useState(() => data)
	const columns = useMemo(
		() => [
			{
				accessorKey: 'appName', //access nested data with dot notation
				header: 'Name',
				size: 100,
				Cell: ({ cell, row }) => (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						<img
							alt="appLogo"
							height={30}
							src={row.original.appLogo}
							loading="lazy"
							// style={{ borderRadius: '50%' }}
						/>
						<Typography>{cell.getValue()}</Typography>
					</Box>
				),
			},
			{
				accessorKey: 'appProviderName',
				header: 'Provider',
				size: 100,
			},
			{
				accessorKey: 'appDescription',
				header: 'Description',
				size: 250,
			},
			// {
			// 	accessorKey: 'nSaved',
			// 	header: 'Number of Saved',
			// 	size: 15,
			// },
		],
		[]
	)

	const { dispatch } = useToolsContext()
	const { user } = useAuthContext()
	const deleteTool = async (id) => {
		if (!user) {
			return
		}
		const response = await fetch('/api/tools/' + id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
		const json = await response.json()
		if (response.ok) {
			dispatch({ type: 'DELETE_TOOL', payload: json })
		}
	}
	const handleDeleteRow = useCallback(
		(row) => {
			// if (
			// 	!confirm(`Are you sure you want to delete ${row.getValue('appName')}`)
			// ) {
			// 	return
			// }
            // console.log()
			deleteTool(row.row.original._id)
			tableData.splice(row.index, 1)
			setTableData([...tableData])
		},
		[tableData]
	)

	return (
		<MaterialReactTable
			columns={columns}
			data={data}
			enableColumnActions={false}
			enableHiding={false}
			enableFullScreenToggle={false}
			enableColumnFilters={false}
			enableDensityToggle={false}
			enableRowActions
			positionActionsColumn="last"
			renderRowActionMenuItems={(row) => [
				// <MenuItem onClick={() => console.info('Edit')}>Edit</MenuItem>,
				<MenuItem
					key="del"
					onClick={() => {
						handleDeleteRow(row)
					}}
				>
					Delete
				</MenuItem>,
			]}
			muiTablePaginationProps={{
				rowsPerPageOptions: [10, 30, 100],
				showFirstButton: true,
				showLastButton: true,
			}}
			initialState={
				({ density: 'comfortable' },
				{
					expanded: {
						0: true,
					},
				},
				{ showGlobalFilter: true })
			}
			renderDetailPanel={({ row }) => (
				<Box
					sx={{
						display: 'grid',
						margin: 'auto',
						gridTemplateColumns: '1fr 1fr',
						width: '100%',
					}}
				>
					<Typography>
						Official Site: {row.original.appOfficialSiteURL}
					</Typography>
					<Typography>Created By: {row.original.createdBy}</Typography>
					{/* <Typography>Tags: {row.original.appTags}</Typography> */}
				</Box>
			)}
		/>
	)
}

export default ToolsTable
