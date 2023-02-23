import {useEffect, useState} from 'react';
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Tooltip } from 'recharts';

const options: any = { year: 'numeric', month: 'short' };


export function MonthlyCollisions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/collisions')
            .then((res) => res.json())
            .then((data) => setData(data.filter(x => x.mon > '2016-02-01T08:00:00.000Z')))
    }, []);

    return (<div>
        <h2 className='chart-header'>Collisions per Month</h2>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart width={500} height={300} data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <XAxis dataKey="mon" tickFormatter={v => new Date(v).toLocaleDateString(undefined, options)}/>
                <YAxis label={{value:'Number of accidents', angle: -90, position: 'insideLeft'}}/>
                <Bar dataKey="total" fill="#8884d8"/>
                <Tooltip formatter={(value, name) => [value, 'Number of collisions']} labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, options)}/>
            </BarChart>
        </ResponsiveContainer>
        <h2 className='chart-header'>Injuries per Month</h2>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart width={500} height={300} data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <XAxis dataKey="mon" tickFormatter={v => new Date(v).toLocaleDateString(undefined, options)}/>
                <YAxis label={{value:'Number of injuries', angle: -90, position: 'insideLeft'}}/>
                <Bar dataKey="mon_injured" fill="#8884d8"/>
                <Tooltip formatter={(value, name) => [value, 'Number of injuries']} labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, options)}/>
            </BarChart>
        </ResponsiveContainer>
    </div>)
}