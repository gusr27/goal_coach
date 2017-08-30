import React, {Component} from 'react'
import {connect} from 'react-redux'
import {completeGoalRef} from '../firebase'
import {setComplete} from '../actions'


class CompleteGoalList extends Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = []
            snap.forEach(completeGoal=>{
                
                const {title, email} = completeGoal.val()
                completeGoals.push({email, title})
            })
            this.props.setComplete(completeGoals)
        })
    }
    
    clearCompleted(){
        completeGoalRef.set([])
    }
    
    render(){
        return(
            <div>
                {
                    
                    this.props.completeGoals.map((completeGoal,idx)=>{
                           
                        const {title, email} = completeGoal
                        return(
                            <div key={idx}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    }
                                        )
                }
                <button className="btn btn-primary" onClick={()=> this.clearCompleted()} >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {completeGoals} = state;
    
    return{
        completeGoals
    }
}

export default connect(mapStateToProps, {setComplete})(CompleteGoalList)