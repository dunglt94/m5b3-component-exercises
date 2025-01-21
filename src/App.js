import React, {Component} from 'react';
import Alert from "./components/Alert";

class App extends Component {
    render() {
      return (
          <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
      )
    }
}

export default App;
