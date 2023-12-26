import { DealerShip } from "src/dealer-ship/entities/dealer-ship.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAT: Date

    @CreateDateColumn()
    updatedAt: Date

    @OneToMany(() => DealerShip, (dealerShip) => dealerShip.creator)
    dealerShipsCreator: DealerShip[]

    @OneToMany(() => DealerShip, (dealerShip) => dealerShip.editor)
    dealerShipsEditor: DealerShip[]
}
