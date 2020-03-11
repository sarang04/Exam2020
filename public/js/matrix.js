function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  // write down the no. you want to print
  let matrix = 4;

//for nodes

for( let i=0 ; i<matrix ; i++){
  
  for(let j=0; j<matrix ; j++){
  
    let node={"data":{"id":`N${i}-${j}`}};
  
    nodes.push(node);
    
    // for edges


    if( j < matrix-1 ){
      let obj = {"data":{"id":`${i}-${j}E`,"source" :`N${i}-${j}` ,'target':`N${i}-${j+1}`}}

       edges.push(obj);
    }

    if( j>0 ){
      let obj = {"data":{"id":`${i}-${j}W`,"source" :`N${i}-${j}` ,'target':`N${i}-${j-1}`}}
       edges.push(obj);
    }
    if(i < matrix-1){
      let obj = {"data":{"id":`${i}-${j}S`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j}`}}
       edges.push(obj);
    }
    if(i >0){
      let obj = {"data":{"id":`${i}-${j}N`,"source" :`N${i}-${j}` ,'target':`N${i-1}-${j}`}}
       edges.push(obj);
    }
    
    if( i<matrix-1 && j<matrix-1){
      let obj = {"data":{"id":`${i}-${j}A`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j+1}`}}
       edges.push(obj);
    }
    
    if( j > 0 && i < matrix-1 ){
      let obj = {"data":{"id":`${i}-${j}B`,"source" :`N${i}-${j}` ,'target':`N${i+1}-${j-1}`}}
        edges.push(obj);
    }

  }
}

console.log(edges.length);
console.log(nodes.length);


  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


