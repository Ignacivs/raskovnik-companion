import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class items{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    ego: boolean;

    @Column()
    legendary: boolean;

    @Column()
    damage: string;
}