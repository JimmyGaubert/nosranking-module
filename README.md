# @earlam/nosranking-module

![NPM Downloads](https://img.shields.io/npm/d18m/%40earlam%2Fnosranking-module) ![NPM Version](https://img.shields.io/npm/v/%40earlam%2Fnosranking-module)

![NosRanking Logo](https://www.aht.li/3769246/nr-192.png)

A Node.js module to fetch data from the NosRanking API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the module, run the following command:

```
npm install @earlam/nosranking-module
```

## Usage

Here’s how to use the module to get data from the NosRanking API:

```
const { fetchRanking } = require('@earlam/nosranking-module');

// Example usage
fetchRanking('fr', 1, 'Earlam')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## API

### `fetchRanking(region, server, nick)`

This function retrieves player rankings from the NosRanking API.

#### Parameters

- **region**: `string` - The region to use. Available options: `fr`, `de`, `en`, `us`, `int`.
- **server**: `number` - The server to use (e.g., 1 for `EU-Dragonveil`, 2 for `US-Cylloan`).
- **nick**: `string` - The player's nickname whose data you want to retrieve.

#### Example

To get the ranking of a player on the French server:

```
fetchRanking('fr', 1, 'Earlam')
    .then(data => {
        console.log(data);
    });
```

## Contributing

Contributions are welcome! If you have ideas or improvements, feel free to open an issue or pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

### Contact

For any questions, feel free to contact me via [my GitHub profile](https://github.com/JimmyGaubert).
