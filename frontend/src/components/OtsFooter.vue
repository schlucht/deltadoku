<template>
  <footer>
    <div>
        <span>Autor:</span>
        <span>Schmid Lothar</span>
    </div>
    <div>
        <span>Erstellt:</span>
        <span>12.1.2022</span>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@import "../styles";
    footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: $col-blue;
        height: 8rem;        
    }
    div {
        color: $col-white;
        span {            
            padding: 0.5rem;
            &:first-child{
                font-weight: 700;
            }  
        }    
         
    }
    
    
</style>