const assert = require('assert');
const fs = require('fs');
const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');

describe('bitmap header', () => {

    let buffer = null;
    beforeEach(() => {
        // TODO: read './test/test-bitmap.bmp' into buffer variable
        // Go ahead and use the "sync" version of the fs methods

        buffer = new Buffer(fs.readFileSync('./test/test-bitmap.bmp'));
        
    });

    it('has correct specs', () => {
        // TODO: read the docs to figure out what these values should be
        assert.ok(constants.PIXEL_OFFSET);
        assert.ok(constants.BITS_PER_PIXEL_OFFSET);
        assert.ok(constants.FILE_SIZE_OFFSET);
    });

    it('parses header data', () => {
        // TODO: use the constants to populate the following properties
        // on the BitmapHeader in its constructor.
        // These test values are correct for the supplied test-bitmap.bmp
        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
    });
});