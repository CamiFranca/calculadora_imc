import Button from './Button';
import './ImcTable.css'


const ImcTable = ({data, imc, info, infoClass, resetCalc}) => {
  return ( 
      <div id='result-container'>
      <p id="imc-number">Seu Imc:
      <span className={infoClass}>{imc}</span>
      </p>
      <p id="Imc-info">Situação atual:
      <spam className={infoClass}>{info}</spam>
      </p>
      <h3>Confira as classificações:</h3>
      <div className="imc-table">
        <div className="table-Header">
        <h4>IMC</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
        </div>  
        {data.map((item) => (
          <div className="table-data" key={item.info}>
           <p>{item.classification}</p> 
           <p>{item.info}</p> 
           <p>{item.obesity}</p> 
          </div>
        ))}
      </div>
      <Button id="back-btn" text="voltar" action={resetCalc}/>
    </div>
  )
};

export default ImcTable
