import CompB from "./CompB"
function CompA(){
    var msg='Good Morning'
    var name='Sirisha'

    return <div>
        <h2>Component A</h2>
        <h4>Hello! {msg}, Miss {name}</h4>
        <hr/>

        <CompB Prop1={msg} name={name} Prop3={100}/>

    </div>
}

export default CompA