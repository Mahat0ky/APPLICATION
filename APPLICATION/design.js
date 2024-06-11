import { StyleSheet, Platform, StatusBar } from "react-native";
const d = StyleSheet.create({
  fd: {
    backgroundColor: '#EAADEA', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
//texte dans le bouton d'acceuil
    buttonText :{
        fontSize :24,
        alignItems: 'center',
        position : 'relative',
        color : '#000',
        fontWeight : 'bold', 
        paddingLeft:30,
        textAlign: 'center',
        justifyContent: 'center',    
  },

  

  // Case de reponse
  reps:{
    borderWidth:2,
    borderColor:'white',
    width:300,
    borderRadius:50,
    backgroundColor:'#FFF',
    top:140,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    paddingTop:5,
    paddingBottom:5,
    marginTop:15,
  },
  
  //Case de la Question
  title: {
    width:300,
    position: 'absolute',
    top: 130,
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    paddingBottom: 25,
    paddingTop: 25,
    backgroundColor: '#ffc',
    borderRadius: 30,
  },

  //Case de money
  dollar: {
    width:100,
    alignItems: 'center',
    top: 30,
    borderWidth: 2,
    backgroundColor: '#9932CD',
    position: 'absolute',
    borderColor: '#fff',
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 24,
    fontWeight : 'bold',
    textAlign: 'center',
  },
  
  //Nombres de question
  score: {
    alignItems: 'center',
    bottom: 20,
    borderWidth: 2,
    backgroundColor: '#7F00FF',
    borderColor: '#fff',
    position: 'absolute',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
    fontSize: 24,
    fontWeight : 'bold',
  },

  //Reponse texte
  ans: {
    color:'black',
    fontWeight : 'bold',
    textAlign: 'center',
    fontSize:24,
  },

//Message après le Game Over
vs:{
  color :'black',
  position: 'absolute',
  top:220,
  fontSize:30,
},


//style
container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#a8a3e6'
  },

  button0: {
    borderRadius: 50,
    backgroundColor: '#39BFC6',
    position: 'relative',
    width: 300,
    paddingTop:5,
    paddingBottom:5,
    marginTop:20,
    bottom: 50,
    borderWidth:2,
    borderColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3, 
    elevation: 7,
  },

  button1: {
    borderRadius: 50,
    backgroundColor: '#d1ca00',
    position: 'relative',
    width: 250,
    paddingTop:5,
    paddingBottom:5,
    bottom: 40,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 7,
  },

  button2: {
    borderRadius: 50,
    backgroundColor: '#FF33CA',
    position: 'relative',
    width: 200,
    paddingTop:5,
    paddingBottom:5,
    bottom: 30,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 4 }, 
    shadowOpacity: 0.7, 
    shadowRadius: 3, 
    elevation: 7,
  },
  
button3: {
    borderRadius: 50,
    backgroundColor: '#39BFC6',
    position: 'relative',
    width: 300,
    paddingTop:5,
    paddingBottom:5,
    marginTop:20,
    top: 80,
    borderWidth:2,
    borderColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3, 
    elevation: 7,
  },

  button4: {
    borderRadius: 50,
    backgroundColor: '#d1ca00',
    position: 'relative',
    width: 250,
    paddingTop:5,
    paddingBottom:5,
    top: 90,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 7,
  },

  button5: {
    borderRadius: 50,
    backgroundColor: '#FF33CA',
    position: 'relative',
    width: 200,
    top: 100,
    paddingTop:5,
    paddingBottom:5,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 4 }, 
    shadowOpacity: 0.7, 
    shadowRadius: 3, 
    elevation: 7,
  },

  //fond page d'acceuil
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffD',
  },

  
  transparentStatusBar: {
    ...Platform.select({
      android: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: StatusBar.currentHeight,
        backgroundColor: '#FFF',
      }, 
    }),
  },





});
export { d };