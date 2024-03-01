import React from 'react';
import { Box } from '@mui/material';

import create, { GetState, SetState } from 'zustand';
const useStore = create();
export default ({ count, onClear }) => (
	<header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
		<div className='flex-grow'>Awesome Header B</div>
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-evenly',
			}}
		>
			{count}

			<button
				onClick={onClear}
				className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
			>
				Clear Cart
			</button>
		</Box>
	</header>
);
