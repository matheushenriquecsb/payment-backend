/* eslint-disable prettier/prettier */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
  } from 'typeorm';
  
  @Entity({ name: 'city' })
  export class CityEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'state_id', nullable: false })
    stateId: string;
  
    @Column({ name: 'name', nullable: false })
    name: string;
  
    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
  }
  