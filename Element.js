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
        this.group = eleObj.group;
        this.x = eleObj.x;
        this.y = eleObj.y;
        this.color = {
            "noble_gas":"red",
            "alkalai_metal":"blue",
            "other_non_metal":"lightblue",
            "metalloid":"grey",
            "halogen":"purple",
            "alkalai_earth_metal": "purple"

        }

    }

    addElementBox=()=>{
        let element = this.table.append('rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('x', this.x * this.width)
            .attr('y', this.y*this.height)
            .attr('stroke','black')
            .attr('fill',this.color[this.group]);
        
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

    setColor=()=>{
        if(this.x<2){
            return "lightblue";
        }
        return "white";
    }
    
}