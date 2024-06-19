'use client';

import React from 'react';
import { createTrainer } from '@/clients/trainers.client';
import { useRouter } from 'next/navigation';
import TrainersSettingsForm from '@/components/TrainerSettingsForm/TrainersSettingsForm';

const NewTrainerPage: React.FC = () => {
	const router = useRouter();
	const handleSaveTrainer = async (trainer: { name: string; description: string; categories: string[] }) => {
		const response = await createTrainer(trainer);
		if (response?.id) {
			await router.push('/trainers');
		}
	};

	return <TrainersSettingsForm setSaveTrainer={handleSaveTrainer} />;
};

export default NewTrainerPage;
