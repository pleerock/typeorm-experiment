/**
 * Column options specific to all column types.
 */
export interface ColumnPostgresOptions {

    /**
     * Column comment.
     *
     * @deprecated database specific
     */
    comment?: string;

    /**
     * @deprecated database specific
     */
    array?: boolean;

    /**
     * @deprecated database specific
     */
    arrayDeepness?: number;

}
