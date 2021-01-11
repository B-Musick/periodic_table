class PeriodicTable{
    constructor(){
        this.table = d3.select('svg');
        this.tableWidth = this.table.attr('width');
        this.tableHeight = this.table.attr('height');

    }

    drawTable=()=>{
        let elements = [];

        // Load in the elements from JSON file
        // https://www.youtube.com/watch?v=C3dfjyft_m4&ab_channel=JonathanSoma
        fetch('elements.json')
            .then(response=>response.json())
            .then(data=>{
                data.forEach(ele=>{
                    let element = new Element(ele);
                    element.addElementBox();
                })
            })
        
    }
}