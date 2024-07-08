// A mock function to mimic making an async request for data
export async function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: We will not hardcode server URL here
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}

export async function fetchProductByFilters(filter) {
  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }


  return new Promise(async (resolve) =>{
    //TODO: We will not hardcode server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  }
  );
}