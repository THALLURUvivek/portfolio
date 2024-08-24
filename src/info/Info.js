import self from "../img/self.png"





export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Vivek",
    lastName: "Thalluru",
    initials: "T", 
    position: "Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "vivektalluri94@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://www.instagram.com/viv_ektalluri_09/?hl=en",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/THALLURUvivek",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vivek-thalluru-b6a539289/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/ThalluruVivek",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Vivek, i am a Full Stack Developer dedicated to crafting seamless and efficient web applications. With a strong grasp of both front-end and back-end technologies, I excel at creating user-friendly interfaces and robust server-side logic. Passionate about continuous learning, I believe in the transformative power of artificial intelligence in shaping our future. Let's collaborate to bring your innovative ideas to life!",
    skills:
        {
            proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS', 'bootstrap', 'Node JS', 'Express JS', 'Mongo DB or Mongoose'],
            exposedTo: ['SQL', 'python',]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🗺️⁀જ✈︎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
       

    ],
}
