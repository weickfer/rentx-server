import { v4 as uuid } from 'uuid'
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  // @Column()
  // username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  driver_license: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}