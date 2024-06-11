
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { d } from '../design';

const questions = [ {
  question: "Quelle est la capitale de Madagascar  ?",
  correctAnswer: "Antananarivo",
  answers: ["Fianarantsoa", "Antananarivo", "Antsiranana", "Mahajanga"]
},
{
  question: "Quel est le nom du Président de la République de Madagascar ?",
  correctAnswer: "Rajoelina",
  answers: ["Ravatomanga", "Ramora", "Rajoelina", "Ntsay Christian"]
},
{
  question: "Quelle personne est connue comme le roi de la musique pop ?",
  correctAnswer: "Michael Jackson",
  answers: ["Bob Marley","Toto Cutugno","Justin Bieber","Michael Jackson"]
},
{
  question: "Dans quel triangle de l'Océan Atlantique de nombreux bateaux ont-ils disparus ?",
  correctAnswer: "Des Bermudes",
  answers: ["Du cercle de Cuba", "De Trinidad", "Des Bahamas", "Des Bermudes"]
},
{
  question: "Lequel de ces matériaux est le plus dur ?",
  correctAnswer: "Diamant",
  answers: ["Diamant", "Mousse", "Craie", "Talc"]
},
{
  question: "Après leur mort, en quoi étaient transformés les pharaons égyptiens ?",
  correctAnswer: "Momies",
  answers: ["Zombies", "Momies", "Vampires", "Loups-garous"]
},
{
  question: "Quelle est la capitale de l'Espagne ?",
  correctAnswer: "Madrid",
  answers: ["Valence", "Tolède", "Madrid", "Malaga"]
},
{
  question: "Lequel de ces mots ne change pas d'orthographe au pluriel ?",
  correctAnswer: "Nez",
  answers: ["Nez", "Cheval", "Seau", "Oeil"]
},
{
  question: "Quel nom donne-t-on au temps de repos au milieu d'un match de sport d'équipe ?",
  correctAnswer: "La mi-temps",
  answers: ["L'essai", "Le corner", "Le round", "La mi-temps"]
},
{
  question: "Lequel de ces animaux est le plus lent ?",
  correctAnswer: "Tortue",
  answers: ["Tortue", "Elephant", "Ours", "Lapin"]
},
{
  question: "Quels fruits sont habituellement utilisés pour faire du vin ?",
  correctAnswer: "Raisins",
  answers: ["Bananes", "Raisins", "Fraises", "Oranges"]
},
{
  question: "Combien y-a-t-il de faces dans un seul dé ? ",
  correctAnswer: "Six",
  answers: ["Onze", "Dix", "Six", "Sept"]
},
{
  question: "Quel mois n'a que 28 jours et tous les 4 ans en ont 29 ?",
  correctAnswer: "Février",
  answers: ["Juillet", "Août", "Décembre", "Février"]
},
{
  question: "Quelle fête est célébrée en jouant des blagues et des canulars ?",
  correctAnswer: "Poisson d'avril",
  answers: ["Nouvel an", "Poisson d'avril", "Fête de travail", "Pâques"]
},
{
  question: "Lequelle de ces plantes préfère la sécheresse?",
  correctAnswer: "Cactus",
  answers: ["Cactus", "Du blé", "Avocatier", "Cocombre"]
},
{
  question: "La nourriture est digérée dans quelle partie du corps ?",
  correctAnswer: "Système digestif",
  answers: ["Cerveau", "Foie", "Système digestif","Poumons"]
},
{
  question: "Quel est l'animal terrestre le plus rapide ?",
  correctAnswer: "Guépard",
  answers: ["Elephant", "Lion", "Rhinocéros", "Guépard"]
},
{
  question: "Quelle ville est la capitale de Monaco ?",
  correctAnswer: "Monaco",
  answers: ["Monaco","Paris", "Masia", "Rôme"]
},
{
  question: "De quoi est composé le verre ?",
  correctAnswer: "Le sable",
  answers: ["Glace", "Le sable", "Des arbres", "Eau"]
},
{
  question: "Qu'est-ce qui recouvre environ 71% de la surface de la Terre ?",
  correctAnswer: "Eau",
  answers: ["Eau", "Glace", "Les bois", "Déserts"]
},
{
  question: "Quel langage est utilisé par l'ordinateur pour traiter les données ?",
  correctAnswer: "Langage Binaire",
  answers: ["Langue Française", "Langage Binaire", "Langue Chinoise", "Sanskrit"]
},
{
  question: "Quel genre de bijoux porte-t-on au doigt ?",
  correctAnswer: "Bague",
  answers: ["Pendentif", "Bracelet", "Bague", "Chaîne"]
},
{
  question: "Quel organe est massé pendant la réanimation ?",
  correctAnswer: "Coeur",
  answers: ["Rate", "Foie", "Estomac","Coeur"]
},
{
  question: "Quel continent n'a qu'un seul pays ?",
  correctAnswer: "Australie",
  answers: ["Amérique du Sud ", "Australie", "Eurasie", "Afrique"]
},
{
  question: "Quel genre d'animal marin peut imiter la parole humaine ?",
  correctAnswer: "Dauphins",
  answers: ["Dauphins","Scellés", "Pinguoins", "Les requins"]
},
{
  question: "A la pétanque, lancer sa boule le plus près possible du cochonet, c'est...",
  correctAnswer: "Pointer",
  answers: ["Jeter", "Tirer", "Lancer", "Pointer"]
},];



const CongratulationsScreen = ({ onNewGame, onMainMenu, onQuit, dollar }) => (
  <View style={d.fd}>

    <Text style={d.vs}>Vous avez gagné {dollar} $</Text>
    
    <TouchableOpacity style={[d.button3, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]} onPress={onNewGame}>
      <Text style={d.buttonText}>Rejouer</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[d.button4, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]} onPress={onMainMenu}>     
      <Text style={d.buttonText}>Menu principal</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[d.button5, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]} onPress={onQuit}>
      <Text style={d.buttonText}>Quitter</Text>
    </TouchableOpacity>
        
  </View>
);

const New = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(1);
  const [dollar, setDollar] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState([]);

  useEffect(() => {
    // Mélanger les questions au chargement de la composante
    setRemainingQuestions(shuffleArray(questions));
  }, []);

  const navigation = useNavigation();

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = remainingQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setDollar(dollar + 500);
    } else {
      setGameOver(true);
    }
    if (currentQuestionIndex + 1 >= 10) {
      //Game Over après 10 questions 
      setGameOver(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handleNewGame = () => {
    setCurrentQuestionIndex(0);
    setScore(1);
    setDollar(0);
    setGameOver(false);
    setRemainingQuestions(shuffleArray(questions));
  };

  const handleMainMenu = () => {
    navigation.navigate('App');
  };

  const handleQuit = () => {
    BackHandler.exitApp();
  };

  if (gameOver) {
    return (
      <CongratulationsScreen
        dollar={dollar}
        onNewGame={handleNewGame}
        onMainMenu={handleMainMenu}
        onQuit={handleQuit}
      />
    );
  }

  if (currentQuestionIndex >= remainingQuestions.length) {
    setGameOver(true);
    return null;
  }

  const currentQuestion = remainingQuestions[currentQuestionIndex];

  return (
    <View style={d.fd}>
      <Text style={d.dollar}>{dollar} $</Text>
      <Text style={d.score}>{score}/10</Text>
      <Text style={d.title}> {currentQuestion.question} </Text>
      
      {currentQuestion.answers.map((answer, index) => (
        <TouchableOpacity key={index} onPress={() => handleAnswer(answer)} style={d.reps}>
            <Text style={d.ans}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default New;


