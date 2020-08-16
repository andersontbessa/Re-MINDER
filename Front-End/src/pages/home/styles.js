import {StyleSheet} from 'react-native';


export const page = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#61dafb',
      alignItems: "center"
    },
    font: {
      fontSize:30,
      color: '#000',
      fontStyle: "italic",
      fontWeight: 'bold'
    },  
      
  });
  
export const container = StyleSheet.compose(page.container);
export const font = StyleSheet.compose(page.font);
