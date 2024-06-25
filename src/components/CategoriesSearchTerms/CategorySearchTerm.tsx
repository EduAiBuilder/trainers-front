import { Box, Button, Chip, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

interface Props {
	name: string;
	handleRemoveSearchTerm: (term: string) => void;
	handleAddSearchTerm: (term: string) => void;
	searchTerms?: string[];
}

const CategorySearchTerm = ({ name, handleRemoveSearchTerm, searchTerms, handleAddSearchTerm }: Props) => {
	const [term, setTerm] = React.useState('');

	return (
		<Paper key={name} sx={{ p: 2, mb: 2 }}>
			<Typography variant="h6">{name}</Typography>
			<Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
				<TextField
					fullWidth
					label="Add search term"
					variant="outlined"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && handleAddSearchTerm(term)}
				/>
				<Button variant="contained" color="primary" onClick={() => handleAddSearchTerm(term)} sx={{ ml: 1, minWidth: 'auto' }}>
					<AddIcon />
				</Button>
			</Box>
			<Box sx={{ mt: 1 }}>
				{searchTerms?.map((term, index) => (
					<Chip
						key={index}
						label={term}
						onDelete={() => {
							handleRemoveSearchTerm(term);
							setTerm('');
						}}
						sx={{ m: 0.5 }}
					/>
				))}
			</Box>
		</Paper>
	);
};

export default CategorySearchTerm;
