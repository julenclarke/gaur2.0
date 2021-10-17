export function fetchLanguageRepos () {
  const endpoint = 'https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/languagesdata.json'

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.languages) {
        throw new Error(data.message)
      }

      return data.languages
    })
}