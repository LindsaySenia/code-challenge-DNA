function dnaStrand(str) {
    let newDNA = ''
   for (let i = 0; i < str.length; i++)
     if (str[i] === 'A'){
       newDNA += 'T'
     } else if (str[i] === 'T') {
       newDNA += 'A'
     } else if (str[i] === 'C') {
       newDNA += 'G'
     } else if (str[i] === 'G') {
       newDNA += 'C'
     }
     return (newDNA)
   
   }
   
   
   
   console.log(dnaStrand("ATTGC")) 
   
   console.log(dnaStrand("GTAT")) 