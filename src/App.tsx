import React, {useState} from 'react';
import './App.css';

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter,setFilter]=useState('all')

    let currentMoney=money;

    if (filter === 'RUBLS') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === "RUBLS")
    };

    if (filter === 'Dollars') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === "Dollars")
    };


    let onclickFilterHandler = (nameButton:string) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>onclickFilterHandler('All')}>All</button>
                <button onClick={()=>onclickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={()=>onclickFilterHandler('RUBLS')}>RUBLS</button>
            </div>

        </>

    );
}

export default App;
