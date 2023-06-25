import Robot from "../../../assets/RoboticArms.png";
import PixelGun from "../../../assets/PixelGun.png"
import Calculator from "../../../assets/CalculatorPixel-removebg-preview.png";
import Music from "../../../assets/MusicCd-removebg-preview (1).png";
import Website from "../../../assets/website.JPG";
import Controller from "../../../assets/Controller.png"

const data_projects = [
    {
        imgsrc: PixelGun,
        title: "Weapon-Simulator",
        text: "Unity game that serves as a comprehensive testing ground, meticulously exploring weapon mechanics, explosive simulations, and the art of crafting weapon models using Blender.",
        view: "https://github.com/AlinMican1/Game-On",
        type: "Unity - C# - Blender"
    },
    {
        imgsrc: Controller,
        title: "2D Rogue Shooter",
        text: "A compelling 2D game where players can unlock a diverse arsenal of weapons, navigate relentless enemy hordes, level up their character, and unlock enhanced abilities to triumph in the face of escalating challenges. ",
        view: "https://github.com/AlinMican1/RogueShooter2D",
        type: "Unity - C#"
    },
    {
        imgsrc: Robot,
        title: "Robot",
        text: "Designed for efficiency in a hypothetical warehouse setting, a meticulously engineered robot autonomously undertakes the task of sorting boxes based on their colors, seamlessly transporting them to designated coordinates with precision and accuracy.",
        view: "https://github.com/AlinMican1/Robotics",
        type: "LejosEv3 - Java - XML"
    },
    {
        imgsrc: Calculator,
        title: "Calculator",
        text: "Engineered a sophisticated calculator application that employs both Reverse Polish notation and Infix notation algorithms to seamlessly evaluate complex mathematical expressions entered by the user.",
        view: "https://github.com/AlinMican1/Calculator",
        type: "Java - JavaFX - JUNIT - UML - JavaDoc"
    },
    {
        imgsrc: Music,
        title: "Jingle Writer",
        text: "Musical journey as you engage in a captivating game that challenges your ability to identify and guess the correct notes, ranging from the melodious characters 'A' to 'G'.",
        view: "https://github.com/AlinMican1/Jingle-Writer",
        type: "Java"
    },
    {
        imgsrc: Website,
        title: "Noodle App",
        text: "A website built to help students organise and manage their time by having a interactive GUI. Teachers are able make modules and assign  and remove modules for students using Prisma with GraphQL for queries",
        view: "https://github.com/RHUL-CS-Projects/TeamProject2022_30",
        type: "TypeScript - GraphQL - Prisma - React - Next.Js - Node-Js"
    },
];
export default data_projects;