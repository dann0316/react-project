import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Card(props) {
    let navigate = useNavigate();

    return (
        <Nav.Link
            className="col-md-4"
            key={props.i}
            onClick={() => {
                navigate(`/detail/${props.i}`);
                // localStorage에 넣어주는 것
                let arr = JSON.parse(localStorage.getItem("watched"));
                // 중복 싫으면 Set자료형 쓰면 됨. => 집합
                // 안에 없으면 넣고
                if(!arr.some(item => item.title === props.shoes[props.i].title)) {
                    arr.push(props.shoes[props.i]);
                    localStorage.setItem("watched", JSON.stringify(arr));
                } else { // 있으면 앞에건 없애고 넣기
                    const index = arr.findIndex((item) => item.title === props.shoes[props.i].title);
                    arr.splice(index,1);
                    arr.push(props.shoes[props.i]);
                    localStorage.setItem("watched", JSON.stringify(arr));
                }
            }}
        >
            <img src={props.shoes[props.i].img} alt="이미지" width="80%" />

            {/* 이렇게도 할 수 있네 src = {'https://codingapple1.github.io/shop/shoes' +props.i +'jpg'} => 데이터 안건드려도 됨*/}
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
        </Nav.Link>
    );
}

export default Card;
