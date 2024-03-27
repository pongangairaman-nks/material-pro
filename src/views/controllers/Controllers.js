import { Row, Col, Table, Card } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import MaterialIcon from '@material/react-material-icon';

const Controllers = () => {
  return (
    <>
      <Row>
        <Col lg="12">
          <BreadCrumbs />
        </Col>
        <Col lg="12">
          <Card>
            <Table striped responsive>
              <thead>
                <tr>
                  <th scope="col">Controller Name</th>
                  <th scope="col"> Model</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td style={{ display: 'flex' }}>
                    <div>
                      <MaterialIcon icon="create" />
                    </div>
                    <div style={{ marginLeft: '8px' }}>
                      <MaterialIcon icon="delete_outline" />
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td style={{ display: 'flex' }}>
                    <div>
                      <MaterialIcon icon="create" />
                    </div>
                    <div style={{ marginLeft: '8px' }}>
                      <MaterialIcon icon="delete_outline" />
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td style={{ display: 'flex' }}>
                    <div>
                      <MaterialIcon icon="create" />
                    </div>
                    <div style={{ marginLeft: '8px' }}>
                      <MaterialIcon icon="delete_outline" />
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td style={{ display: 'flex' }}>
                    <div>
                      <MaterialIcon icon="create" />
                    </div>
                    <div style={{ marginLeft: '8px' }}>
                      <MaterialIcon icon="delete_outline" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Controllers;
