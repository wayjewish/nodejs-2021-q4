const parsingFlags = require('../../src/validFlags/parsingFlags');
const parsingConfig = require('../../src/validFlags/parsingConfig');
const validFlags = require('../../src/validFlags/validFlags');

const DATA = {
    parsingFlags : {
        input: ['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'],
        output: {
            config: 'C1-C1-R0-A',
            input: './input.txt',
            output: './output.txt'
        },
    },
    parsingConfig: {
        input: 'C0-C1-R0-R1-A',
        output: [
            { chiper: 'C', decoding: true },
            { chiper: 'C', encoding: true },
            { chiper: 'R', decoding: true },
            { chiper: 'R', encoding: true },
            { chiper: 'A' }
        ],
    },
    validFlags: {
        input: ['-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'],
        output: {
            config: [
                { chiper: 'C', encoding: true },
                { chiper: 'C', encoding: true },
                { chiper: 'R', decoding: true },
                { chiper: 'A' }
            ],
            input: './input.txt',
            output: './output.txt'
        },
    },
};

describe('valid', () => {
    test('parsingFlags', () => {
        const result = parsingFlags(DATA.parsingFlags.input);
        expect(result).toEqual(DATA.parsingFlags.output);
    });
    test('parsingConfig', () => {
        const result = parsingConfig(DATA.parsingConfig.input);
        expect(result).toEqual(DATA.parsingConfig.output);
    });
    test('validFlags', () => {
        const result = validFlags(DATA.validFlags.input);
        expect(result).toEqual(DATA.validFlags.output);
    });
});
