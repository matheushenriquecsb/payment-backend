/* eslint-disable prettier/prettier */

import { AddressEntity } from 'src/address/entities/address.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, 
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'phone'})
  phone: string;
 
  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'type_user', nullable: false })
  typeUser: number;

  @CreateDateColumn({ name: 'created_at'})
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses?: AddressEntity[]  
}
