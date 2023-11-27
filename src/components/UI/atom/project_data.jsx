import Robot from "../../../assets/RoboticArms.png";
import PixelGun from "../../../assets/PixelGun.png"
import Calculator from "../../../assets/CalculatorPixel-removebg-preview.png";
import Website from "../../../assets/website.JPG";
import Controller from "../../../assets/Controller.png"
import TheKingzAceWeb from '../../../assets/TheKingaceWebsite.png'
import Minesweeper from '../../../assets/minesweeper.JPG'

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
        imgsrc: TheKingzAceWeb,
        title: "TheKingzAce",
        text: "In a freelance capacity, I undertook the task of developing a website for an online influencer specializing in aviation. The resulting website boasts complete responsiveness, coupled with an array of distinctive attributes such as bespoke features and engaging animations. ",
        view: "https://github.com/AlinMican1/jkingzy-app",
        type: "React - NextJs - Figma - NodeJs - JavaScript - CSS - HTML"
    },
    {
        imgsrc: Website,
        title: "Noodle App",
        text: "A website built to help students organise and manage their time by having a interactive GUI. Teachers are able make modules and assign  and remove modules for students using Prisma with GraphQL for queries",
        view: "https://github.com/RHUL-CS-Projects/TeamProject2022_30",
        type: "TypeScript - GraphQL - Prisma - React - NextJs - NodeJs"
    },
    {
        imgsrc: Minesweeper,
        title: "MineSweeper",
        text: " Minesweeper game is developed employing Object-Oriented Programming (OOP) principles, utilizing the Tkinter library to establish the graphical interface for user interaction within the game.",
        view: "https://github.com/AlinMican1/MineSweeper",
        type: "Python - Tkinter"
    },
];
export default data_projects;