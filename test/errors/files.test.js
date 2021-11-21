const validFile = require('../../src/validFlags/validFile');

const FILES = {
    input: {
        valid: './test/errors/input.valid.txt',
        close: './test/errors/input.close.txt',
        nonexistent: './test/errors/input.nonexistent.txt',
    },
    output: {
        valid: './test/errors/output.valid.txt',
        close: './test/errors/output.close.txt',
        nonexistent: './test/errors/output.nonexistent.txt',
    },
};

describe('files errors', () => {
    test('valid input file', () => {
        const path = FILES.input.valid;
        expect(() => validFile(path)).not.toThrow();
    });
    test('close input file', () => {
        const path = FILES.input.close;
        expect(() => validFile(path)).toThrow(`There is no write access to the file ${path}`);
    });
    test('nonexistent input file', () => {
        const path = FILES.input.nonexistent;
        expect(() => validFile(path)).toThrow(`There is no file ${path}`);
    });

    test('valid output file', () => {
        const path = FILES.output.valid;
        expect(() => validFile(path)).not.toThrow();
    });
    test('close output file', () => {
        const path = FILES.output.close;
        expect(() => validFile(path)).toThrow(`There is no write access to the file ${path}`);
    });
    test('nonexistent output file', () => {
        const path = FILES.output.nonexistent;
        expect(() => validFile(path)).toThrow(`There is no file ${path}`);
    });
});