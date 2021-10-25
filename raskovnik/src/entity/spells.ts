import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class spells{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    energyType:string;

    @Column()
    casting:number;

    @Column({ nullable: true })
    reaction:boolean;
}