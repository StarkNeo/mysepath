import { arrayImages } from "../assets/images/Images"

export const projectList = [
    {
        id: 1,
        name: 'PODCAST WEB',
        image_path: arrayImages[4],
        skill_name: "HTML, CSS",
        description: "Responsive website that displays embedded podcasts from Spotify and some information about Tech and programming.",
        purpose:"This project was created as part of a full stack web developer course ",
        year: 2021,
        url: 'https://mypodcastproject.netlify.app/',

    },
    {
        id: 2,
        name: 'GIFOS',
        image_path: arrayImages[3],
        skill_name: "HTML, CSS, JS, API",
        description: "Web application that displays a Gif's files catalog and allows you to interact with the GIFOS's API, some functions of this application are: create a video and upload it into de API, do searches of gifs, add your favorite gifs and delete them.", 
        purpose:"This project was created as part of a full stack web developer course",
        year: 2022,
        url: 'hhtp',
    },
    {
        id: 3,
        name: 'COSTO PATRONAL',
        image_path: arrayImages[2],
        skill_name: "C",
        description:"This program is a calculator of the social security costs that employers incurs when they hire personal in Mexico",
        purpose: "This project was created as part of my job and professional field needs",
        year: 2019,
        url: 'https://github.com/StarkNeo/costo-patronal',
    },
    {
        id: 4,
        name: 'ASIMILADOS',
        image_path: arrayImages[1],
        skill_name: "C",
        description:"This program is a calculator of the withholding ISR(Income Tax) in case of a free contractor(individuals) is hired by a Company.",
        purpose: "This project was created as part of my job and professional field needs", 
        year: 2019,
        url: 'https://github.com/StarkNeo/asimilados',
    },
    {
        id: 5,
        name: 'CALCULADORA VENTA DE ACTIVOS',
        image_path: arrayImages[5],
        skill_name: "HTML, CSS, JS, NODE, SQLITE",
        description:"This is a web application that calculate gains and loses in case of fixed assets dispositions(sell or get rid)",
        purpose: "This project was created as part of my job and professional field needs",
        year: 2023,
        url: 'https://github.com/StarkNeo/fixedassetscalculator',
    },
    
    {
        id:6,
        name: 'SUPERAPP 2023',
        image_path: arrayImages[6],
        skill_name:"REACT JS, CSS",
        description:"This application creates a list of items by category and totalize each category, also retrieve you the total amount of your items's list.",
        purpose:"This project was developed for my own personal use, this application helps me to handle the shopping list when I go to the grocery store",
        year:2023,
        url: 'https://github.com/StarkNeo/superapp2023',

    },
    {
        id:7,
        name: 'MORTGAGE CALCULATOR',
        image_path: '',
        skill_name:"Python",
        description:"Mortgage calculator displays a table loan amortization",
        purpose:"For personal finance uses",
        year:2023,
        url: 'https://github.com/StarkNeo/MortgageCalculator',
    },
    {
        id:8,
        name: 'REDDIT APP',
        image_path: '',
        skill_name:"React JS, Redux, API",
        description:"It is a simulation of the Reddit web that grab data from a public Reddit API",
        purpose:"Codecademy Project",
        year:2023,
        url: 'https://myredditapproject.netlify.app/',
    }


]