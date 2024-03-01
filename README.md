# WebP to PNG Converter

This Node.js script converts WebP images in the `src` directory to PNG format and saves them in the `dist` directory.

## Environment

Node.js: 18.19.0

## Installation

Install dependencies by running the following command:

``` bash
yarn install
```

## Usage

1. Place your WebP images in the `src` directory.
2. Run the script by executing the following command:

``` bash
yarn start
```

or

``` bash
node index.js
```

3. Converted PNG images will be saved in the `dist` directory.

## Configuration

You can modify the script to customize the input and output directories or the image format. Open the `index.js` file and edit the following variables:

- `srcDir`: The source directory where your WebP images are located.
- `distDir`: The destination directory where converted PNG images will be saved.
- You can also change the output format by modifying the `.toFormat('png')` method in the script.

## Known Issues

1. If you are using a Windows computer and cannot install the 'sharp' plugin, I recommend using the following command:

``` bash
yarn add sharp --ignore-engines
```

## License

This project is licensed under the MIT License.

Copyright (c) 2024 Reginna Chao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.