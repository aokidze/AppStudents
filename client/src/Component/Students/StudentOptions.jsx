import { Link}  from 'react-router-dom'
import React from "react";
function StudentOptions() {
    return ( 

            <div className="cards">
            <div className="card">
            <svg style={{width: "200px", display: "flex", margin: "0 auto"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                <div className="card-body">
                <h5 className="card-title">Добавить студента</h5>
                <p className="card-text">
                Нажмите на кнопку "Добавить", чтобы добавить нового студента в базу данных.
                </p>
                <Link to="/Create"><a className="BtnCards">Открыть</a></Link>
                </div>
            </div>
            <div className="card">
            <svg style={{width: "200px", display: "flex", margin: "0 auto"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 12L4 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 17H4" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <div className="card-body">
                <h5 className="card-title">Список всех студентов</h5>
                <p className="card-text">
                Здесь вы можете просмотреть список всех студентов, находящихся в базе данных.
                </p>
                <Link to="/Wiew"><a  className="BtnCards">Открыть</a></Link>
                </div>
            </div>
            <div className="card">
            <svg style={{width: "200px", display: "flex", margin: "0 auto"}} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1,20a1,1,0,0,0,1,1h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5Zm12.707,9.707L20.414,17l2.293,2.293a1,1,0,1,1-1.414,1.414L19,18.414l-2.293,2.293a1,1,0,0,1-1.414-1.414L17.586,17l-2.293-2.293a1,1,0,0,1,1.414-1.414L19,15.586l2.293-2.293a1,1,0,0,1,1.414,1.414Z"></path></g></svg>
                <div className="card-body">
                <h5 className="card-title">Удалить студента</h5>
                <p className="card-text">
                Здесь вы можете удалить студента из базы данных.
                </p>
               <Link to="/Delete"><a className="BtnCards">Открыть</a></Link> 
                </div>
            </div>

        </div>

        

     );
}

export default StudentOptions;