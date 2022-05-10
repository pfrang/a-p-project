
const Api = async (params) => {
  const url = params
  const call = await fetch(url).then(res => res.json()).then(data => data)
  return call
}

export default Api;
