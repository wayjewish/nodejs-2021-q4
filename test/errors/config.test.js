const validFlags = require('../../src/validFlags/validFlags');

const INPUT = {
    flagDoubleConfig: ['-c', 'C1-C1-R0-A', '-c', 'C0'],
    flagDoubleInput: ['-i', './input.txt', '-i', './input.txt'],
    flagDoubleOutput: ['-o', './output.txt', '-o', './output.txt'],
    emptyValue: ['-i', './input.txt', '-o'],
    noConfig: [],
    invalid: ['-c','C1-C2-R3-R-A4-'],
};

describe('config errors', () => {
    test('Flag double config', () => {
        expect(() => validFlags(INPUT.flagDoubleConfig)).toThrow('Flag double config');
    });
    test('Flag double input', () => {
        expect(() => validFlags(INPUT.flagDoubleInput)).toThrow('Flag double input');
    });
    test('Flag double output', () => {
        expect(() => validFlags(INPUT.flagDoubleOutput)).toThrow('Flag double output');
    });
    test('Empty value', () => {
        expect(() => validFlags(INPUT.emptyValue)).toThrow('Empty value for the flag output');
    });
    test('The config is missing', () => {
        expect(() => validFlags(INPUT.noConfig)).toThrow('The config is missing');
    });
    test('Invalid config', () => {
        expect(() => validFlags(INPUT.invalid)).toThrow('Invalid config');
    });
});