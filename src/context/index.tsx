'use client';

import React, { createContext, useContext, useState } from 'react';
import { UserInterface } from '@/interfaces/user.interface';
import { TrainerInterface } from '@/interfaces/trainer.interface';

interface AppContextInterface {
	user: UserInterface;
	setUser: (user: UserInterface) => void;
	trainers: TrainerInterface[];
	setTrainers: (trainers: TrainerInterface[]) => void;
}

const AppContext = createContext<AppContextInterface>(null as any);

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserInterface>(null as any);
	const [trainers, setTrainers] = useState<TrainerInterface[]>([]);

	return <AppContext.Provider value={{ user, setUser, trainers, setTrainers }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	return useContext(AppContext);
};
