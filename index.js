
const getCountryByName = async(countryName)=>{
  const response = await fetch ("https://restcountries.com/v3.1/name/" + countryName)
  const data = await response.json();

  console.log(data)

}

getCountryByName("Peru")

// const section = document.querySelector("#header-section")
  
//   data.forEach((country)=> {
//     const countryInfo = document.createElement("p");
//     countryInfo.textContent = country.name.common;
//     section.appendChild(countryInfo)

//   })