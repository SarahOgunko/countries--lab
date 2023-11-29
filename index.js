
const getCountryByName = async(countryName)=>{
  const response = await fetch (`https://restcountries.com/v3.1/name/${countryName}`)
  const data = await response.json();
  console.log(data)
  displayInfo(data)
}
  
const section = document.querySelector('#header-section')
const displayInfo = (data) => {
    const countryName = document.createElement("p");
    countryName.innerText = data[0].name.common
    section.appendChild(countryName)

    const countryCapital = document.createElement("p");
    countryCapital.innerText = data[0].capital[0]
    section.appendChild(countryCapital)

    const countryPopulation = document.createElement("p");
    countryPopulation.innerText = data[0].population
    section.appendChild(countryPopulation)

    const countryLanguage = document.createElement("p");
    countryLanguage.innerText = data[0].languages.eng
    section.appendChild(countryLanguage)

}

getCountryByName("Christmas Island")
