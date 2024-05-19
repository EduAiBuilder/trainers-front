'use client';

import React, { useState } from 'react';
import {TextField, Button, List, ListItem, ListItemText, Typography, Box, Grid} from '@mui/material';
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

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4">New Trainer</Typography>
            <TextField
                label="Trainer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginY: 2 }}
            />
            <Typography variant="body1">Add categories to your image classifier</Typography>
            <Grid container alignItems='center'>
                <TextField
                    label="Add Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    sx={{ marginY: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleAddCategory}>
                    <AddIcon />
                </Button>
            </Grid>

            <List>
                {categories.map((cat, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={cat} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="secondary" onClick={handleDownloadImages}>
                Download Images
            </Button>
        </Box>
    );
};

export default NewTrainerPage;
