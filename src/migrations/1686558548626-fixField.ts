import { MigrationInterface, QueryRunner } from "typeorm";

export class FixField1686558548626 implements MigrationInterface {
    name = 'FixField1686558548626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE blog RENAME COLUMN tilte TO title`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE blog RENAME COLUMN title TO tilte`);
    }

}
