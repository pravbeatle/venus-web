import React from 'react';

export default class ChatHistory extends React.PureComponent{

    render(){
        const {props} = this;
        return (
            <ul className="collection">
            { props.history.map((messageObj, key) => {
                return (<li className="collection-item avatar" key={key}>
                    <p>
                      <br />
                      <span>{messageObj}</span>
                   </p>
               </li>);
              })
            }
          </ul>
      );
  }
}
