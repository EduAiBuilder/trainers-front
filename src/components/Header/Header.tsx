import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { useAppContext } from '@/context';

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: 'blue',
		width: '100%',
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();
	const { user } = useAppContext();

	return (
		<AppBar position="static" className={classes.header}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					AI Trainer {user?.username}
				</Typography>
				<Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
			</Toolbar>
		</AppBar>
	);
}
