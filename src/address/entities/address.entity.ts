/* eslint-disable prettier/prettier */

import { UserEntity } from 'src/users/entities/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity({ name: 'address' })
  export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'user_id', nullable: false })
    userId: number;
  
    @Column({ name: 'complement', nullable: true })
    complement: string;
  
    @Column({ name: 'number', nullable: false})
    number: number;
   
    @Column({ name: 'cep', nullable: false })
    cep: string;
  
    @Column({ name: 'city_id', nullable: false })
    cityId: number;
  
    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    @ManyToOne(() => UserEntity, (user) => user.addresses)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id'})
    user?: UserEntity;
  }
  