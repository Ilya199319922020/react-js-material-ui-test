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
				gridTemplateColumns: 'minmax(180px, 180px) auto',
				gridTtemplateRows: ' 1fr',
				width: '100%',
				height: '100vh',
			}}
		>
			<Sidebar/>
			<Content/>
		</Box >
	);
};
