# Unofficial Promise based Chapa API library for node js

```bash
$ npm install chapa
```

# Usage

```js
const Chapa = require('chapa')

const myChapa = new Chapa('secret-key')

const customerInfo =  {
  'amount': '100',
  'currency': 'ETB',
  'email': 'abebe@bikila.com',
  'first_name': 'Abebe',
  'last_name': 'Bikila',
  'tx_ref': 'tx-myecommerce12345',
  'callback_url': 'https://chapa.co',
  'customization[title]': 'I love e-commerce',
  'customization[description]': 'It is time to pay'
}

// intializing transaction
myChapa.initialize({ ...customerInfo }).then(response => {
    console.log(response) // if success json response
}).catch(e => console.log(e)) // catch errors

// async/await
let response = await myChapa.initialize({ ...customerInfo })

// verify transaction

myChapa.verify('txn-reference').then(response => {
    console.log(response) // if success
}).catch(e => console.log(e)) // catch errors

// async/await
let response = await myChapa.verify('txn-reference')

```