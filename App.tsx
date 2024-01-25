import { StyleSheet } from 'react-native';
import { PageIndex } from '@screens/';
import { BasicProvider } from '@context/';



export default function App() {
 
  return (
    <BasicProvider>
    <PageIndex/>
    </BasicProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
