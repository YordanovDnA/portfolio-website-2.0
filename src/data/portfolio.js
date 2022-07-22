import DocsSystem from "../imgs/portfolio/DocsSystem.jpg";
import DocsSystemPatient from "../imgs/portfolio/DocsSystem-patient.jpg";
import DocsSystemLetter from "../imgs/portfolio/DocsSystem-letter.jpg";
import FarmersBusiness from "../imgs/portfolio/FarmersBusiness.jpg";
import FarmersBusinessGameOn from "../imgs/portfolio/FarmersBusinessGameOn.jpg";
import FarmersBusinessMarket from "../imgs/portfolio/FarmersBusinessMarket.jpg";
import MealMenuCreationHome from "../imgs/portfolio/MealMenuCreation-home.jpg";
import MealMenuCreationLogin from "../imgs/portfolio/MealMenuCreation-login.jpg";
import MealMenuCreationList from "../imgs/portfolio/MealMenuCreation-list.jpg";
import SofiMartenFood from "../imgs/portfolio/SofiMartenFood.jpg"
import SofiMartenFoodMealMenu from "../imgs/portfolio/SofiMartenFood-meal-menu.jpg";
import SofiMartenFoodContact from "../imgs/portfolio/SofiMartenFood-contact.jpg";
import JSCalculator from "../imgs/portfolio/JS-Calculator.jpg";
import JSImgSlider from "../imgs/portfolio/JS-Img-Slider.jpg";
import JSHumanGenerator from "../imgs/portfolio/JS-Human-Genarator.jpg";
import QChartDefault from "../imgs/portfolio/q-chart-default.jpg"
import QChartWithProps from "../imgs/portfolio/q-chart-with-props.jpg"
import CloudlineSlotMachine from "../imgs/portfolio/cloudline-slot-machine.jpg"
import ReactDashTemplate from "../imgs/portfolio/react-dash-template.jpg"
import EasternBeauty from "../imgs/portfolio/EasternBeauty.jpg"
import EasternBeautyDashboard from "../imgs/portfolio/EasternBeauty-dashboard.jpg"
import EasternBeautyCategories from "../imgs/portfolio/EasternBeautyCategories.jpg"
import TeamITGTechnicalTestWeb from "../imgs/portfolio/team-ITG-technical-test.jpg"
import TeamITGTechnicalTestTablet from "../imgs/portfolio/team-ITG-technical-test-1.jpg"
import TeamITGTechnicalTestTabletMenu from "../imgs/portfolio/team-ITG-technical-test-2.jpg"
import TeamITGTechnicalTestPhone from "../imgs/portfolio/team-ITG-technical-test-3.jpg"
import TeamITGTechnicalTestPhoneMenu from "../imgs/portfolio/team-ITG-technical-test-4.jpg"

