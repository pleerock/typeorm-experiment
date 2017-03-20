import {
    AllColumnType,
    SimpleColumnType,
    WithLengthColumnType,
    WithTimeColumnType,
    NumericColumnType,
    EnumColumnType
} from "../column/ColumnPostgresTypes";
import {ColumnCommonOptions} from "../../common-rdbms/column/ColumnCommonOptions";
import {ColumnWithLengthOptions} from "../../common-rdbms/column/ColumnWithLengthOptions";
import {ColumnTimeOptions} from "../../common-rdbms/column/ColumnTimeOptions";
import {ColumnEnumOptions} from "../../common-rdbms/column/ColumnEnumOptions";
import {ColumnNumericOptions} from "../../common-rdbms/column/ColumnNumericOptions";
import {MetadataReader} from "../metadata/MetadataReader";
import {ColumnPostgresOptions} from "../column/ColumnPostgresOptions";

/**
 * Column decorator is used to mark a specific class property as a table column. Only properties decorated with this
 * decorator will be persisted to the database when entity be saved.
 */
export function Column(): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(options: { type?: AllColumnType } & ColumnPostgresOptions & ColumnCommonOptions & ColumnWithLengthOptions & ColumnTimeOptions & ColumnNumericOptions & ColumnEnumOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(type: SimpleColumnType, options?: ColumnCommonOptions & ColumnPostgresOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(type: WithLengthColumnType, options?: ColumnCommonOptions & ColumnPostgresOptions & ColumnWithLengthOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(type: WithTimeColumnType, options?: ColumnCommonOptions & ColumnPostgresOptions & ColumnTimeOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(type: NumericColumnType, options?: ColumnCommonOptions & ColumnPostgresOptions & ColumnNumericOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(type: EnumColumnType, options?: ColumnCommonOptions & ColumnPostgresOptions & ColumnEnumOptions): Function;

/**
 * Column decorator is used to mark a specific class property as a table column.
 * Only properties decorated with this decorator will be persisted to the database when entity be saved.
 */
export function Column(typeOrOptions?: AllColumnType|Object, options?: Object): Function {
    return function (object: Object, propertyName: string) {
        MetadataReader.registerColumn({
            object: object,
            propertyName: propertyName,
            columnType: typeof typeOrOptions === "string" ? typeOrOptions : undefined,
            columnOptions: options,
        });
    };
}
