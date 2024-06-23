import { TrainerInterface } from '@/interfaces/trainer.interface';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TrainersMenuImages from '@/components/TrainersMenuImages/TrainersMenuImages';
import { useEffect, useState } from 'react';
import { ImageInterface } from '@/interfaces/image.interface';
import { getTrainerImages } from '@/clients/trainers.client';

const TrainerCard = ({ name, id, categories, description, updatedAt }: TrainerInterface) => {
	const [images, setImages] = useState<ImageInterface[]>([]);
	useEffect(() => {
		if (!id) {
			return;
		}
		(async () => {
			const categoriesIds = categories.map((category) => category.id);
			const response = await getTrainerImages(id, categoriesIds, 1, 10, true);
			if (response) {
				setImages(response);
			}
		})();
	}, []);
	return (
		<Card sx={{ padding: 2 }}>
			<CardHeader title={name} subheader={categories?.map((category) => category.name).join(', ')} />
			<TrainersMenuImages images={images} />
			<CardContent>
				<Typography variant="body1">{description}</Typography>
				<Box display="flex" justifyContent="end">
					<Typography variant="body1">Last update:</Typography>
					<Typography variant="body1">{updatedAt}</Typography>
				</Box>
				<CardActions>
					<Button size="small">Update</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default TrainerCard;
