import React, { useContext } from 'react'
import Context from '../../Context/Context'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, 
  LinearScale, 
  PointElement
} from 'chart.js'
import styles from './Chart.module.css'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement
)

const Chart = () => {

    const { selectedBasket } = useContext(Context);

    const normalPrices = selectedBasket?.products

    const discountedPrices = selectedBasket?.products.map(product => ({
        ...product, price: product.price * (1 - product.discountPercentage / 100),
      }));

    const data = {
        datasets: [
            {
                data: normalPrices,
                backgroundColor: 'black',
                borderColor: 'black',
                parsing: {
                    xAxisKey: 'title',
                    yAxisKey: 'price'
                }
            }, 
            {
                data: discountedPrices,
                backgroundColor: 'blue',
                borderColor: 'blue',
                parsing: {
                    xAxisKey: 'title',
                    yAxisKey: 'price'
                }
            },
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
    <div className={styles.chart}>
        <Line
            data={data}
            options={options}
        ></Line>
    </div>
  )
}

export default Chart
