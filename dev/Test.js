const Blockchain = require ('./Blockchain');
const bitcoin = new Blockchain();

// console.log(bitcoin);
const previousBlockHash = '334HHDYRU7SSKFHRRJRH';
const currentBlockData = [
    {
        amount: 10,
        sender: 'NSHFKA19HDU73819',
        recipient: '282HUUJA829AJA01'
    },
    {
        amount: 20,
        sender: 'JHGHGFKA19HDU73819',
        recipient: '299O9HUUJA829AJA01'
    },
    {
        amount: 30,
        sender: 'GJHJGKA19HDU73819',
        recipient: '9Y872HUUJA829AJA01'
    }
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 17659));
