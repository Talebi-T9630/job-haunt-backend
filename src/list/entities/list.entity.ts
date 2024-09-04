import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  jobTitle: string;

  @Column()
  jobLink: string;

  @Column()
  prefrence: string;

  @Column()
  qualify: string;

  @Column({ default: false })
  tailorResume: boolean;

  @Column({ default: false })
  tailorCoverLetter: boolean;

  @Column()
  dateApplied: Date;

  @Column()
  result: string;

}