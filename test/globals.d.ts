/**
 * @Update 2022 - This has logic has been update to support newer Node.js versions
 * that don't have NodeJS as a global type
 */
// https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
declare global {
    //eslint-disable-next-line no-var
    var testRequest: import('supertest').SuperTest<import('supertest').Test>;
}

export { };