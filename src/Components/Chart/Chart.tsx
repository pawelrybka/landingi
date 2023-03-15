import React, { useContext } from 'react'
import axios from 'axios'
import Context from '../../Context/Context'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
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

    const products = selectedBasket?.products

    const data = {
    datasets: [{
        label: 'Chart',
        data: products,
        backgroundColor: 'red',
        borderColor: 'red',
        parsing: {
        xAxisKey: 'title',
        yAxisKey: 'total'
        }
    }, {
        label: 'Chart',
        data: products,
        backgroundColor: 'blue',
        borderColor: 'blue',
        parsing: {
        xAxisKey: 'title',
        yAxisKey: 'discountedPrice'
        }
    },]
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
