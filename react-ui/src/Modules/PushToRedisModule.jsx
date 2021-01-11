import React, { Component } from 'react'
import $ from 'jquery'
import RedisService from '../Services/RedisService'

class PushToRedisModule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataType:'',
            key:'',
            value:''
        }
        this.changeDatatype = this.changeDatatype.bind(this);
        this.changeKey = this.changeKey.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.addValueToRedis = this.addValueToRedis.bind(this)
    }

    render() {
        return(
            <div id='left' >
                <div class="navbar navbar-dark bg-dark" >
                <span class="headerText">Push data to redis</span>
                </div>
                <div class="mainContainer border-right border-warning">
                    <div class="dropdown"  style={{ paddingTop:'10px', textAlign:'center' }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose Datatype
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={this.changeDatatype}>String</a>
                            <a class="dropdown-item" onClick={this.changeDatatype}>List</a>
                            <a class="dropdown-item" onClick={this.changeDatatype}>Set</a>
                        </div>
                    </div>
                    <form style={{ marginTop:'10px'}}>
                        <div class="row p-3">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Key" onChange={this.changeKey}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Value" onChange={this.changeValue}/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{ marginLeft:'300px'}} onClick={this.addValueToRedis}>Submit</button>

                    </form>
                </div>
            </div>
        )
    }

    changeDatatype = (e) => {
        e.preventDefault();
        $('#dropdownMenuButton').html(e.target.text);
        this.setState({dataType:e.target.text})
    }

    changeKey = (e) =>{
        e.preventDefault();
        this.setState({key:e.target.value})
    }

    changeValue = (e) =>{
        e.preventDefault();
        this.setState({value:e.target.value})
    }
    
    addValueToRedis = (e) => {
        e.preventDefault();
        console.log(this.state)
        var redisData = {dataType: this.state.dataType, key: this.state.key, value: this.state.value};
        RedisService.addDataToRedis(redisData).then( res => {
            console.log("Data added")
        });
    }
}

export default PushToRedisModule