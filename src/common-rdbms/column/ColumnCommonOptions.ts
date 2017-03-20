/**
 * Column options specific to all column types.
 */
export interface ColumnCommonOptions {

    /**
     * Column name in the database.
     */
    name?: string;

    /**
     * Indicates if this column is a primary key.
     * Same can be achieved when @PrimaryColumn decorator is used.
     */
    primary?: boolean;

    /**
     * Specifies if column's value must be unique or not.
     */
    unique?: boolean;

    /**
     * Indicates if column's value can be set to NULL.
     */
    nullable?: boolean;

    /**
     * Default database value.
     */
    default?: any;

}
