import React, { Component } from 'react'
import MyProgress from '../components/MyProgress';
 
class ProgressContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      progress: 0,
      active: false
    }
  }
 
  componentDidMount(){
    window.progressbar = this // 중요, window 전역에 ProgressContainer 할당
  }
 
  onChange = (value) => {
    if(value === 100){
      // 응답완료 시, initProgress 콜백 호출
      this.setState({
        progress: value,
        active:true
      }, this.initProgress)
    } else{
      // progress 가 변할때마다 state 갱신
      this.setState({
        progress: value,
        active:true
      })
    }
  }
 
  initProgress = () => {
    setTimeout(() => {
      this.setState({
        active:false,
        progress: 0
      })
    }, 1000)
  }
 
  render() {
    return (
      <MyProgress 
        active={this.state.active} 
        progress={this.state.progress}
      />
    )
  }
}
 
export default ProgressContainer