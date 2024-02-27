import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1708558186036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        length: '36',
                        isPrimary: true
                    },
                    {
                        name: 'order_number',
                        type: 'int',
                        isGenerated: true,
                        isUnique: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'pizzas',
                        type: 'json'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }

}
