import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuizControlStore } from './controlers';
// eslint-disable-next-line no-restricted-imports

import { BasicModalOutline } from './basicModalOutline';

import { Box, Button, Typography } from '@mui/material';

export const FinishSharpenUpModal = ({
	open,
	onClose: handleAssessmentClose,
	submissionResponse,
}: {
	open: boolean;
	onClose: () => void;
	y;
	submissionResponse: any;
}) => {
	const navigate = useNavigate();
	const setQuizCompleted = useQuizControlStore(
		(state) => state.setQuizCompleted
	);
	const isQuizControlDisabled = useQuizControlStore(
		(state) => state.isQuizControlDisabled
	);
	const setSwitchActiveTab = useQuizControlStore(
		(state) => state.setSwitchActiveReportsTab
	);
	const [activeTab, setActiveTab] = React.useState<'time' | 'results'>('time');

	const goToViewResults = () => {
		setActiveTab('results');
	};
	const goToTimeIsUp = () => {
		setActiveTab('time');
	};

	const onClose = () => {
		setQuizCompleted(true);
		handleAssessmentClose();
		if (!isQuizControlDisabled) navigate('/');
	};

	useEffect(() => {
		setSwitchActiveTab((tab: 'time' | 'results') => {
			if (tab === 'time') {
				goToTimeIsUp();
			} else {
				goToViewResults();
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!open) return null;
	return (
		<BasicModalOutline open={open} onClose={onClose}>
			<Box>
				<Typography> modal</Typography>
			</Box>
		</BasicModalOutline>
	);
};
