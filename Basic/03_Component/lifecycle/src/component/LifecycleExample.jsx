import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: 컴포넌트가 생성 중입니다.');
    // state 초기화
    this.state = {
      data: null,
    };
    // 이벤트 처리 메소드 바인딩
    // ...
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: nextProps와 prevState를 받습니다. 상태를 업데이트하려면 객체를 반환하고, 그렇지 않으면 null을 반환합니다.');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: 컴포넌트가 DOM에 마운트되었습니다.');
    // 비동기 작업, 데이터 가져오기 등을 수행합니다.
    this.fetchData();
  }

  // 렌더링 여부를 결정하는 생명주기 메소드
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: 컴포넌트가 다시 렌더링되기 전에 호출됩니다. 불리언 값을 반환합니다.');
    return true;
  }

  // 랜더링 결과가 DOM에 반영되었을 때 실행되는 메소드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: 가상 DOM에서 실제 DOM으로 변경 사항이 반영되기 전에 호출됩니다.');
    return null;
  }

  // 컴포넌트 변경 후 호출되는 메소드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: 컴포넌트가 DOM에서 업데이트된 후에 호출됩니다.');
  }

  // 컴포넌트가 제거되기 직전에 호출되느 메소드
  // - 자원 해제 등에 작업을 처리하는 용도로 사용
  componentWillUnmount() {
    console.log('componentWillUnmount: 컴포넌트가 DOM에서 제거되기 전에 호출됩니다.');
  }

  fetchData() {
    // 비동기 작업을 시뮬레이션합니다.
    setTimeout(() => {
      console.log('데이터를 성공적으로 가져왔습니다!');
      this.setState({ data: '가져온 데이터' });
    }, 2000);
  }

  render() {
    console.log('render: 컴포넌트를 렌더링 중입니다.');
    return (
      <div>
        <h1>컴포넌트 생명주기 예제</h1>
        <p>데이터: {this.state.data}</p>
      </div>
    );
  }
}

export default LifecycleExample;