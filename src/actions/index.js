import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts  =()=>async(dispatcher)=>{
        const response=await jsonPlaceHolder.get('/posts');
        
        dispatcher({type:'FETCH_POST',payload:response.data})
    };

 