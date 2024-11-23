interface KPIProps {
  totalProduction: number;
  totalConsumption: number;
  totalSelfConsumed: number;
}

const KPIs = ({ totalProduction, totalConsumption, totalSelfConsumed } : KPIProps) => {
  return (
    <div className="kpi-container">
      <div className="kpi-card">
        <h3>Total Production</h3>
        <p>{totalProduction} kWh</p>
      </div>
      <div className="kpi-card">
        <h3>Total Consumption</h3>
        <p>{totalConsumption} kWh</p>
      </div>
      <div className="kpi-card">
        <h3>Total Self-Consumed</h3>
        <p>{totalSelfConsumed} kWh</p>
      </div>
    </div>
  );
};

export default KPIs;
