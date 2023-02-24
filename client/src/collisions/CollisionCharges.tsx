import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#4f602b",
"#9249cd",
"#73b643",
"#cf599b",
"#64ad86",
"#d1503a",
"#7698c2",
"#c5964c",
"#625098",
"#8d474c"];

export default function CollisionCharges() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/collisions/charges')
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (<div className="chart-section">
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
    </div>)
}