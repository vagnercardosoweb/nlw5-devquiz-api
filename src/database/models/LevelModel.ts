import { Optional } from 'sequelize';
import { Column, CreatedAt, DataType, DeletedAt, HasMany, Index, Model, Table, UpdatedAt } from 'sequelize-typescript';

import { QuestionModel } from '@database/models/QuestionModel';

export interface ILevelAttributes {
  readonly id: string;
  name: string;
  order: number | null;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

export type ILevelCreationAttributes = Optional<ILevelAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

@Table({ tableName: 'levels' })
export class LevelModel extends Model<ILevelAttributes, ILevelCreationAttributes> {
  @Index
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    unique: true,
  })
  public id: string;

  @Index
  @Column
  public name: string;

  @Index
  @Column
  public order: number;

  @Index
  @CreatedAt
  public created_at: Date;

  @Index
  @UpdatedAt
  public updated_at: Date;

  @Index
  @DeletedAt
  public deleted_at: Date | null;

  @HasMany(() => QuestionModel)
  public questions?: QuestionModel[];
}
