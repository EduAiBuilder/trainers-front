import { Button, Grid, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import CategorySearchTerms from '@/components/CategoriesSearchTerms/CategoriesSearchTerms';

interface Props {
	setSaveTrainer: (trainer: { name: string; description: string; categories: Array<{ name: string; searchTerms?: string[] }> }) => void;
	name?: string;
	description?: string;
	categories?: Array<{ name: string; searchTerms?: string[] }>;
}

const TrainersSettingsForm = ({ name, description, categories, setSaveTrainer }: Props) => {
	const [category, setCategory] = useState<{ name: string; searchTerms?: string[] }>({ name: '' });
	const [newName, setNewName] = useState(name || '');
	const [newDescription, setNewDescription] = useState(description || '');
	const [newCategories, setNewCategories] = useState<Array<{ name: string; searchTerms?: string[] }>>(categories || []);

	const handleAddCategory = () => {
		if (newCategories && newCategories.length < 6 && !newCategories.includes(category)) {
			setNewCategories((prevState) => [...prevState, category]);
			setCategory({ name: '' });
		}
	};

	const handleSaveTrainer = async () => {
		setSaveTrainer({
			name: newName,
			description: newDescription,
			categories: newCategories,
		});
	};

	const handleSaveSearchTerms = (searchTerms: string[], categoryIndex: number) => {
		const updatedCategories = newCategories.map((category, index) => {
			if (index === categoryIndex) {
				return { ...category, searchTerms };
			}
			return category;
		});
		setNewCategories(updatedCategories);
	};

	const handleSaveCategory = (value: string) => {
		setCategory({ name: value });
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
				<TextField label="Add Category" value={category.name} onChange={(e) => handleSaveCategory(e.target.value)} sx={{ marginY: 2 }} />
				<Button variant="contained" color="primary" onClick={handleAddCategory}>
					<AddIcon />
				</Button>
			</Grid>
			<CategorySearchTerms categories={newCategories} handleSaveSearchTerms={handleSaveSearchTerms} />
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
