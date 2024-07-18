'use client';
import React, { useMemo } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData}) => {
    const data = useMemo(() => {
        if (!historicalData || historicalData.length <= 1) return [["Currency", "Total Market Cap"]];
        return [
            ["Currency", "Total Market Cap"],
            ...historicalData.slice(1).map(([currency, marketCap]) => [currency, marketCap])
        ];
    }, [historicalData]);

    if (data.length === 1) {
        return <div>No historical data available</div>;
    }

    return (
        <>
            <div className='flex justify-center ml-[10%]'>
                <Chart
                    chartType="LineChart"
                    width="90%"
                    height="400px"
                    data={data}
                    options={{
                        backgroundColor: '#1a1a1a',
                        hAxis: {
                            title: 'Total Market Cap',
                            textStyle: { color: '#FFF' },
                            titleTextStyle: { color: '#FFF' }
                        },
                        vAxis: {
                            title: 'Currency',
                            textStyle: { color: '#FFF' },
                            titleTextStyle: { color: '#FFF' }
                        },
                        colors: ['#e63946'],
                        legend: { textStyle: { color: '#FFF' } },
                        tooltip: {
                            textStyle: { color: '#000' },
                            isHtml: true,
                            trigger: 'both'
                        },
                    }}
                    legendToggle
                />
            </div>
        </>
    );
}

export default LineChart;
