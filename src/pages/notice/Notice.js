import NoticeCSS from './Notice.module.css';
import { useNavigate } from 'react-router-dom';

/* pros
properties의 약어, 컴포넌트 속성을 설정할 때 사용하는 요소
Main에서 Product 컴포넌트를 생성할 때 <Product product={ product(상품 정보가 담긴 객체) } />와 같이 생성하면
Product에서 전달 된 값을 꺼내서 사용할 수 있다. 구조 분해 할당을 이용해서 꺼낸다. */
function Notice({ notice : {noticeCode, noticeTitle, noticeDate, member}}) {

    const navigate = useNavigate();

    const onClickNoticeHandler = (noticeCode) => {
        /* 상품 div 클릭 시 전달 된 productCode를 기반으로 /product/1 와 같은 navigate 요청을 보낸다.
        replace : true -> 뒤로 가기 불가, replace : false -> 뒤로 가기 가능 */
        navigate(`/notice/${noticeCode}`, { replace : false });
    }

    return (
        <div
            className={ NoticeCSS.productDiv }
            onClick={ () => onClickNoticeHandler(noticeCode) }
        >
                
                    <div width="5%">{ noticeCode }</div>
                    <div width="500px">{ noticeTitle }</div>
                    <div width="15%">{ noticeDate }</div>
                    <div width="25%">{ member.memberName }</div>
                    <div>
                    <button className="deleteBtn"
                >
                    삭제
                </button></div>
 
        </div>
    );

}

export default Notice;