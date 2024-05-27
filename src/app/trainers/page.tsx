"use client";
import {useEffect} from "react";
import {getTrainers} from "@/clients/trainers.client";
import {useAppContext} from "@/context";
import TrainerCard from "@/components/TrainerCard/TrainerCard";

const TrainersPage = () => {
    const {trainers, setTrainers} = useAppContext();
    useEffect(() => {
        (async () => {
            const response = await getTrainers();
            setTrainers(response);
        })();
    }, []);
    return <>
        <h3>Trainers</h3>
        <>
            {trainers.map((trainer) => <TrainerCard {...trainer} key={trainer._id}/>)}
        </>
    </>;
}

export default TrainersPage;
