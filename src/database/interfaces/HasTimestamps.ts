// import { Exclude } from 'class-transformer';
import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class HasTimestamps {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
