import React, { useContext } from 'react'
import Context from '../../Context/Context'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, 
  LinearScale, 
  PointElement,
} from 'chart.js'
import styles from './Chart.module.css'
import 'chart.js/auto';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement
)

const Chart = () => {
    
    const { selectedBasket } = useContext(Context);

    const titles = selectedBasket?.products.map(product => product.title)

    const titlesAdjusted = titles?.map(title => title.split(' '))

    const normalPricesTitle = selectedBasket?.products.map(product => product.price)

    const discountedPrices = selectedBasket?.products.map(product => product.price * (1 - product.discountPercentage / 100))

    const data = {
        labels: titlesAdjusted,
        datasets: [
            {   
                label: 'Price',
                data: normalPricesTitle,
                backgroundColor: 'blue',
                borderColor: 'blue',
            }, 
            {
                label: 'Discounted price',
                data: discountedPrices,
                backgroundColor: 'black',
                borderColor: 'black',
            },
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            },
        },
        plugins: {
            legend: {
              display: true,
                labels: {
                    font: {
                        size: 14,
                    }
                },
               
            },
        },
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
