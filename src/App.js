import React from 'react'
import './App.css';
import {Data} from './data'
import Products from './Products'
import Filter from './Filter'
// import Filter2 from './Filter2'

class App extends React.Component {

state = {
 products:localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):Data,
 sort:localStorage.getItem('sort')?JSON.parse(localStorage.getItem('sort')):'',
 cat:'',
 itemsAll:Data,
}


// sorting

sorting = (e) => {
const sortingEl = e.target.value

const sortResalt = this.state.products.sort((a,b)=>{
  if(sortingEl==='all'){
    return a.id>b.id ? 1 : -1
  }
  if(sortingEl==='low'){
    return a.price>b.price ? 1 : -1
  }
  if(sortingEl==='high'){
    return a.high<b.high ? 1 : -1
  }
})
this.setState(
  {
  products:sortResalt,
  sort:sortingEl
  },
  ()=>{
    localStorage.setItem('sortSelect',JSON.stringify(this.state.sort))
    localStorage.setItem('data',JSON.stringify(this.state.products))
  }
)
}



// filtering by name


filteringName = (e) =>{
  let categ = e.target.value
  if(categ === ''){
    this.setState({
      cat:categ,
      products:Data
    })
  }
  else{
    this.setState({
      cat:categ,
      products:Data.filter(product=>{
        return product.cat === e.target.value
      })
    })
  }
}







 render(){
  return (
    <div className="App">
      <Filter
      sorting={this.sorting}
      sorts = {this.state.sort}
      filteringName={this.filteringName}
      cat={this.state.cat}
      
      />
      {/* <Filter2
      handleBtns={this.handleBtns}
      /> */}
      <Products products = {this.state.products} />
    </div>
  );
 }
}

export default App;
