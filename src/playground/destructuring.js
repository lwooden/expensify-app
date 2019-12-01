
const address = ['4304 Sheldon Ave', 'Temple Hills', 'Maryland', '20748']
const [street, city, state, zip ] = address // destructures and assigns variables by index (position)
console.log(`You are in ${city} ${state}!`)

const item = ['coffee', '$2.00', '$2.50', '$2.75']
const [coffee, , med_price, ] = item
console.log(`A medium ${coffee} costs ${med_price}!`)