import { Box, List, ListItemButton, ListItemText } from '@mui/material';

import React from 'react';
import { sideBarList } from '../data';
import { Link } from 'react-router-dom';

export const SideBar = () => {
	return (
		<Box
			sx={{
				width: '200px',
				padding: '10px 16px',
			}}
		>
			<List component='nav'>
				{sideBarList.map((item, index) => (
					<ListItemButton key={item + index} component={Link} to={item.link}>
						<ListItemText primary={item.name} />
					</ListItemButton>
				))}
			</List>
		</Box>
	);
};
