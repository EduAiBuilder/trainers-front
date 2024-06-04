import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { ImageInterface } from '@/interfaces/image.interface';

interface Props {
	images: ImageInterface[];
}

const TrainersMenuImages = ({ images }: Props) => {
	return (
		<ImageList sx={{ width: 950 }} cols={10} rowHeight={124}>
			{images.map((image) => (
				<ImageListItem key={image.thumbnailUrl}>
					<img srcSet={`${image.thumbnailUrl}`} src={`${image.thumbnailUrl}`} alt={image.initCategory} loading="lazy" />
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default TrainersMenuImages;
