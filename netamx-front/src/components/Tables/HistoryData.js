import { Table } from 'reactstrap';
import moment from 'moment';

const HistoryData = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <div>No exiten registros</div>
      ) : (
        <Table className="align-items-center  table-flush" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th style={{ textAlign: 'center' }}>Estatus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((history, i) => (
              <tr key={i}>
                <th scope="row">{history.Id}</th>
                <td>{history.Description}</td>
                <td>{`${moment(history.UpdatedAt).format('DD/MM/YYYY')}`}</td>
                <td>{`${moment(history.UpdatedAt).format('HH:mm')}`}</td>
                <td style={{ textAlign: 'center' }}>{history.Status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default HistoryData;
