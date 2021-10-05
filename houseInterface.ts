import { Model } from 'sequelize';

/**
 * Interface that defines the properties that a House in our database can have.
 */
interface HouseAttributes {
  numberOfMembers: number;
  houseAddress: string;
  houseNickname: string;
}

/**
 * Type that defines the properties needed to create a House in our database.
 */
type HouseCreationAttributes = Pick<HouseAttributes, 'numberOfMembers' | 'houseAddress' | 'houseNickname' | >;

/**
 * Class that defines the properties and methods for a house.
 */
class House extends Model<HouseAttributes, HouseCreationAttributes> implements HouseAttributes {
  /**
   * Number of members in the house.
   */
  public numberOfMembers!: number;

  /**
   * Address of the house.
   */
  public houseAddress!: string;

  /**
   * Nickname for the house.
   */
  public houseNickname!: string;

}

House.init(
  {
    numberOfMembers: {
        type: DataTypes.NUMBER(20),
        allowNull: false,
        unique: false,
    },
    houseAddress: {
        type: DataTypes.STRING(140),
        primaryKey: true,
        unique: false,
        allowNull: false,
    },
    houseNickname: {
        type: DataTypes.STRING(100),
        unique: false,
        allowNULL: false,
    },
  },
  {
    tableName: 'Houses',
    sequelize,
  },
);

export default House;