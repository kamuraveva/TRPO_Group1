import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('dealerShip')
export class DealerShip {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    vehicle_brand: string

    @Column()
    brand_model: string

    @Column()
    vin: string

    @Column()
    year_of_manufacture: string

    @Column()
    color: string

    @Column('decimal', { name: 'price', nullable: false, precision: 15, scale: 2 })
    price: number

    @Column({name: 'creator_id'})
    creatorId: number

    @ManyToOne(() => User, (user) => user.dealerShipsCreator) 
    @JoinColumn({name: 'creator_id'})
    creator: User

    @Column({name: 'editor_id'})
    editorId: number

    @ManyToOne(() => User, (user) => user.dealerShipsEditor) 
    @JoinColumn({name: 'editor_id'})
    editor: User
}
