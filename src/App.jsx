import React, {Component} from 'react';
import Messagelist from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
    render() {
        return (
            <h1>Hello React :)</h1>
        );
        // return (
        //     <div>
        //         <nav class="navbar">
        //             <a href="/" class="navbar-brand">Chatty</a>
        //         </nav>
        //         <MessageList />
        //         <ChatBar />
        //     </div>
        // );
    }
}
export default App;