export const portfolio = [
    {
        id: 9,
        info: {
            name: "Team ITG",
            client: "Team ITG",
            version: "1.0",
            dateCompleted: "September, 2021",
            description: "This technical test is part of my application for a front-end developer position in Team ITG. Team ITG is a company with focus on the technologies. Some of their services are Market resource management, Marketing Automation, Automated creative prodution, Web & aoo solutions and more. ",
            shortDescription: "This technical test is part of my application for a front-end developer position in Team ITG. Team ITG is a company...",
            technology: ["HTML", "SASS", , "JavaScript", "React"],
            repository: "https://github.com/YordanovDnA/connect-group-front-end-test",
        },
        photos: {
            thumbnail: TeamITGTechnicalTestWeb,
            list: [TeamITGTechnicalTestTablet, TeamITGTechnicalTestTabletMenu, TeamITGTechnicalTestPhone, TeamITGTechnicalTestPhoneMenu]
        }

    },
    {
        id: 8,
        info: {
            name: "EasternBeauty website, app and dashboard",
            client: "EasterBeauty",
            version: "1.0",
            dateCompleted: "In process",
            description: "At this project I combined all of my skills together to develop website, mobile app and a dashbord. Managing a team of 5, creating the UI/UX design using Marvel App, helping with the development of the marketing strategy, and more. We're developing platform where users can find information about essential oils, and how to use them in different helth conditions. The platform have normal and premium users, plus paid courses for better undertanding how to mix oils or herbs, and use them to prevent bad health conditions.",
            shortDescription: "EasternBeauty is a platform where users can find information about essential oils, and how to use them in different helth conditions.",
            technology: ["HTML", "SASS", "Bootstrap 4", "JavaScript", "React", "Next.js", "NodeJS", "Express", "MarvelApp", "Freedcamp"]
        },
        photos: {
            thumbnail: EasternBeauty,
            list: [EasternBeauty, EasternBeautyDashboard, EasternBeautyCategories]
        }

    },
    {
        id: 7,
        info: {
            name: "Docs hospital system ",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "September, 2020",
            description: "Docs is a hospital document system. It allows the nurses to create discharging letters for patients, and after the head nurse and surgeon approved the document to be download, and the patient can be discharged.",
            shortDescription: "Docs is a hospital document system. It allows the nurses to create discharging letters for patients...",
            technology: ["HTML", "SASS", "Bootstrap 4", "JavaScript", "React", "Redux", "jQuery", "NodeJS", "Express"],
            url: "https://hospital-docs-front-end.herokuapp.com",
            repository: "https://github.com/YordanovDnA/Docs-system",
        },
        photos: {
            thumbnail: DocsSystem,
            list: [DocsSystem, DocsSystemPatient, DocsSystemLetter]
        }

    },
    {
        id: 6,
        info: {
            name: "Farmers Business",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "July, 2020",
            description: "This is a game developed with JavaScript timers and fency vector imgs. I done it as a personal project to show skills using JavaScript",
            shortDescription: "This is a game developed with JavaScript timers and fency vector imgs. I done it as a personal...",
            technology: ["HTML", "CSS", "JavaScript"],
            url: "http://farmersbusiness.iliyanyordanov.com/",
            repository: "https://github.com/YordanovDnA/Game---Farmer-s-business-",
        },
        photos: {
            thumbnail: FarmersBusiness,
            list: [FarmersBusiness, FarmersBusinessGameOn, FarmersBusinessMarket]
        }

    },
    {
        id: 5,
        info: {
            name: "Meal menu creator",
            client: "SofiMarten",
            version: "1.0",
            dateCompleted: "May, 2020",
            description: "This project I created for a company in Sofia, Bulgaria. This company has takeaway food restourant with different meal menu every day. I designedd their website and made this web application so they can create the daily meal menu and upload it to their website. Although I'm doing more front-end developing I did this project all on my own with PHP and MySQL for the back-end.",
            shortDescription: "This project I created for a company in Sofia, Bulgaria. This company has takeaway food restourant...",
            technology: ["HTML", "CSS", "PHP", "MySQL"],
            repository: "https://github.com/YordanovDnA/Food-menu-creating",
        },
        photos: {
            thumbnail: MealMenuCreationList,
            list: [MealMenuCreationHome, MealMenuCreationLogin, MealMenuCreationList]
        }

    },
    {
        id: 4,
        info: {
            name: "SofiMarten-takeway WP website",
            client: "SofiMarten",
            version: "1.0",
            dateCompleted: "May, 2020",
            description: "This is the takeaway website build on WordPress for SofiMarten. SofiMarten has takeway food restourant and cake factory in Sofia, Bulgaria. They're my customers from 2019 and I'm helping them to grow their business online. I'm helping into the managment of their Facebook page and run all their marketing campaigns",
            shortDescription: "This is the takeaway website build on WordPress for SofiMarten. SofiMarten has takeway food restourant...",
            technology: ["WordPress", "Elementor"],
            url: "http://food.sofimarten.com/",
        },
        photos: {
            thumbnail: SofiMartenFood,
            list: [SofiMartenFood, SofiMartenFoodMealMenu, SofiMartenFoodContact]
        }

    },
    {
        id: 3,
        info: {
            name: "JavaScript practice",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "July, 2020",
            description: "This is a collection of all my practice projects on JavaScript. I have calculator, human generator, img slider and many more. Follow the link and explore all of them. If you like any hit the like button. I will appreciate it. ",
            shortDescription: "This is a collection of all my practice projects on JavaScript. I have calculator, human generator...",
            technology: ["HTML", "CSS", "JavaScript"],
            url: "https://codepen.io/collection/DVVzvo",
        },
        photos: {
            thumbnail: JSCalculator,
            list: [JSCalculator, JSHumanGenerator, JSImgSlider]
        }

    },
    {
        id: 2,
        info: {
            name: "Qchart",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "November, 2020",
            description: "This is a reusable quick chart component, which is well documented, and it's in help for me and any other developers, who want quick chart solution. The chart information can be change via props",
            shortDescription: "This is a reusable quick chart component which is well documented, and it's in help...",
            technology: ["HTML", "CSS", "JavaScript", "React"],
            url: "https://qchart.herokuapp.com",
            repository: "https://github.com/YordanovDnA/qchart"
        },
        photos: {
            thumbnail: QChartDefault,
            list: [QChartDefault, QChartWithProps]
        }

    },
    {
        id: 1,
        info: {
            name: "Cloudline - slot machine",
            client: "Interview test",
            version: "1.0",
            dateCompleted: "November, 2020",
            description: "This project is part of my job application project for Junior React Developer in Cloudline. It's simple test combining React and Redux to show the level of the developer.",
            shortDescription: "This project is part of my job application project for Junior React Developer in Cloudline....",
            technology: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            url: "https://slot-machines-technical-test.herokuapp.com",
            repository: "https://github.com/YordanovDnA/cloudline-slot-machine/tree/master"
        },
        photos: {
            thumbnail: CloudlineSlotMachine,
            list: [CloudlineSlotMachine]
        }

    },
    {
        id: 0,
        info: {
            name: "React dashboard template",
            client: "Template",
            version: "1.0",
            dateCompleted: "In process",
            description: "This is a dashboard template same as the one build by startbootsrap.com, but on React. You can see the original one at https://startbootstrap.com/template/sb-admin. I built this template in help of me and other developers. ",
            shortDescription: "This is a dashboard template same as the one build by startbootsrap.com, but on React. You can see...",
            technology: ["HTML", "CSS", "JavaScript", "React"],
            url: "https://react-dashboard-template.herokuapp.com",
            repository: "https://github.com/YordanovDnA/react-dash-template"
        },
        photos: {
            thumbnail: ReactDashTemplate,
            list: [ReactDashTemplate]
        }

    },

]