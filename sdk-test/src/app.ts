import Typicode from 'sdk-demo'; 

const client = new Typicode({
    apiKey: "123",
});

client.getPosts().then((p)=> {
    console.log(p);
});