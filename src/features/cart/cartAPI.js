// A mock function to mimic making an async request for data
export async function fetchCount(amount = 1) {
  return new Promise(async(resolve) =>{
    const response = fetch('http://localhost:8080')
    const data = response.json()
    resolve({data})
  }
  );
}
