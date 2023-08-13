import {useState, useEffect} from "react"
import axios from "axios"

const Posts = () => {
    let [lists, setLists] = useState([])
    const [postData, setPostData] = useState({
        title: "",
        body: ""
    })
    const [isPosted, setIsPosted] = useState(false)
    
    useEffect(() => {
        // 13.208.241.62
        axios.get(`http://${process.env.REACT_APP_API_IP}:8081/index`)
        .then((res) => {
            console.log(res.data)
            setLists(res.data.posts)
        })
        .catch((err) => {
            console.error(err)
        })
    },[isPosted])
    
    console.log(lists)
    
    const pLists = lists.map((list) => {
        return (
            <>
                <h3>{list.title}</h3>
                <p>{list.body}</p>
            </>
        )
    })
    
    const handleChange = (e) => {
    //   title: 入力値
       setPostData({...postData, [e.target.name]: e.target.value})
    //   if(e.target.name == "title"){
    //       setPostData({title: e.target.value})
    //   }else{
           
    //   }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            `http://${process.env.REACT_APP_API_IP}:8081/posts`,
            postData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res => {
            console.log(res.data) 
            setIsPosted(isPosted => !isPosted)
            setPostData({
                title: "",
                body: ""
            })
        }).catch(error => console.log(error))
    }
    
    console.log(postData)
    
    return (
        <div>
            <h2>posts list</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" value={postData.title} onChange={handleChange} />
                <label htmlFor="body">body</label>
                <textarea name="body" value={postData.body} onChange={handleChange} />
                <button type="submit">submit</button>
            </form>
            {pLists}
        </div>
    )
}

export default Posts;