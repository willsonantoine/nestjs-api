import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_type')
export class UserTypeModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ default: null, type: 'longtext' })
  description: string;

  @Column({ default: false })
  isPublic: boolean;
}