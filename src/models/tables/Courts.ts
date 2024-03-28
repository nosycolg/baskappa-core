import { DataTypes, Sequelize } from 'sequelize';

export default function Courts(sequelize: Sequelize) {
  const Courts = sequelize.define('courts', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // coordinates: {
    //   type: DataTypes.JSON,
    //   allowNull: true,
    // }
  }
  );

  return Courts;
}