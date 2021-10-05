import { Model } from 'sequelize';

/**
 * Interface that defines the properties that a User in our database can have.
 */
interface UserAttributes {
  username: string;
  password: string;
  phoneNumber: number;
  email: string;
  fullName: string;
  personalAddress: string;
}

/**
 * Type that defines the properties needed to create a User in our database.
 */
type UserCreationAttributes = Pick<UserAttributes, 'username' | 'password' | 'email' | 'phoneNumber' | 'email' | 'fullName' | 'personalAddress' >;

/**
 * Class that defines the properties and methods for a user.
 */
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  /**
   * Username of the user.
   */
  public username!: string;

  /**
   * Email of the user.
   */
  public email!: string;

  /**
   * Password of the user.
   */
  public password!: string;

  /**
   * Phone Number of the user.
   */
  public phoneNumber!: number;

  /**
   * Full Name of the user.
   */
  public fullName!: string;

  /**
   * Address of the user.
   */
  public personalAddress!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(120),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(90),
      allowNULL: false,
      unique: false,
    },
    phoneNumber: {
        type: DataTypes.NUMBER(11),
        allowNULL: true,
        unique: true,
    },
    personalAddress: {
        type: DataTypes.STRING(140),
        allowNULL: false,
        unique: false,
    },
    fullName: {
        type: DataTypes.STRING(60),
        allowNULL: false,
        unique: false,
    },    
  },
  {
    tableName: 'Users',
    sequelize,
  },
);

export default User;