import client from '@sanity/client'

export default client({
    projectId: 'g748rhyo',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-28'

})