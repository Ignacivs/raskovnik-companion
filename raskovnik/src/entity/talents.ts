import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class talents{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    requerments: string;

    @Column()
    type: string;

    @Column()
    actionCost: number;
}