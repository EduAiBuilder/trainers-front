import {TrainerInterface} from "@/interfaces/trainer.interface";
import {Card, CardContent, CardHeader} from "@mui/material";


const TrainerCard = ({ name, _id, categories }: TrainerInterface) => {
    return (
        <Card>
            <CardHeader title={name} subheader={categories.join(', ')} />
            <CardContent>
                {_id}
            </CardContent>
        </Card>

    );
};


export default TrainerCard;
