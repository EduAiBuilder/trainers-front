'use client';
import { useEffect } from 'react';
import { getTrainers } from '@/clients/trainers.client';
import { useAppContext } from '@/context';
import TrainerCard from '@/components/TrainerCard/TrainerCard';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

const TrainersPage = () => {
	const router = useRouter();
	const { trainers, setTrainers } = useAppContext();
	useEffect(() => {
		(async () => {
			const response = await getTrainers();
			if (response) {
				setTrainers(response);
			} else {
				setTrainers([]);
			}
		})();
	}, []);
	return (
		<>
			<h3>Trainers</h3>
			<>
				{trainers?.map((trainer) => (
					<TrainerCard {...trainer} key={trainer.id} />
				))}
			</>
			<IconButton
				onClick={async () => {
					await router.push('/trainers/new');
				}}
			>
				Create Trainer
			</IconButton>
		</>
	);
};

export default TrainersPage;
