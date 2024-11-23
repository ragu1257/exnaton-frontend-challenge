import {IEnergyData} from '../types/energyDataTypes'

const useKPIs = (data : IEnergyData[]) => {
    const totalProduction = parseFloat(data.reduce((acc, item) => acc + item.prod, 0).toFixed(3))
    const totalConsumption = parseFloat(data.reduce((acc, item) => acc + item.cons, 0).toFixed(3))
    const totalSelfConsumed = parseFloat(data.reduce((acc, item) => acc + item.self, 0).toFixed(3))
    
    return { totalProduction, totalConsumption, totalSelfConsumed };
}

export default useKPIs