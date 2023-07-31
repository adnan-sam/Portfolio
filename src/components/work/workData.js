import {MdWork} from 'react-icons/md';
import {BiBookBookmark} from 'react-icons/bi';
import {FaGraduationCap} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

const data = [
    {
        id:1,
        icon: <BiBookBookmark/>,
        name: "Assembly of Christ School",
        location: "Barrackpore, Kolkata",
        title: "Science",
        score: "ICSE - 89.20%",
        responsibilities:[],
        duration: "2008 - 2018"
    },
    {
        id:2,
        icon: <BiBookBookmark/>,
        name: "Assembly of Christ School",
        location: "Barrackpore, Kolkata",
        title: "Computer Science",
        score: "ISC - 83.40%",
        responsibilities:[],
        duration: "2018 - 2020"
    },
    {
        id:3,
        icon: <FaGraduationCap/>,
        name: "Meghnad Saha Institute of Technology (MSIT)",
        location: "Kolkata",
        title: "BTech (Computer Science & Engineering)",
        score: "CGPA - 9.31",
        responsibilities:[],
        duration: "2020 - present"
    },
    {
        id:4,
        icon: <FiGithub/>,
        name: "Open Source Contribution",
        location: "Remote",
        title: "Front-End Development",
        score: "",
        responsibilities:['Modifies the Front End of the Website',
        'Enhance the UI of the Application.',
        "Completed HacktoberFest'22",
        'Learnt Git, GitHub and Version Control',
        'Learnt Open Source, its usage and implementations.'
        ],
        duration: "2022 - 2023"
    },
    {
        id:5,
        icon: <MdWork/>,
        name: "BasketHunt Pvt. Ltd.",
        location: "Remote",
        title: "Web Developer Intern",
        score: "Internship",
        responsibilities:['Tech Stack used - HTML, CSS, JS, PHP',
        'Collaborated with a team to transform Figma designs into functional web pages',
        'Implemented responsive design principles to ensure optimal user experience across different devices and screen sizes.',
        'Implemented responsive design principles to ensure optimal user experience across different devices and screen sizes.',
        'Learned some new technologies and to meet aggressive delivery schedules.'
        ],
        duration: "Jan 2023 - Mar 2023"
    },
]

export default data;