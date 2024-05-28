import { TrainerInterface } from '@/interfaces/trainer.interface';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';

const TrainerCard = ({ name, _id, categories, description, updatedAt }: TrainerInterface) => {
	return (
		<Card sx={{ padding: 2 }}>
			<CardHeader title={name} subheader={categories.join(', ')} />
			<CardContent>
				<Typography variant="body1">{description}</Typography>
				<Box display="flex" justifyContent="end">
					<Typography variant="body1">Last update:</Typography>
					<Typography variant="body1">{updatedAt}</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TrainerCard;
