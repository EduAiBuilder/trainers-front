import React from 'react';
import { Box } from '@mui/material';
import CategorySearchTerm from '@/components/CategoriesSearchTerms/CategorySearchTerm';

interface CategorySearchTermsProps {
	categories: Array<{ name: string; searchTerms?: string[] }>;
	handleSaveSearchTerms: (searchTerms: string[], categoryIndex: number) => void;
}

const CategorySearchTerms: React.FC<CategorySearchTermsProps> = ({ categories, handleSaveSearchTerms }) => {
	const handleAddSearchTerm = (term: string, index: number) => {
		const category = categories.find((_, key) => index === key);
		if (!category) {
			return;
		}
		if (category.searchTerms?.includes(term)) {
			return;
		}
		const newSearchTerms = category?.searchTerms ? [...category?.searchTerms, term] : [term];
		handleSaveSearchTerms(newSearchTerms, index);
	};

	const handleRemoveSearchTerm = (termToRemove: string, index: number) => {
		const category = categories.find((_, key) => index === key);
		if (!category?.searchTerms) {
			return;
		}
		const newSearchTerms = category.searchTerms.filter((term) => term !== termToRemove);
		handleSaveSearchTerms(newSearchTerms, index);
	};

	return (
		<Box sx={{ mt: 2 }}>
			{categories.map(({ name, searchTerms }, index) => (
				<CategorySearchTerm
					key={name}
					name={name}
					searchTerms={searchTerms}
					handleAddSearchTerm={(term) => handleAddSearchTerm(term, index)}
					handleRemoveSearchTerm={(term) => handleRemoveSearchTerm(term, index)}
				/>
			))}
		</Box>
	);
};

export default CategorySearchTerms;
