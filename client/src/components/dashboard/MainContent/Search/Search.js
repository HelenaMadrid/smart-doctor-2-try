// import Search from 'react-search';
// import ReactDOM from 'react-dom';
import ReactSearchBox from 'react-search-box'
import { connect } from "react-redux";
import React, { Component } from 'react'


class SearchBar extends Component {
    state = {
        search: ""
    }

    render() {

        const { patients } = this.props.patients;

        let search = [];
        let searchData;

        let patientData = patients.sort().map(patient => (
            <div
                key={patient._id}
                className="patient-icon"
                onClick={() => this.props.history.push(`/patients/${patient._id}`)}
            >
                <div className="patient-name">{patient.name}</div>
            </div>
        ));

        for (var x = 0; x < patientData.length; x++) {
            if (patientData[x].props.children.props.children) {
                // console.log(patientData);
                console.log("id " + patientData[x].key);
                console.log("patient name " + patientData[x].props.children.props.children);

                searchData = {
                    key: patientData[x].key,
                    name: patientData[x].props.children.props.children
                };


                search.push(searchData);

                console.log(search);
            }
        }



        // let items = [
        //   { id: 0, value: 'ruby' },
        //   { id: 1, value: 'javascript' },
        //   { id: 2, value: 'lua' },
        //   { id: 3, value: 'go' },
        //   { id: 4, value: 'julia' }
        // ]

        return (
            // <div>
            //     <Search items={patientData} />

            //     <Search items={patientData}
            //         placeholder='Search for a patient'
            //         // maxSelected={3}
            //         // multiple={true}
            //         onItemsChanged={this.HiItems.bind(this)} />
            // </div>

            <ReactSearchBox
                placeholder="Placeholder"
                value={this.state.search}
                data={search}
                onChange={record => console.log(record)}
            />
        )
    }
}

const mapStateToProps = state => ({
    patients: state.patients
});

export default connect(
    mapStateToProps,
    {}
)(SearchBar);