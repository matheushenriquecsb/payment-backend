/* eslint-disable prettier/prettier */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
  } from 'typeorm';
  
  @Entity({ name: 'address' })
  export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'user_id', nullable: false })
    userId: number;
  
    @Column({ name: 'complement', nullable: true })
    complement: string;
  
    @Column({ name: 'number_address'})
    numberAddress: number;
   
    @Column({ name: 'cep', nullable: false })
    cep: string;
  
    @Column({ name: 'city_id', nullable: false })
    cityId: number;
  
    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
  }
  