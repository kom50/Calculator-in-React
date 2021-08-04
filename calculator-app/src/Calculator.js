import { Component} from 'react'
import styles from './Calculator.module.css';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.operators = ['+', '-', '%', '*','/'];
        this.state = {
            buttons : ['pw', 'c', 'ce', '/',  '7', '8', '9', '*', '4', '5', '6', '-',  '1', '2', '3',  '+',  '0', '.', '='],
            exp : "",
        }
    }
    changeHandler = (value)=>{
        let expression = this.state.exp;  // assign state.exp value to expression local variable
        if(value === 'pw'){
            if(!this.check(expression) && expression !== ''){
                expression = (parseInt(expression) * parseInt(expression) ).toString();
            }else{
                expression = '';
            }
        }
        else if(value === 'c'){
            expression = expression.substr(0, expression.length - 1);
        }
        else if(value === 'ce'){
            expression = '';
        }else if(value === '%'){ // Not work 
            // expression = '';
        }else if(value === '.'){
            let index = -1;
            if(expression === ''){
                expression = '0.'
            }else{
                for(let i = expression.length - 1; i >= 0; i--){
                    if(expression.charCodeAt(i) < 48 || expression.charCodeAt(i) > 57){
                        index = i;
                        break;
                    }
                }
                if(expression.indexOf('.', index) === -1){
                    if(this.isOperator(expression.charAt(expression.length - 1))){
                        expression += '0.'
                    }else{
                        expression += '.'
                    }
                }
            }
        }else if(value === '='){    // Equal button
            if(this.state.exp !== ''){
                if(!this.isOperator(expression.charAt(expression.length - 1)))
                    expression = eval(this.state.exp).toString()   
            }
            else {
              expression = ''; 
            }
        }
        else{
            if(this.isOperator(value)){
                if(this.isOperator(expression.charAt(expression.length - 1)))
                    expression = expression.substr(0, expression.length - 1) + value;   // If expression last index contains operator then that operator is remove from expression and add given operator 
                else
                    expression = expression + value;    // If expression last index doesn't contain operator then given operator is added directly at the last index of the expression
            }else{
                // if pressed button is not a operator then pressed button value is added in last index of the expression
                expression = expression + value;
            }
        }
        // Update Expression 
        // And exp is update when the componentDidUpdate method is Call
        this.setState({exp : expression }); 
    };

    isOperator = (op)=>{
        // op - operator
       return (op === '+' || op === '-' || op === '*' || op === '/') ? true : false;
    }
    // Check given expression contains any operator
    check = (exp)=>{
        // this.operators =
        this.operators.forEach((arr, index)=>{
            return exp.indexOf(arr) === -1 ? true : false;
        })
    }
    render() {
        return( 
            <>
            <h3 className = {styles.header } >Calculator</h3>
              <div className = {styles.container} >
                <Field data = { this.state.exp }/>
                {
                    this.state.buttons.map((button, index) =>{
                        return <Button handler = {(value) => {
                                                this.changeHandler(value)
                                                // console.log('Change ', value)
                                            }
                                        }
                        value= {button}
                        key = {index} />
                    })
                }
            </div>
            </>
        )
    }
}

function Button(props) {
    return (
        <input  className = { styles.items } 
                type="button" 
                value = { props.value } 
                onClick = { (event)=>{
                    props.handler(event.target.value)
                    //    console.log(event.target.value)
            }
       }/>
    )
}

function Field(props){
    return (
        <input  className = { styles.items } 
                type="text"
                value = { props.data } 
                disabled= {true} />
    )
}

export default Calculator;