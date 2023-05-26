//리엑트 라이브러리 사용 
import React ,{Component}  from 'react';
import  { Button, Text,View } from 'react-native'

//리엑트네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    //리엑트의 Component클래스가 화면에 보여줄 View를 그려내는 작업 메소드 
    //이 메소드 안에서 JSX(Java Script +XML) 언어로 뷰를 설계하고 return 해줌
    render(){

        let name="SAM"
        let buttonTitle="click Me" //버튼에 보여질 글씨
        
        return (
            // <Text>Hello World</Text>
            // <Text>Nice to meet you</Text> 
            //Error - 컴보넌트는 1의 컴포넌트만 리턴 가능

            //뷰 그룹을 사용 (컴포넌트 그룹)
            // JSX는 xml안에서도 JS의 변수 ,함수 사용이 가능
            //XML 안에서 {}는 JS 문법을 쓰는 영역 전체 코드처리는 할수없지만 
            <View>
                <Text>Hello {name} 님</Text>
                <Text>Nice to meet you</Text>
                <Button title={buttonTitle}></Button>
            </View>
        )
    }//render method 

} //My App Class

//MyApp클래스를 다른 .js에서 사용할수 있도록 내보내기
export default MyApp


