export const manufacturers = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

export const yearsOfProduction = [
    {title: "Year", value: ""},
    {title: "2015", value: "2015"},
    {title: "2016", value: "2016"},
    {title: "2017", value: "2017"},
    {title: "2018", value: "2018"},
    {title: "2019", value: "2019"},
    {title: "2020", value: "2020"},
    {title: "2021", value: "2021"},
    {title: "2022", value: "2022"},
    {title: "2023", value: "2023"},
];

export const fuels = [
    {
        title: "Fuel",
        value: "",
    },
    {
        title: "Gas",
        value: "Gas",
    },
    {
        title: "Electricity",
        value: "Electricity",
    },
];

export const footerLinks = [
    {
        title: "About",
        links: [
            {title: "How it works", url: "/"},
            {title: "Featured", url: "/"},
            {title: "Partnership", url: "/"},
            {title: "Bussiness Relation", url: "/"},
        ],
    },
    {
        title: "Company",
        links: [
            {title: "Events", url: "/"},
            {title: "Blog", url: "/"},
            {title: "Podcast", url: "/"},
            {title: "Invite a friend", url: "/"},
        ],
    },
    {
        title: "Socials",
        links: [
            {title: "Discord", url: "/"},
            {title: "Instagram", url: "/"},
            {title: "Twitter", url: "/"},
            {title: "Facebook", url: "/"},
        ],
    },
];

// Fake data used when NEXT_PUBLIC_RAPID_API_KEY is not set.
const car = (make: string, model: string, year: number, fuel_type: string, city_mpg: number, highway_mpg: number, transmission: string, drive: string, carClass: string, cylinders: number, displacement: number) =>
    ({make, model, year, fuel_type, city_mpg, highway_mpg, combination_mpg: Math.round((city_mpg + highway_mpg) / 2), transmission, drive, class: carClass, cylinders, displacement});

export const mockCars = [
    car("toyota", "corolla", 2022, "gas", 31, 40, "a", "fwd", "compact car", 4, 1.8),
    car("toyota", "camry", 2022, "gas", 28, 39, "a", "fwd", "midsize car", 4, 2.5),
    car("honda", "civic", 2022, "gas", 31, 40, "m", "fwd", "compact car", 4, 2.0),
    car("honda", "accord", 2022, "gas", 29, 37, "a", "fwd", "midsize car", 4, 1.5),
    car("tesla", "model 3", 2022, "electricity", 138, 126, "a", "rwd", "midsize car", 0, 0),
    car("tesla", "model y", 2022, "electricity", 127, 117, "a", "awd", "small sport utility vehicle", 0, 0),
    car("bmw", "330i", 2022, "gas", 26, 36, "a", "rwd", "compact car", 4, 2.0),
    car("bmw", "i4", 2022, "electricity", 109, 108, "a", "rwd", "midsize car", 0, 0),
    car("audi", "a4", 2022, "gas", 25, 34, "a", "awd", "compact car", 4, 2.0),
    car("ford", "mustang", 2022, "gas", 15, 24, "m", "rwd", "subcompact car", 8, 5.0),
    car("ford", "f-150 lightning", 2022, "electricity", 76, 61, "a", "4wd", "standard pickup truck", 0, 0),
    car("hyundai", "ioniq 5", 2022, "electricity", 132, 98, "a", "rwd", "small sport utility vehicle", 0, 0),
    car("volkswagen", "golf", 2022, "gas", 29, 36, "m", "fwd", "compact car", 4, 1.5),
    car("mazda", "mx-5", 2022, "gas", 26, 34, "m", "rwd", "two seater", 4, 2.0),
    car("toyota", "rav4", 2021, "gas", 27, 35, "a", "awd", "small sport utility vehicle", 4, 2.5),
    car("kia", "ev6", 2023, "electricity", 136, 100, "a", "rwd", "small sport utility vehicle", 0, 0),
    car("mercedes-benz", "c300", 2020, "gas", 23, 33, "a", "rwd", "compact car", 4, 2.0),
    car("nissan", "leaf", 2019, "electricity", 123, 99, "a", "fwd", "midsize car", 0, 0),
    car("porsche", "911", 2018, "gas", 20, 26, "m", "rwd", "minicompact car", 6, 3.0),
];
