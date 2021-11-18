const { Transform } = require('stream');

const arrCharsAlphabet = {
  en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  EN: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};

const chiper = (shift, mode, mirrored = false) => {
  const transformClass = new Transform({
    transform(chunk, enc, cb) {
      let result = [];
      const chunkStringified = chunk.toString().trim();
      const arrChunk = chunkStringified.split('');

      arrChunk.forEach(char => {
        let alphabet = null;
        Object.keys(arrCharsAlphabet).forEach(key => {
          const arrChars = arrCharsAlphabet[key];
          if (arrChars.includes(char)) alphabet = [...arrChars];
        });

        if (alphabet) {
          let keyChar = alphabet.indexOf(char);
          if (mode === 'encoding') keyChar = keyChar + shift;
          if (mode === 'decoding') keyChar = keyChar - shift;
          if (keyChar < 0) keyChar = keyChar + alphabet.length;
          if (keyChar > alphabet.length - 1) keyChar = keyChar - alphabet.length;
          if (mirrored) alphabet.reverse();

          result.push(alphabet[keyChar]);
        } else {
          result.push(char);
        }
      });

      this.push(result.join(''));
      cb();
    }
  });

  return transformClass;
};

module.exports = chiper;
