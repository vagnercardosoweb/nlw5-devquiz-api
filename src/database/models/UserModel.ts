import { Optional } from 'sequelize';
import {
  BeforeSave,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Index,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import Jwt from '@src/helpers/Jwt';
import Password from '@src/helpers/Password';

import { AnsweredModel } from '@database/models/AnsweredModel';

export interface IUserAttributes {
  readonly id: string;
  name: string;
  email: string;
  password?: string;
  readonly created_at: Date;
  readonly update_at: Date;
  readonly deleted_at: Date;
}

export type IUserCreationAttributes = Optional<
  IUserAttributes,
  'id' | 'created_at' | 'update_at' | 'deleted_at'
>;

@Table({ tableName: 'users' })
export class UserModel extends Model<IUserAttributes, IUserCreationAttributes> {
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

  @Index({ unique: true })
  @Column({ unique: true })
  public email: string;

  @Column
  public password: string;

  @Index
  @CreatedAt
  public created_at: Date;

  @Index
  @UpdatedAt
  public updated_at: Date;

  @Index
  @DeletedAt
  public deleted_at: Date;

  @BeforeSave
  static async hashedPassword(row: UserModel) {
    if (row.changed('password')) {
      row.password = await Password.hash(row.password);
    }
  }

  async verifyPassword(password: any): Promise<boolean> {
    return Password.verify(password, this.password);
  }

  async generateJwtToken(): Promise<string> {
    return Jwt.encode({ sub: this.id });
  }

  @HasMany(() => AnsweredModel)
  public answered?: AnsweredModel[];
}
