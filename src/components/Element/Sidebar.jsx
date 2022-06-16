import React, { useState } from 'react';
import h from '../../assets/b.png';
import user from '../../assets/user.png';
import account from '../../assets/account.png';
import basket from '../../assets/basket.png';
import briefcase from '../../assets/briefcase.png';
import cn from '../../assets/cn.png';
import arrow from '../../assets/arrow.png';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

function Sidebar() {
	const [btnMain, setBtnMain] = useState(null);
	const [btnFooter, setBtnFooter] = useState(null);

	const handleBtnMain = (event, newBtnMain) => {
		setBtnMain(newBtnMain);
	};
	const handleBtnFooter = (event, newBtnFooter) => {
		setBtnFooter(newBtnFooter);
	};

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
			<Box>
				<img src={h} width='50px' />
			</Box>
			<Box>
				<ToggleButtonGroup
					value={btnMain}
					exclusive
					onChange={handleBtnMain}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
					}}
				>
					<ToggleButton
						value={'1'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							}
						}}
					>
						<img src={user} width='30px' />
					</ToggleButton>
					<ToggleButton
						value={'2'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							}
						}}
					>
						<img src={account} width='30px' />
					</ToggleButton>
					<ToggleButton
						value={'3'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							}
						}}
					>
						<img src={basket} width='30px' />
					</ToggleButton>
					<ToggleButton
						value={'4'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							}
						}}
					>
						<img src={briefcase} width='30px' />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box>
				<ToggleButtonGroup
					value={btnFooter}
					exclusive
					onChange={handleBtnFooter}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
					}}
				>
					<ToggleButton
						value={'5'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							},

						}}>
						<img src={cn} width='30px' />
					</ToggleButton>
					<ToggleButton
						value={'6'}
						sx={{
							':hover': {
								backgroundColor: '#956cbd',
								color: '#3c52b2',
							}
						}}
					>
						<img src={arrow} width='30px' />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Box>
	);
};

export default Sidebar;