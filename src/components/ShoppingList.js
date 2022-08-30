const plantList = [
	{
    id: 1,
		name: 'monstera',
		category: 'classique',
		id: '1ed'
	},
	{
    id: 2,
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab'
	},
	
]

function ShoppingList() {
  return (
      <ul>
          {plantList.map((plant, index) => (
              <li key={plant.id}>{ plant.name }</li>
          ))}
      </ul>
  )
}


export default ShoppingList;