import iitmad from './assets/iitmad.jpeg'
import theweek from './assets/theweek.jpg'
import iitd from './assets/iitd1.png'
import iitb from './assets/iitb.png'
import iitk from './assets/iitk.png'
import indiatoday from './assets/indiato.png'
import iitkan from './assets/iitkan.png'
import iitroor from './assets/iitkan.png'
import parul from './assets/parul.png'
import toi from './assets/toi.png'
import raj from './assets/raj.jpg'
import wox from './assets/wox.png'
let Data=[
    {    
        name:"IIT Madras - Indian Institute of Technology - [IITM], Chennai",
        img:iitmad,
        rank:"#1",
        courseFees:"2,09,550",
        featured:"no",
        lowPack:"21,48,000",
        highPack:"₹ 1,98,00,000",
        lowPactext:"Average Package",
        highPactext:"Highest Package",
        reviews:"8.5/10",
        city:"Chennai, Tamil Nadu |AICTE Approved",
        noReviews:"334",
        cutoff:"148",
        ranking:["3","131"],
        rankimg:theweek,
        rankYear:"2023",
        rankno:"9",
        rev:"Best in Social Life",
        

    },
    {    
        name:"IIT Delhi - Indian Institute of Technology [IITD], New Delhi",
        img:iitd,
        featured:"no",
        rank:"#2",
        courseFees:"2,54,650",
        lowPack:"25,82,000",
        highPack:"₹ 2,00,00,000",
       rev:"Best in Social Life",
        reviews:"8.7/10",
        city:"CNew Delhi, Delhi NCR ",
        noReviews:"521",
        cutoff:"429",
        ranking:["1","35"],
        rankimg:indiatoday,
        rankYear:"2023",
        rankno:"10",
        lowPactext:"Average Package",
        highPactext:"Highest Package",

    },
    {    
        name:"Parul University, Vadodara",
        img:parul,
        rank:"#3",
        featured:"yes",
        courseFees:"1,49,000",
        lowPack:"4,00,000",
        highPack:"₹ 30,00,000",
       rev:"Best in infrastructure",
        reviews:"8.1/10",
        city:"Vadodara, Gujarat |AICTE, COA, PCI, INC, GNC Approved ",
        noReviews:"832",
        // cutoff:"429",
        ranking:["99","147"],
        rankimg:toi,
        rankYear:"2019",
        rankno:"4",
        lowPactext:"Average Package",
        highPactext:"Highest Package",

    },
    {    
        name:"IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
        img:iitb,
        featured:"no",
        rank:"#4",
        courseFees:"2,30,550",
        lowPack:"21,82,000",
        highPack:"₹ 3,67,00,000",
       
        reviews:"8.8/10",
        city:"Mumbai, Maharashtra |AICTE, UGC Approved ",
        noReviews:"314",
        cutoff:"67",
        ranking:["2","35"],
        rankimg:indiatoday,
        rankYear:"2023",
        rankno:"10",
        lowPactext:"Average Package",
        highPactext:"Highest Package",
        rev:"Best in Social Life",

    },
    {    
        name:"Woxsen University, Hyderabad",
        img:wox,
        rank:"#5",
        featured:"yes",
        courseFees:"4,10,000",
        lowPack:"9,09,000",
        highPack:"₹ 17,00,000",
       rev:"Best in faculty",
        reviews:"8.1/10",
        city:"Vadodara, Gujarat |AICTE, COA, PCI, INC, GNC Approved ",
        noReviews:"832",
        // cutoff:"429",
        ranking:["99","147"],
        rankimg:toi,
        rankYear:"2019",
        rankno:"4",
        lowPactext:"Average Package",
        highPactext:"Highest Package",

    },
    {    
        name:"IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
        img:iitk,
        rank:"#6",
        featured:"no",
        courseFees:"2,23,600",
        highPack:"1,90,00,000",
        rev:"Best in Infrastructure",
        highPactext:"Highest Package",
        reviews:"8.8/10",
        city:"Mumbai, Maharashtra |AICTE, UGC Approved ",
        noReviews:"314",
        cutoff:"67",
        ranking:["2","35"],
        rankimg:indiatoday,
        rankYear:"2023",
        rankno:"10"

    }, 
    {    
        name:"Parul University, Vadodara",
        img:parul,
        rank:"#7",
        featured:"yes",
        courseFees:"1,49,000",
        lowPack:"4,00,000",
        highPack:"₹ 30,00,000",
       rev:"Best in infrastructure",
        reviews:"8.1/10",
        city:"Vadodara, Gujarat |AICTE, COA, PCI, INC, GNC Approved ",
        noReviews:"832",
        // cutoff:"429",
        ranking:["99","147"],
        rankimg:toi,
        rankYear:"2019",
        rankno:"4",
        lowPactext:"Average Package",
        highPactext:"Highest Package",

    },
    {    
        name:"IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur",
        img:iitkan,
        rank:"#8",
        courseFees:"2,29,200",
        featured:"no",
        highPack:"1,90,00,000",
        rev:"Best in Infrastructure",
        highPactext:"Highest Package",
        reviews:"8.8/10",
        city:"Kanpur, Uttar Pradesh |UGC Approved ",
        noReviews:"402",
        cutoff:"238",
        ranking:["3","35"],
        rankimg:indiatoday,
        rankYear:"2023",
        rankno:"11"

    }, 
  
    {    
        name:"Rajasthan College of Engineering for Women - [RCEW], Jaipur",
        img:raj,
        rank:"#9",
        featured:"yes",
        courseFees:"1,11,293",
        lowPack:"6,50,000",
        highPack:"₹ 18,00,000",
       rev:"Best in infrastructure",
        reviews:"8.7/10",
        city:"Jaipur, Rajasthan |AICTE Approved ",
        noReviews:"31",
        // cutoff:"429",
        ranking:["120","170"],
        rankimg:toi,
        rankYear:"2023",
        rankno:"",
        lowPactext:"Average Package",
        highPactext:"Highest Package",

    },
    {    
        name:"IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
        img:iitroor,
        rank:"#10",
        courseFees:"2,30,100",
        featured:"no",
        lowPack:"18,34,000",
        lowPactext:"Average Package",
        highPack:"1,30,00,000",
        rev:"Best in Infrastructure",
        highPactext:"Highest Package",
        reviews:"8.7/10",
        city:"Roorkee, Uttarakhand |AICTE, UGC Approved ",
        noReviews:"402",
        cutoff:"715",
        ranking:["5","35"],
        rankimg:indiatoday,
        rankYear:"2023",
        rankno:"10"

    }, 
     
]


export default Data;