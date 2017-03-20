/**
 * Column options for enum-typed columns.
 */
export interface ColumnTimeOptions {

    /**
     * Indicates if this date column will contain a timezone.
     */
    timezone?: boolean;

    /**
     * Indicates if date object must be stored in a given date's timezone.
     * By default date is saved in UTC timezone.
     * Works only with "timestamp" columns.
     */
    localTimezone?: boolean;

}