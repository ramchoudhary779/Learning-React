import './App.css'
import Heading from './components/heading'
import Paragraph from './components/paragraph';
import {DangerButton , SuccessButton} from './components/DangerButton'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';
import {Button} from './components/Button';


function App() {
  let students = ['A','B','C','D','E',];
  
  let newStudents = ['Ram','Shyam','Mohan'];
  
  return (
    <>
    <Title titletext='Ram' />
    <Title titletext='Welcome to ' />
    <Title titletext='MY World' />
    <Title titletext='Learning Props' />
    <Heading />
    <RandomNumber />
    <RandomNumber />
    <RandomNumber />
    <Paragraph />
    <DangerButton />
    <SuccessButton />
    <StudentList students = {newStudents} />
    <DynamicComponent />
    <StudentList students={students}/>
    <Button btnText='Click Me' />
    



    </>
  )
}

export default App
