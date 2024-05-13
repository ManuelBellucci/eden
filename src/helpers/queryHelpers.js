export const objectToQueryString = (params) => {
    return Object.entries(params)
        .filter(([_, value]) => value !== null && value !== '' && value !== false)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
}

export const queryStringToObject = (queryString) => {
    return Object.fromEntries(new URLSearchParams(queryString))
} 