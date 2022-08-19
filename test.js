const Chapa = require('./index')

let myChapa = new Chapa('CHASECK_TEST-OeEWekN3KjoBTSwkkDdds9nZ8PhMBrkk')
// myChapa.initialize({
//     'amount': '100',
//     'currency': 'ETB',
//     'email': 'abebe@bikila.com',
//     'first_name': 'Abebe',
//     'last_name': 'Bikila',
//     'tx_ref': 'tx-x12345',
//     'callback_url': 'https://chapa.co',
//     'customization[title]': 'I love e-commerce',
//     'customization[description]': 'It is time to pay'
// }).then(d => console.log('ddd', d))
// .catch(e => console.log(e))

myChapa.verify('tx-x12345').then(d => console.log(d)).catch(e => console.log(e))