const chiper = require('../../src/ciphers/chiper');

const DATA = {
    caesar: {
        encoding: {
            input: 'z',
            output: 'a',
            settings: {
                shift: 1,
                mode: 'encoding',
                mirrored: false,
            },
        },
        decoding: {
            input: 'a',
            output: 'z',
            settings: {
                shift: 1,
                mode: 'decoding',
                mirrored: false,
            },
        },
    },
    rot8: {
        encoding: {
            input: 'a',
            output: 'i',
            settings: {
                shift: 8,
                mode: 'encoding',
                mirrored: false,
            },
        },
        decoding: {
            input: 'i',
            output: 'a',
            settings: {
                shift: 8,
                mode: 'decoding',
                mirrored: false,
            },
        },
    },
    atbash: {
        encoding: {
            input: 'a',
            output: 'z',
            settings: {
                shift: null,
                mode: null,
                mirrored: true,
            },
        },
        decoding: {
            input: 'z',
            output: 'a',
            settings: {
                shift: null,
                mode: null,
                mirrored: true,
            },
        },
    },
    other: {
        input: 'йцукен',
        output: 'йцукен',
    },
};

describe('valid', () => {
    test('caesar encoding', async () => {
        const data = DATA.caesar.encoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });
    test('caesar decoding', async () => {
        const data = DATA.caesar.decoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });
    
    test('rot8 encoding', async () => {
        const data = DATA.rot8.encoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });
    test('rot8 decoding', async () => {
        const data = DATA.rot8.decoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });

    test('atbash encoding', async () => {
        const data = DATA.atbash.encoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });
    test('atbash decoding', async () => {
        const data = DATA.atbash.decoding;
        const settings = data.settings;

        const transform = chiper(settings.shift, settings.mode, settings.mirrored);
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });

    test('other', async () => {
        const data = DATA.other;

        const transform = chiper();
        transform.write(data.input);
        await expect(
            new Promise((resolve) => {
                transform.on('data', (data) => {
                    resolve(data.toString());
                });
            })
        ).resolves.toBe(data.output);
    });
});
