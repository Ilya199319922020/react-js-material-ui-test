import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Element/Sidebar';
import Content from './Element/Content';

export default function MainPage() {
	return (
		<Box
			sx={{
				display: "flex",
				display: 'grid',
				gridTemplateColumns: 'auto auto',
				gridTtemplateRows: '100%',
				position: 'relative',
			}}
		>
			<Sidebar />
			<Content />
		</Box >
	);
};
