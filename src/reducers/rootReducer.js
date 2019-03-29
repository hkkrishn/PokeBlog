const initState = {
  posts:[
    {id:'1',title:'Dingle Loves Me',body:'Dingle Dingle Little Star How I wonder what you are'},
    {id:'2',title:'Self Taught Genius',body:' I am going to become a self taught genius'},
    {id:'3',title:' I will get a job',body:' I am absolutley determined to get a job in software engineering'}
  ]
}

const rootReducer = (state = initState,action) =>{
  return state;
}

export default rootReducer;