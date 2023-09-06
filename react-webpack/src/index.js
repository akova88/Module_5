import React from "react";
import ReactDOM from "react-dom/client";

// Tạo 1 component trong React
// C1: class Component


// Naming Convention của Component = Pascal case

class App extends React.Component {
    render() {
        // Logic
        return (
        // JSX
        <div>
            <h1>Learning Webpack </h1>
            <p>Học lập trình để đi làm</p>
        </div>
        
        )
    }
}

// C2: function Component => Hooks
function App1(){
    const courses = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}];
    return (
        <React.Fragment>
            <h1>Learning Webpack </h1>
        <ul>
            {courses.map((courses, index) => 
                <li key={index}>{courses.name}</li>
            )}
        </ul>
        </React.Fragment>
        
    )
}

// const app = (
//     <React.Fragment>
//         <App />
//         <App1 />
//     </React.Fragment>
    
// );

function BookItem() {
    fetch('https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json')
    .then(async function(response) {
        let data = await response.json();
})
                return (
                    
                <React.Fragment>
                    <img src={data.cover.large} />
                        <h2 className="book-title">Tên sách: {data["ISBN:9780980200447"]["title"]}</h2>
                        <p className="book-author">Tên tác giả: {data["ISBN:9780980200447"].authors[0].name}</p>
                        <p className="book-page">Số trang: {data["ISBN:9780980200447"]['number_of_pages']}</p>
                </React.Fragment>
            )
}

const courses = [
    {
    "id": 15,
    "title": "HTML CSS Pro",
    "slug": "htmlcss",
    "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
    "image": "courses/15/62f13d2424a47.png",
    "icon": "courses/15/62385d6c63dfa.png",
    "video_type": "upload",
    "video": null,
    "old_price": 2499000,
    "price": 1299000,
    "pre_order_price": 699000,
    "students_count": 3628,
    "is_pro": true,
    "is_coming_soon": false,
    "is_selling": true,
    "published_at": "2022-08-18T17:00:00.000000Z",
    "is_registered": false,
    "user_progress": 0,
    "last_completed_at": null,
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
    "video_url": "",
    "landing_page_url": "/landing/htmlcss",
    "is_pre_order": false,
    "is_published": true
    },
    {
    "id": 19,
    "title": "JavaScript Pro",
    "slug": "javascript-pro",
    "description": "Khóa học JavaScript Pro",
    "image": "courses/19/62f13cb607b4b.png",
    "icon": "courses/19/62f13cb685c81.png",
    "video_type": "upload",
    "video": null,
    "old_price": 0,
    "price": 0,
    "pre_order_price": 0,
    "students_count": 0,
    "is_pro": true,
    "is_coming_soon": true,
    "is_selling": false,
    "published_at": "2023-07-31T17:00:00.000000Z",
    "is_registered": false,
    "user_progress": 0,
    "last_completed_at": null,
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
    "video_url": "",
    "landing_page_url": "/landing/javascript-pro",
    "is_pre_order": false,
    "is_published": true
    },
    {
    "id": 20,
    "title": "NextJS Pro",
    "slug": "reactjs-pro",
    "description": "Khóa học NextJS Pro",
    "image": "courses/20/648020fc16597.png",
    "icon": "courses/20/648020fcc8000.png",
    "video_type": "upload",
    "video": null,
    "old_price": 0,
    "price": 0,
    "pre_order_price": 0,
    "students_count": 0,
    "is_pro": true,
    "is_coming_soon": true,
    "is_selling": false,
    "published_at": "2023-11-30T17:00:00.000000Z",
    "is_registered": false,
    "user_progress": 0,
    "last_completed_at": null,
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fcc8000.png",
    "video_url": "",
    "landing_page_url": "/landing/reactjs-pro",
    "is_pre_order": false,
    "is_published": false
    },
    {
    "id": 24,
    "title": "NodeJS Pro",
    "slug": "nodejs-pro",
    "description": "NodeJS Pro",
    "image": "courses/24/648021c0652c6.png",
    "icon": "courses/24/648021c0cd73f.png",
    "video_type": "upload",
    "video": null,
    "old_price": 0,
    "price": 0,
    "pre_order_price": 0,
    "students_count": 0,
    "is_pro": true,
    "is_coming_soon": true,
    "is_selling": false,
    "published_at": "2024-04-06T06:20:00.000000Z",
    "is_registered": false,
    "user_progress": 0,
    "last_completed_at": null,
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0652c6.png",
    "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0cd73f.png",
    "video_url": "",
    "landing_page_url": "/landing/nodejs-pro",
    "is_pre_order": false,
    "is_published": false
    }
    ]

const CourseItem = ({data, handleClick}) => (
    <div>
        <h2 onClick={() => handleClick(data)}>
            {data.title}
        </h2>
        <img src={data.image_url} alt={data.title}/> 
        <p>{data.description}</p>
        <p>{data.students_count}</p>
    </div>
);
        
function App3()  {
    const handleClick = (course) => {
        alert(course.title)
    }
    return (
        <div className="course-list">
        {courses.map(course => (
            <CourseItem
                key={course.id}
                data={course}
                handleClick={handleClick}
                // title={course.title}
                // image={course.image_url}
                // description={course.description}
                // studentsCount={course.students_count}
            />
        ))}
        </div>
    )
}
    




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App3 />);
