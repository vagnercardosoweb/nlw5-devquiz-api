import { Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';

import { AnswerModel } from '@database/models/AnswerModel';
import { UserModel } from '@database/models/UserModel';

export interface IAnsweredAttributes {
  readonly id: string;
  user_id: string;
  answer_id: string;
  correct: boolean;
  points: number;
  created_at: Date;
}

export type IAnsweredCreationAttributes = Optional<IAnsweredAttributes, 'id'>;

@Table({ tableName: 'answered', paranoid: false, timestamps: false })
export class AnsweredModel extends Model<
  IAnsweredAttributes,
  IAnsweredCreationAttributes
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
  @ForeignKey(() => UserModel)
  public user_id: string;

  @Index
  @Column
  @ForeignKey(() => AnswerModel)
  public answer_id: string;

  @Column
  public correct: boolean;

  @Column
  public points: number;

  @Index
  @CreatedAt
  public created_at: Date;

  @BelongsTo(() => UserModel)
  public user?: UserModel;

  @BelongsTo(() => AnswerModel)
  public answer?: AnswerModel;
}
