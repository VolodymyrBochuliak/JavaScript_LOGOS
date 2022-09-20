
// class Post {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
// }

// const post = new Post('my title', 'Martyn');

async function getData() {
    
    const name = document.querySelector('#serch_fild').value;
    // const year = year.value;
    const url = `https://www.omdbapi.com/?apikey=ab1f95bf&t=${name}&y=${100}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        console.log('done successfully');
    } catch (e) {
        console.log(e);
    }

}

const getBtn = document.querySelector('.btn-get');
getBtn.addEventListener('click', getData);



// async function postData() {
//     try {
//         await fetch(getUrl, {
//             method: 'POST',
//             body: JSON.stringify(post),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         return console.log('data post successfully');
//     } catch (error) {
//         return console.log(error);
//     }
// }

// async function deleteData() {
//     try {
//         await fetch(deleteUrl, {
//             method: 'DELETE'
//         });
//         return console.log('deleted successfully');
//     } catch (error) {
//         return console.log(error);
//     }
// }


// let postsUrl = 'http://localhost:3000/posts';
// let commentsUrl = 'http://localhost:3000/comments';


// const getData = async () => {
//     const postsResponse = await fetch(postsUrl);
//     const commentsResponse = await fetch(commentsUrl);
//     const postsData = await postsResponse.json();
//     const commentsData = await commentsResponse.json();
//     const result = await Promise.all([postsData, commentsData]);
//     console.log('result =>', result);
// }

// document.querySelector('.btn-get').addEventListener('click', getData);




