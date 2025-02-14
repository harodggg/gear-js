import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Code } from './code.entity';

@Entity()
export class Meta {
  constructor(props: Partial<Meta>) {
    Object.assign(this, props);
  }

  @PrimaryColumn()
  public hash: string;

  @Column({ nullable: true })
  public hex: string;

  @OneToMany(() => Code, (_) => _.meta)
  public codes: Code[];

  @Column({ nullable: true })
  public hasState: boolean;
}
