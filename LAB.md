Bitmap Transformer
====

## Description

For this assignment you will be working solo or in pairs building a bitmap transformer class.

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format) 
describes the byte specification of a "windows bitmap file.":
* We'll be working the simplest version, meaning no compression
* The sample files fit "perfectly" in terms of byte size per row

The core functionality is to pass a buffer to the bitmap transformer, and then apply
one or more color transforms to the image.

This will require the use of node `Buffer` in order to manipulate binary data, **have the docs open!**

This lab is highly structured and there are tests to guide you:

1. Start with the tests in `bitmap-header.test.js`. This will require you to find
the location of the needed data using the wikipedia article.
   1. The first test requires that you have the right constants defined. You will need to figure these
   out from the wikipedia article
   2. The second test requires that you create a `BitmapHeader` class that finds the information
  in the bitmap header and structures it as properties of the `bitmapHeader` instance.
2. Create _at least_ three transformation functions, following the tests in `transformers.test.js`.
  * Invert
  * Grayscale - see [this article](https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/) 
  for different ways to calculate
  * Another transform
    * Different grayscale
    * (red or green or blue) scale the colors (hint: same as grayscale but only multiply one of the colors)

3. The test in `bitmap-transformer.test.js` requires you to integrate header and transformations
using a `BitmapHeader` class. The test is a pinning, or snapshot test, and a pre-converted standard is provided
for the inverted transformer

### Rubric:
* Bitmap Header Tests Pass *2pts*
* Transform Tests Pass *2pts*
* Bitmap Transformer Tests Pass *3pts*
* Clean Code *3pts*

## Bonus

* Adapt the transformer to work for the non-palleted bitmap image

## Super Bonus

* Handle other bitmaps (find on internet) by accounting for non-perfect rows
