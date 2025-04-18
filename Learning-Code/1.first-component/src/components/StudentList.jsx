const StudentList = (props) => {


    return <ul>
        {
           props.students.map((students, index) => {
            return <li key={students}>{students}</li>
           }) 
        }
    </ul>

}

export default StudentList;