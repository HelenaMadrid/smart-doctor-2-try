import _ from 'lodash'
// import faker from 'faker'
import { connect } from "react-redux";
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'


const initialState = { isLoading: false, results: [], value: '' }

// const source = _.times(5, () => ({
//     title: faker.company.companyName(),
//     description: faker.company.catchPhrase(),
//     image: faker.internet.avatar(),
//     price: faker.finance.amount(0, 100, 2, '$'),
// }))

let search = [];
let searchData;

class SearchExampleStandard extends Component {
    state = initialState


    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(search, isMatch),
            })
        }, 300)
    }

    render() {

        const { patients } = this.props.patients;
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
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>
                            {JSON.stringify(this.state, null, 2)}
                        </pre>
                        <Header>Options</Header>
                        <pre style={{ overflowX: 'auto' }}>
                            {JSON.stringify(search, null, 2)}
                        </pre>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    patients: state.patients
});

export default connect(
    mapStateToProps,
    {}
)(SearchExampleStandard);
