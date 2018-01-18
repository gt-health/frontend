import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

export default class Cases extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

  render() {
    console.log('*** rendering cases component ***');

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Date',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Actions</span>, // Custom header components!
      accessor: 'friend.age',
      Cell: props => <Link className="table-link" to={`/cases/${this.props.value}/patient`}><button type="button" className="button is-link is-small">View Case</button></Link>
    }]

    return (
      <div className="cases">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              STI client
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/search">Search</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="cases-table-wrapper">
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
      </div>
    );
  }
}
