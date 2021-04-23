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

import { QuestionModel } from '@database/models/QuestionModel';

export interface IAnswerAttributes {
  readonly id: string;
  question_id: string;
  name: string;
  correct: boolean;
  points: number;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at: Date;
}

export type IAnswerCreationAttributes = Optional<
  IAnswerAttributes,
  'id' | 'created_at' | 'updated_at' | 'deleted_at'
>;

@Table({ tableName: 'answers' })
export class AnswerModel extends Model<
  IAnswerAttributes,
  IAnswerCreationAttributes
> {
  @Index
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    unique: true,
  })
  public id: string;

  @Index
  @Column
  @ForeignKey(() => QuestionModel)
  public question_id: string;

  @Index
  @Column
  public name: string;

  @Column
  public correct: boolean;

  @Column
  public points: number;

  @Index
  @CreatedAt
  public created_at: Date;

  @Index
  @UpdatedAt
  public updated_at: Date;

  @Index
  @DeletedAt
  public deleted_at: Date | null;

  @BelongsTo(() => QuestionModel)
  public question?: QuestionModel;
}
