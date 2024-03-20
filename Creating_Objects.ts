let countriesInfo: { [key: string]: { capital: string, population: number, area: number } } = {
    "Australia": { capital: "Canberra", population: 25600000, area: 7692024 },
    "Brazil": { capital: "Brasília", population: 212559417, area: 8515767 },
    "Canada": { capital: "Ottawa", population: 38005238, area: 9984670 },
    "Germany": { capital: "Berlin", population: 83783942, area: 357022 },
    "Japan": { capital: "Tokyo", population: 126476461, area: 377975 },
    "Pakistan": { capital: "Islamabad", population: 241500000, area: 881913 },
    "United States": { capital: "Washington, D.C.", population: 331449281, area: 9525067 }
};

// Accessing information for a specific country
let country = "Pakistan";
console.log(`Information about ${country}:`, countriesInfo[country]);
