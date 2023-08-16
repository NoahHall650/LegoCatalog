import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize, } from "sequelize";

export class Lego extends Model<InferAttributes<Lego>, InferCreationAttributes<Lego>>{
    declare id: number;
    declare name: string;
    declare imgUrl: string;
    declare setId: number;
    declare pieceCount: number;
    declare yearRelesed: Date;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function LegoFactory(sequelize: Sequelize) {
    Lego.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        setId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pieceCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        yearRelesed: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'lego',
        sequelize
    });
}