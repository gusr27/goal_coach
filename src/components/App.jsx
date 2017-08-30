import React,{Component} from 'react'
import {firebaseApp} from '../firebase'
import {connect} from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {
    
    signOut(){
        firebaseApp.auth().signOut()
    }
    
    render(){
        return(
            <div style={{margin: '25%'}} >
                <div>
                    <h3>
                        Goal Coach
                    </h3>
                    < AddGoal />
                    <hr />
                    <h4>Goals</h4>
                    < GoalList/>
                    <hr />
                    <h4>Completed Goals</h4>
                    <CompleteGoalList />
                    <hr/>
                </div>
                <button className="btn btn-danger"
                    onClick={()=> this.signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null)(App)