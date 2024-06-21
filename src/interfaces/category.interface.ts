import { SearchTermInterface } from '@/interfaces/search-term.interface';

export interface CategoryInterface {
	id: number;
	trainerId: number;
	name: string;
	description: string;
	searchTerms: SearchTermInterface[];
}
