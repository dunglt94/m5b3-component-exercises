import React, {Component} from 'react';

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state={
            num1 : 0,
            num2 : 0,
            result : 0
        }
    }

    calculate = (operator) => {
        let {num1, num2} = this.state;
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                    break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0 ) result = "Can't divide by zero!";
                else result = num1 / num2;
                break;
            default:
        }
        this.setState({result : result});
    }

    render(){
        return (
            <div style={{border:"1px solid black"}} className="w-25 p-2">
                <input type="number" id="num1" value={this.state.num1} className="mb-2"
                       onChange={(e) => this.setState({num1 : parseInt(e.target.value)})}/><br/>
                <input type="number" id="num2" value={this.state.num2}
                       onChange={(e) => this.setState({num2 : parseInt(e.target.value)})}/>
                <p>Result: {this.state.result}</p>
                <button onClick={() => this.calculate('+')}>+</button>
                <button onClick={() => this.calculate('-')}>-</button>
                <button onClick={() => this.calculate('*')}>*</button>
                <button onClick={() => this.calculate('/')}>/</button>
            </div>
        )
    }
}

export default Calculator;