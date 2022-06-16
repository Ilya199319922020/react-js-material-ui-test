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
				gridTemplateColumns: '1fr auto',
				gridTtemplateRows: '100%',
				height: '100vh',
				position: 'relative',
			}}
		>
			<Sidebar />
			<Content />
		</Box >
	);
};
