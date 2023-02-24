import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#dcebc9",
"#cab8e5",
"#abc7a5",
"#9cb8e2",
"#dec0a5",
"#94cfe3",
"#e6b8c4",
"#92c2ba",
"#c7c6dc",
"#bbeae7"];

export default function CollisionCharges() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/collisions/charges')
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (<>
        <h2 className="chart-header">Primary Cause of Collision</h2>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart width={500} height={300}>
                <Pie data={data} dataKey="count" nameKey="charge_desc" label={(x) => x.charge_desc}>
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]}/> 
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </>)
}