import { CloseOutlined } from '@mui/icons-material';
import { Box, IconButton, Modal } from '@mui/material';
import React from 'react';

export const BasicModalOutline = ({
	open,
	onClose,
	children,
}: {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					width: {
						xs: '90vw',
						md: '46rem',
					},
					maxHeight: '90vh',
					boxSizing: 'border-box',
					overflow: 'auto',
					backgroundColor: 'white',
					padding: '2rem',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					borderRadius: '1rem',
					border: 'none',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					transition: 'all 0.3s ease-in-out',
					boxShadow: (theme) => theme.shadows[10],
					':focus-visible': {
						outline: 'none',
					},
				}}
			>
				<IconButton
					sx={{
						position: 'absolute',
						top: '1rem',
						right: '1rem',
						cursor: 'pointer',
					}}
					onClick={onClose}
				>
					<CloseOutlined />
				</IconButton>

				{children}
			</Box>
		</Modal>
	);
};
