import { Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Index,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { LevelModel } from '@database/models/LevelModel';

export interface IQuestionAttributes {
  readonly id: string;
  level_id: string;
  name: string;
  icon_name: string | null;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

export type IQuestionCreationAttributes = Optional<
  IQuestionAttributes,
  'id' | 'created_at' | 'updated_at' | 'deleted_at'
>;

@Table({ tableName: 'questions' })
export class QuestionModel extends Model<IQuestionAttributes, IQuestionCreationAttributes> {
  @Index
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    unique: true,
  })
  public id: string;

  @Index
  @Column
  @ForeignKey(() => LevelModel)
  public level_id: string;

  @Index
  @Column
  public name: string;

  @Column
  public icon_name: string;

  @Index
  @CreatedAt
  public created_at: Date;

  @Index
  @UpdatedAt
  public updated_at: Date;

  @Index
  @DeletedAt
  public deleted_at: Date | null;

  @BelongsTo(() => LevelModel)
  public level?: LevelModel;
}
