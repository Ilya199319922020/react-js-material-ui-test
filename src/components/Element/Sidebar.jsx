import React from 'react';
import h from '../../assets/b.png';
import user from '../../assets/user.png';
import account from '../../assets/account.png';
import basket from '../../assets/basket.png';
import briefcase from '../../assets/briefcase.png';
import cn from '../../assets/cn.png';
import arrow from '../../assets/arrow.png';
import { Box, Button } from '@mui/material';

function Sidebar() {
	return (
		<Box
			sx={{
				background: "linear-gradient(#472469, #aa75d9)",
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'start',
				paddingLeft: '25px',
				width: '180px',
				position: 'fixed',
				minHeight: '100%',
				top: '0',
				left: '0',
			}}
		>
			<div>
				<img src={h} width='50px' />
			</div>
			<div>
				<ul>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}
						>
							<img src={user} width='30px' />
						</Button>
					</li>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}
						>
							<img src={account} width='30px' />
						</Button>
					</li>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}
						>
							<img src={basket} width='30px' />
						</Button>
					</li>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}>
							<img src={briefcase} width='30px' />
						</Button>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}>
							<img src={cn} width='30px' />
						</Button>
					</li>
					<li>
						<Button
							sx={{
								':hover': {
									backgroundColor: '#956cbd',
									color: '#3c52b2',
								}
							}}
						>
							<img src={arrow} width='30px' />
						</Button>
					</li>
				</ul>
			</div>
		</Box>
	);
};

export default Sidebar;