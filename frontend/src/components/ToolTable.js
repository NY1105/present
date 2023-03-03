import React, { useCallback, useMemo, useState, useEffect } from 'react'
import MaterialReactTable from 'material-react-table'
import { Box, Typography, MenuItem } from '@mui/material'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ToolsTable = ({ data, isLoading }) => {
	const [width, setWidth] = useState(window.innerWidth)
	const [showDes, setShowDes] = useState(true)
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
			if (width > 1050) {
				setShowDes(true)
			} else {
				setShowDes(false)
			}
		})
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth)
				if (width > 1050) {
					setShowDes(true)
				} else {
					setShowDes(false)
				}
			})
		}
	})
	const [tableData, setTableData] = useState(() => data)
	const columns = useMemo(
		() => [
			{
				accessorKey: 'appName', //access nested data with dot notation
				header: 'Name',
				size: 20,

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
							height={width >= 1050 ? 30 : 15}
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
				size: 20,
			},
			{
				accessorKey: 'appDescription',
				header: 'Description',
				size: 40,
			},
		],
		[]
	)

	const { dispatch } = useToolsContext()
	const { user } = useAuthContext()
	const deleteTool = async (id) => {
		if (!user) {
			return
		}

		const response = await fetch(
			`${process.env.REACT_APP_API_ENDPOINT}/tools/` + id,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		)
		const json = await response.json()
		dispatch({ type: 'DELETE_TOOL', payload: json })
		if (response.ok) {
			console.log(json)
			// dispatch({ type: 'DELETE_TOOL', payload: json })
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
		<div className={width >= 1050 ? 'div-MRT' : 'div-MRT-shift'}>
			<MaterialReactTable
				columns={columns}
				data={data ?? []}
				enableExpanding={width >= 1050}
				globalFilterFn="contains"
				enableColumnActions={false}
				enableHiding={false}
				enableFullScreenToggle={false}
				enableColumnFilters={false}
				enableDensityToggle={false}
				enableRowActions={width >= 1050}
				positionActionsColumn="last"
				state={{ isLoading }}
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
					{ showGlobalFilter: true },
					{ columnVisibility: { appDescription: width >= 1050 } })
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
							{/* TODO: click to copy */}
						</Typography>
						<Typography>Created By: {row.original.createdBy}</Typography>
						{/* <Typography>Tags: {row.original.appTags}</Typography> */}
					</Box>
				)}
				renderTopToolbarCustomActions={() => (
					<Box>
						<Typography variant={width >= 1050 ? 'h5' : 'body1'}>
							Tools that I used to build this website:
						</Typography>
					</Box>
				)}
			/>
		</div>
	)
}

export default ToolsTable
