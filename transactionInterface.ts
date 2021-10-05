import { Model } from 'sequelize';

/**
 * Interface that defines the properties that a Transaction in our database can have.
 */
interface TransactionAttributes {
  itemCategory: string;
  itemName: string;
  buyer: string;
  cost: number;
  contributors: string;
  purchaseDate: Date;
  buyerNotes: string;
}

/**
 * Type that defines the properties needed to create a Transaction in our database.
 */
type TransactionCreationAttributes = Pick<TransactionAttributes, 'itemCategory' | 'itemName' | 'buyer' | 'cost' | 'contributors' | 'purchaseDate' | 'buyerNotes' >;

/**
 * Class that defines the properties and methods for a transaction.
 */
class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
  /**
   * Category that the item belongs to.
   */
  public itemCategory!: string;

  /**
   * Name of the item.
   */
  public itemName!: string;

  /**
   * Member who purchased the item.
   */
   public buyer!: string;
   
   /**
   * Cost of the item.
   */
  public cost!: number;

  /**
   * Additional people who are paying for the item.
   */
   public contributors!: string;

   /**
   * Date the item was purchased.
   */
  public purchaseDate!: Date;

  /**
   * Additional notes from the buyer.
   */
   public buyerNotes!: string;
}

Transaction.init(
  {
    itemCategory: {
        type: DataTypes.STRING(60),
        unique: false,
        allowNull: false,
      },
    itemName: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        unique: false,
        allowNull: false,
    },
    buyer: {
        type: DataTypes.STRING(120),
        unique: false,
        allowNull: false,
    },
    cost: {
        type: DataTypes.NUMBER(10),
        unique: false,
        allowNull: false,
    },
    contributors: {
        type: DataTypes.STRING(200),
        unique: false,
        allowNull: true,
    },
    purchaseDate: {
        type: DataTypes.DATE(60),
        unique: false,
        allowNull: false,
    },
    buyerNotes: {
        type: DataTypes.STRING(300),
        unique: false,
        allowNull: true,
      },
  },
  {
    tableName: 'Transactions',
    sequelize,
  },
);

export default Transaction;