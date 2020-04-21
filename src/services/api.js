const get = (baseURL = 'www.google.com') => {
  const apiWrapper = axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}
