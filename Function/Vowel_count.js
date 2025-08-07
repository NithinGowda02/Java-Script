
function vowel_count(str){
    let count = 0;
    const vowels = 'aeiouAEIOU';
    
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    
    return count;
}
console.log(vowel_count("nithin")); // Output: 3