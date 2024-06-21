import { CategoryInterface } from '@/interfaces/category.interface';

export interface TrainerInterface {
	id?: number;
	name: string;
	description: string;
	createdAt?: string;
	updatedAt?: string;
	userId: number;
	categories: CategoryInterface[];
}
