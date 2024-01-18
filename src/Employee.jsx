import React, {Component} from 'react';
import JSON from './api/employee.json';
class Employee extends Component{
    constructor()
    {
        super()
        this.state={
            jsonData: JSON
        }
    }
    render()
    {
        return(
            <table border={"2px"} cellPadding={"5px"} cellSpacing={"10px"}>
            <tr>
                <td>EMPID</td>
                <td>EMPNAME</td>
                <td>EMPSAL</td>
                <td>EMPDES</td>
                <td>EMPGEN</td>
                <td>EMPEDU</td>
                <td>EMPEXP</td>
                <td>EMPCOM</td>
                <td>EMPIMG</td>
                <td>EMPSKILLS</td>
                <td>EMPCITY</td>
            </tr>
            {
                this.state.jsonData.map((x)=>
                {
                    return(
                        <tr>
                        <td>{x.empId}</td>
                        <td>{x.empName}</td>
                        <td>{x.empSal}</td>
                        <td>{x.empDes}</td>
                        <td>{x.empGen}</td>
                        <td>{x.empEdu}</td>
                        <td>{x.empExp}</td>
                        <td>{x.empComp.previous}</td>
                        <td>
                        <img src={x.empImg} style={{height:"200px", width:"200px"}}></img></td>
                        <td>
                        <ul>
                        {x.empSkills.map((x)=>
                            {
                                return <li>{x}</li>
                            })}
                        </ul>
                        </td>
                        <td>{x.empCity}</td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }
}
export default Employee;