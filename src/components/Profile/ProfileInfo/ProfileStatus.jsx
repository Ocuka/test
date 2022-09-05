import React from 'react';
import classes from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
   

    state = {
        editMode : false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
        })
    }

    activateEditMode = () => {
        //console.log(this.state.editMode)
        //setState() - асинхронна ф-ція
        this.setState({
            editMode : true
        })
        //console.log(this.state.editMode)
       //this.state.editMode=true
       //this.forceUpdate()  Цей метод краще не використовувати. (тільки в крайніх випадках)
    } 

    deactivateEditMode = () => {
        this.setState({
            editMode : false
        })
        this.props.updateUserStatus(this.state.status)
    }

    componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
    this.setState({
        status : this.props.status
        })
    }
    
    }

    render() {
    
        return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
            }
        </div>
    )
}
}

export default ProfileStatus;