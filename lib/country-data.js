import { CountryRegionData } from 'react-country-region-selector';

export const countryData=[]
let counter=1
CountryRegionData.map(country=>{
  countryData.push({
    id:counter++,
    value:country[0]
  })
})

