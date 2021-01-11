class Element extends PeriodicTable{
    constructor(eleObj){
        super();
        this.width = this.tableWidth / 18;
        this.height = this.tableHeight / 9;
        this.name = eleObj.name;
        this.elemnetNum = eleObj.atomic_mass;
        this.protonNum = eleObj.protons;
        this.electronNum = eleObj.electrons;
        this.symbol = eleObj.symbol;
        this.x = eleObj.x,
        this.y = eleObj.y
    }

    addElementBox=()=>{
        let element = this.table.append('rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('x', this.x * this.width)
            .attr('y', this.y*this.height)
            .attr('stroke','black')
            .attr('fill','white');
        
        // Append the symbol
        this.table.append('text')
            .attr('x',this.x*this.width+this.width/2)
            .attr("y", this.y*this.height+this.height/3)
            .style('text-anchor','middle')
            .text(this.symbol)
        
        // Append the name
        this.table.append('text')
            .attr('x', this.x * this.width + this.width / 2)
            .attr("y", this.y * this.height + this.height / 1.1)
            .style('text-anchor', 'middle')
            .text(this.name)
            .attr("font-size", "0.55em")

    }
    
}