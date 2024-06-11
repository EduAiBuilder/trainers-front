import { Button, Grid, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

interface Props {
	setSaveTrainer: (trainer: { name: string; description: string; categories: string[] }) => void;
	name?: string;
	description?: string;
	categories?: string[];
}

const TrainersSettingsForm = ({ name, description, categories, setSaveTrainer }: Props) => {
	const [category, setCategory] = useState('');
	const [newName, setNewName] = useState(name || '');
	const [newDescription, setNewDescription] = useState(description || '');
	const [newCategories, setNewCategories] = useState<string[]>(categories || []);

	const handleAddCategory = () => {
		if (newCategories && newCategories.length < 6 && !newCategories.includes(category)) {
			setNewCategories((prevState) => [...prevState, category]);
			setCategory('');
		}
	};

	const handleSaveTrainer = async () => {
		setSaveTrainer({
			name: newName,
			description: newDescription,
			categories: newCategories,
		});
	};

	return (
		<Grid sx={{ padding: 2 }} alignItems="center" justifyContent="center" container>
			<Grid container alignItems="center" item justifyContent="center" direction="column">
				<Typography variant="h4">New Trainer</Typography>
				<TextField label="Trainer Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
				<TextField label="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} sx={{ marginY: 2 }} />
				<Typography variant="body1">Add categories to your image classifier</Typography>
			</Grid>

			<Grid container alignItems="center" item justifyContent="center">
				<TextField label="Add Category" value={category} onChange={(e) => setCategory(e.target.value)} sx={{ marginY: 2 }} />
				<Button variant="contained" color="primary" onClick={handleAddCategory}>
					<AddIcon />
				</Button>
			</Grid>
			<Typography variant="body1">{newCategories?.join(', ')}</Typography>
			<Grid container spacing={2} justifyContent="center">
				<Grid item>
					<Button variant="contained" color="primary" onClick={handleSaveTrainer}>
						Save
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default TrainersSettingsForm;
