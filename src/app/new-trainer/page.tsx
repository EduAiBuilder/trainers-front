'use client';

import React, {useState} from 'react';
import {TextField, Button, List, ListItem, ListItemText, Typography, Grid} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NewTrainerPage: React.FC = () => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [categories, setCategories] = useState<string[]>([]);

    const handleAddCategory = () => {
        if (category && categories.length < 6 && !categories.includes(category)) {
            setCategories([...categories, category]);
            setCategory('');
        }
    };

    const handleDownloadImages = () => {
        // Add logic to download images
    };

    const handleSaveCategories = () => {
        // Add logic to download images
    };

    return (
        <Grid sx={{padding: 2}} alignItems='center' justifyContent='center' container>
            <Grid container alignItems='center' item justifyContent='center' direction='column'>
                <Typography variant="h4">New Trainer</Typography>
                <TextField
                    label="Trainer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{marginY: 2}}
                />
                <Typography variant="body1">Add categories to your image classifier</Typography>
            </Grid>

            <Grid container alignItems='center' item justifyContent='center'>
                <TextField
                    label="Add Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    sx={{marginY: 2}}
                />
                <Button variant="contained" color="primary" onClick={handleAddCategory}>
                    <AddIcon/>
                </Button>
            </Grid>

            <List>
                {categories.map((cat, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={cat}/>
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleDownloadImages}
                    >
                        Save Categories
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDownloadImages}
                    >
                        Download Images
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewTrainerPage;
