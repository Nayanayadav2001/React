function CompB(Props){

    return <div>
        <h2>Component B</h2>
        <h3>{JSON.stringify(Props)}</h3>
        <h3>Employee Name:{Props.name}</h3>
    </div>
}

export default CompB