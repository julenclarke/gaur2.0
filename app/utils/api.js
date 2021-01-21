export function fetchLanguageRepos () {
  const endpoint = 'app/languagesdata.json'

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.languages) {
        throw new Error(data.message)
      }

      return data.languages
    })
}