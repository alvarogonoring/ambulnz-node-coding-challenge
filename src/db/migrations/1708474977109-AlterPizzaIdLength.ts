import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterPizzaIdLength1708474977109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'pizzas',
            'id',
            {
                name: 'id',
                type: 'varchar',
                length: '36',
                isPrimary: true
            } as TableColumn
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            'pizzas',
            'id',
            {
                name: 'id',
                type: 'varchar',
                isPrimary: true
            } as TableColumn
        );
    }

}
