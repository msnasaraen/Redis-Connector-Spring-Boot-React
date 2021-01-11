import react,{Component} from 'react'
import $ from 'jquery'
import RedisService from '../Services/RedisService'

class FetchFromRedisModule extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataType:'',
            key:'',
            value:''
        }
        this.changeDatatype = this.changeDatatype.bind(this);
        this.changeKey = this.changeKey.bind(this)
        this.getValueFromRedis = this.getValueFromRedis.bind(this)
    }
    render() {
        return(
            <div id='right'>
                <div class="navbar navbar-dark bg-dark">
                <span class="headerText">Fetch Data from Redis</span>
                </div>

                <div class="dropdown"  style={{ marginTop:'10px', textAlign:'center' }}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="getRedis" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <div class="col-sm-3">
                            
                        </div>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" placeholder="Key" onChange={this.changeKey}/>
                        </div>
                        <div class="col-sm-3">
                            
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.getValueFromRedis} style={{ marginLeft:'300px'}}>Submit</button>

                </form>
                <div style={{ marginTop:'10px', textAlign:'center' }}>
                        Value from Redis: {this.state.value}
                    </div>
            </div>
        )
    }

    changeDatatype = (e) => {
        e.preventDefault();
        $('#getRedis').html(e.target.text);
        this.setState({'dataType':e.target.text});
    }

    changeKey = (e) =>{
        e.preventDefault();
        this.setState({'key':e.target.value});
    }

    
    getValueFromRedis = (e) =>{
        e.preventDefault();
        console.log(this.state)
        var redisData = {dataType: this.state.dataType, key: this.state.key};
        RedisService.getValueFromRedis(redisData).then( res => {
            console.log("Data added")
            console.log(res);
            this.setState({value:res.data.value})
        });
    }
}

export default FetchFromRedisModule