//solutions

//1

({
    'name': 'Babelgum'
},{
    'name': 1, 
    '_id': 0
})

//2

{
    'number_of_employees': {
      '$gt': 5000
    }
  }
//3

{
    '$and': [
      {
        'founded_year': {
          '$gte': 2000
        }
      }, {
        'founded_year': {
          '$lte': 2005
        }
      }
    ]
  }