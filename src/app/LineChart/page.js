'use client';
import React, { useMemo } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData, className = '' }) => {
    const data = useMemo(() => {
        if (!historicalData?.prices?.length) return [["Date", "Prices", "Volume", "Market Cap"]];
        return [
            ["Date", "Prices", "Volume", "Market Cap"],
            ...historicalData.prices.map((_, index) => [
                new Date(historicalData.prices[index][0]).toLocaleDateString(),
                historicalData.prices[index][1],
                historicalData.total_volumes[index][1],
                historicalData.market_caps[index][1]
            ])
        ];
    }, [historicalData]);

    if (data.length === 1) {
        return <div>No historical data available</div>;
    }

    return (
        <>
            <h2 className="text-center text-2xl mt-8 mb-4">Historical Data Chart</h2>
            <div className='flex justify-center'>
                <Chart
                    chartType="LineChart"
                    width="90%"
                    height="400px"
                    data={data}
                    options={{
                        backgroundColor: '#1a1a1a',
                        hAxis: {
                            title: 'Date',
                            textStyle: { color: '#FFF' },
                            titleTextStyle: { color: '#FFF' }
                        },
                        vAxis: {
                            title: 'Value',
                            textStyle: { color: '#FFF' },
                            titleTextStyle: { color: '#FFF' }
                        },
                        colors: ['#3c096c', '#e63946', '#f4a261'],
                        legend: { textStyle: { color: '#FFF' } },
                        tooltip: {
                            textStyle: { color: '#000' },
                            isHtml: true,
                            trigger: 'both'
                        },
                        focusTarget: 'category',
                        crosshair: { trigger: 'both', orientation: 'both' },
                    }}
                    legendToggle
                    chartPackages={['corechart', 'controls']}
                    chartEvents={[
                        {
                            eventName: 'ready',
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const tooltip = chart.getContainer().getElementsByTagName('div')[1];
                                if (tooltip) {
                                    tooltip.style.cssText = `
                background-color: rgba(26, 26, 26, 0.8) !important;
                color: #FFF !important;
                padding: 10px !important;
                transition: all 0.3s ease !important;
              `;
                                    tooltip.addEventListener('mouseover', () => {
                                        tooltip.style.cssText = `
                  background-color: #FFF !important;
                  color: #000 !important;
                  padding: 10px !important;
                  transition: all 0.3s ease !important;
                `;
                                    });
                                    tooltip.addEventListener('mouseout', () => {
                                        tooltip.style.cssText = `
                  background-color: rgba(26, 26, 26, 0.8) !important;
                  color: #FFF !important;
                  padding: 10px !important;
                  transition: all 0.3s ease !important;
                `;
                                    });
                                }
                            },
                        },
                    ]}
                />
            </div>
        </>
    );
}

export default LineChart;